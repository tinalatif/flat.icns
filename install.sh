#/bin/sh

# exit on errors
set -o errexit
set -o nounset

# constants
URL="https://github.com/tinalatif/flat.icns/archive/master.zip"
ZIP="/tmp/tinalatif-zip"
DIR="/tmp/tinalatif-icns"
APPS="/Applications"

# replace_icon ICNS APP
replace_icon() {
  file="$1"
  dest="$2"
  icon=/tmp/$(basename "$file")
  rsrc=/tmp/icon.rsrc

  # generate rsrc
  cp "$file" "$icon"
  sips -i "$icon" > /dev/null
  DeRez -only icns "$icon" > "$rsrc"

  # set icon
  Rez -append $rsrc -o "$dest"$'/Icon\r'
  SetFile -a C "$dest"
  SetFile -a V "$dest"$'/Icon\r'
}

# replace_app_icon ICNS
replace_app_icon() {
  icon="$1"
  name=$(basename "$icon" .icns)
  app="$APPS/$name.app"
  if [ -d "$app" ]; then
    echo "  * $name"
    replace_icon "$icon" "$app"
  fi
}

# backup_app_icon APP
backup_app_icon() {
  app="$1"
  name=$(basename "$app" .app)
  icon="/icons_backup/$name.icns"
  if [ -d "$app" ]; then
    cp -f "$app/Contents/Resources/$name.icns" "/icons_backup/"
    echo "  * $name"
  fi
}

# need root
if [ $EUID -ne 0 ]; then
  echo
  echo " Whoops! flat.icns needs root permissions to install your new app icons"
  echo " To run with root permissions do: \"sudo ./install.sh\""
  echo
  exit 1
fi

echo
echo " flat.icns Installer - Created by Tina Latif, Modified by Sébastien Fulmer"
echo " GitHub Repository: https://github.com/tinalatif/flat.icns/"

echo
echo " Step 1 of 4: Downloading latest icons..."
curl -L --progress-bar -o $ZIP $URL

echo
echo " Step 2 of 4: Unpacking icons..."
unzip -qq -o -j $ZIP -d $DIR

echo
echo " Step 3 of 4: Backing up original app icons..."
if ! [ -d "/icons_backup" ]; then
  mkdir "/icons_backup"
fi

for app in $APPS/*.app; do
  backup_app_icon "$app"
done

echo
echo " Step 4 of 4: Replacing app icons..."
for file in $DIR/*.icns; do
  replace_app_icon "$file"
done

echo
echo " Thanks for installing flat.icns, we hope you'll enjoy all your lovely new icons!"
echo " Now that we're all done, you'll need to restart your computer for the changes to take effect."
echo
