# Development Board 2.0

This is what we are currently working on, it is not (yet) a product, but a development platform which
allows easy development, prototyping, testing, debugging, experimentation and optimization.
It contains all the sensory electronics, near-infrared LEDs and the whole thing is controlled by an Arduino.

<img src="/img/developmentboards/developmentboard2.0.jpg" alt="development board 2.0" width="400"/>

:::caution

This is still an early development prototype. We recommend all makers, hackers and contributors to wait until
the next development board release, where we will focus on making it reproducible and invite everyone to collaborate on. 

:::


## Resources

All of the resources are hosted on our [Github profile](https://github.com/Plastic-Scanner/):  
[Schematics](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/PCB/PCB%20Schematics.pdf)  
[Pinout](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/PCB/PCB%20Pinout.pdf)  
[BOM](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/PCB/PCB%20BOM.pdf)  
[Technical drawing](https://github.com/Plastic-Scanner/DB2.0-Hardware/blob/main/CAD/PCB%20Technical%20Drawing.pdf)  

Hardware package - click [here](https://github.com/Plastic-Scanner/DB2.0-Hardware/archive/refs/heads/main.zip) to download all hardware documentation of this development board  
Firmware package - T.B.A in the next revision
Software package - T.B.A in the next revision

## Known issues

There are some known issues with this revision of the board, most importantly:
- the 2.5V reference voltage indicator doesn't work, ignore it
- using Arduino pin D2 for controlling the led driver (TLC59208) is clashing with UART interface, causing random resets.
    - workaround: desolder r24 and connect a wire from pin D2 to the r24 bottom pad.

See [github issues](https://github.com/Plastic-Scanner/DB2.0-Hardware/issues) for more details