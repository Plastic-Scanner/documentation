---
title: Firmware installation
---
Up to date source of the firmware can be found [here](https://github.com/Plastic-Scanner/DB2.x-Firmware/)
## Requirements

Firmware runs on DB2.x (tested on DB2.1), powered by Arduino.
Requires **PlatformIO**, a cross-platform embedded development toolset. See installation instructions [here ](https://platformio.org/install/)it can be as easy as one-click-plugin-installation (PlatformIO IDE).

In order to build and upload the firmware to DB2.x, connect the board to computer and find the *Build* and *Upload* buttons in the PlatformIO IDE OR use the following commands:

```
$ pio run -t upload 		# build and upload fw image
```

The compiled firmware image is placed in `.pio/build/<board>/firmware.hex`.  
Compilation options can be tweaked in *platformio.ini* file (see [build options](https://docs.platformio.org/en/latest/projectconf/section_env_build.html)).

## Different IC's
There are differenet branches in the Github repository for different IC's. The master branch is for the ADS1256, but there are also branches for the NAU7802. And for the LED driver there is a branch for the TLC59209 and one for the PCA9551.

## Usage

Connect your DB2.x to your computer, build and flash the firmware and open the serial console with `$ pio device monitor` or your favourite app (e.g Putty, screen, minicom, picocom...). Enable local echo in order to see commands you're typing by adding `--echo` to command above, or pressing CTRL+T followed by CTRL+E while running it.

User can send the following commands:

```
> scan
> adc
> led [i] on|off    # i = 0..7
> help
```

Scan command outputs a full scan, 8 values, one for each LED.  
Adc command outputs a reading from the ADC chip.  
Led command turns on or off a LED, indexed from 0 to 7.  
Help lists all available commands.  

## Development
Feedback on architecture and implementation is welcome. Firmware currently controls an Arduino, which "talks" to an ADC chip and a LED driver, communicating via the serial interface. In directory `app` are the main sources, `test` is for unit tests (which needs much more love and actual tests), `drivers` contains custom drivers for componments on board.

## Contributing
Feel free to improve, modify and contribute to this project. You can find the lastest open source code here [Github Repo](https://github.com/Plastic-Scanner/DB2.x-Firmware/).