#/bin/sh

# exit on errors
set -o errexit
set -o nounset

# constants
URL="https://github.com/tinalatif/flat.icns/archive/master.zip"
DIR="/icons_backup"
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

# restore_app_icon ICNS
restore_app_icon() {
  icon="$1"
  name=$(basename "$icon" .icns)
  app="$APPS/$name.app"
  if [ -d "$app" ]; then
    replace_icon "$icon" "$app"
    echo "  * $name"
  fi
}

# need root
if [ $EUID -ne 0 ]; then
  echo
  echo " Whoops! flat.icns needs root permissions to restore your original app icons."
  echo " To run with root permissions do: \"sudo ./uninstall.sh\""
  echo
  exit 1
fi

echo
echo " flat.icns Uninstaller - Created by Tina Latif, Modified by Sébastien Fulmer"
echo " GitHub Repository: https://github.com/tinalatif/flat.icns/"

echo
echo " Step 1 of 1: Restoring original app icons..."
for file in $DIR/*.icns; do
  restore_app_icon "$file"
done

echo
echo " We're sorry you uninstalled flat.icns, we hope you can tell us how we can make it better!"
echo " Now that we're all done, you'll need to restart your computer for the changes to take effect."
echo
