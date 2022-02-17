# Development Board 2.0

The goal of this development board is to make it easy to test and debug different situations.
This board is not optimised for size or functionality, but for easy of use for development.

<img src="/img/developmentboards/developmentboard2.0.jpg" alt="development board 2.0" width="200"/>

| Item | Description|
| ----------- | ----------- |
| 🌈 Codename     | Beige |
| 📆 Release date| June 2019 |
| 🦄 People                  | Jure Vidmar and Jerry de Vos       |      |
| ⌚ Development time  |  3 months |

## Documentation

### Useful links
[PCB Schematic](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/PCB/PCB%20Schematics.pdf)  
[PCB Pinout](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/PCB/PCB%20Pinout.pdf)  
[PCB BOM](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/PCB/PCB%20BOM.pdf)  
[PCB Technical drawing](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/CAD/PCB%20Technical%20Drawing.pdf)  

### Packages

Hardware package - click [here](https://github.com/Plastic-Scanner/DB2.0-Hardware/archive/refs/heads/main.zip) to download all hardware documentation of this development board  
Firmware package - click [here](https://github.com/Plastic-Scanner/DB2.0-Hardware/archive/refs/heads/main.zip) to download all firmware (documentation) of this development board  
Software package - click [here](https://github.com/Plastic-Scanner/DB2.0-Hardware/archive/refs/heads/main.zip) to download all software (documentation) of this development board  

## Current issues

* There is no clear marking on the pcb which revision it is.
* Add silkscreen labels to connectors.
* LED3 (indicator for 2.5v reference) is breaking the reference voltage cause it is drawing too much current.
* Pin 0 is used for the reset of the LED driver, but if there is Serial communication it is on pin 0 and 1 so it resets the led driver. Jure made a fix by desoldering r24 and soldering a wire from pin 2 to the led drive side of pad r24.
* Mounting holes are not perfectly square
* Arduino reset button is hard to reach

## How to Build Development Board 2.0

1. solder power components
   1. measure if you get the correct values
2. solder ADC components
   1. see if you can communicate through SPI and I2C with the board
3. Solder Analog frontend
   1. See if you measure differences with a tv remote
4. Solder IR Leds
   1. See if LEDs draw the right amounth of power
   2. use a phone camera to see if it is working

## How to Verify correct working of Development Board 2.0

Run the selftest firmware with 
1. a piece of alumimun
   1. Expected measurements: 
2. a piece of (white teflon)
   1. Expected measurements: 
3. a plastic red coca cola bottle cap
   1. Expected measurements: 
