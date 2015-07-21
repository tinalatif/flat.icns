#/bin/sh

# exit on errors
set -o errexit
set -o nounset

# constants
URL='https://github.com/tinalatif/flat.icns/archive/master.zip'
ZIP='/tmp/tinalatif-zip'
DIR='/tmp/tinalatif-icns'

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
  app="/Applications/$name.app"
  if [ -d "$app" ]; then
    echo "  * $name"
    replace_icon "$icon" "$app"
  fi
}

echo
echo ' Thanks for installing flat.icns!'

# need root
if [ $EUID -ne 0 ]; then
  echo
  echo ' ERROR: script needs root to change app icons.'
  echo ' FIX: run with sudo or su.'
  echo
  exit 1
fi

echo
echo ' Downloading icon files'
curl -L --progress-bar -o $ZIP $URL
unzip -qq -o -j $ZIP -d $DIR

echo
echo ' Replacing app icons'
for file in $DIR/*.icns; do
  replace_app_icon "$file"
done

echo
echo ' All done! Restart your computer.'
echo
