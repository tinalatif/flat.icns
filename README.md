flat.icns
=========

A flat icon set for OS X for a more consistent look.

## Installation

There are a few icon managers out there. I use and recommend [LiteIcon](http://www.freemacsoft.net/liteicon).

Just drag and drop the icons onto their corresponding applications, and then log out and back in to refresh the dock.

### Manual installation

Some programs may require manual installation (for example, if they are not directly in the Applications folder). The icns folder contains all the .icns files for this.

1. Find the .icns file for the program
2. Navigate to the program
3. Right-click on the program and select 'Get Info'
4. Drag the .icns file onto the existing icon for the program in the info panel 

### Flat dock

For the best results, I recommend you use a [2D dock instead of a 3D dock](http://hints.macworld.com/images/105dockcomparo.jpg).

#### OS X 10.8 (Mountain Lion) or below

Use the command: 

	defaults write com.apple.dock no-glass -boolean YES 

(revert this by, you guessed it, changing `YES` to `NO`)

#### OS X 10.9 (Mavericks) or above

The above command won't work. The good news is, the left and right-positioned docks are both 2D, so you can just move the position of your dock. The bad(?) news is that the left and right-side docks are white instead of black, but there are a couple work-arounds for that which I'll leave up to you to figure out.