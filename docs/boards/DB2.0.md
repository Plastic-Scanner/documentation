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


## Schematics
<div>
    <div>
        <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20Schematics.pdf" width="100%" height="600px"></embed>
    </div>
</div>

[Download PDF](https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20Schematics.pdf)  
[Link to repository](https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20Schematics.pdf)  


## Pinout
<div>
    <div>
        <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20Pinout.pdf" width="100%" height="600px"></embed>
    </div>
</div>

[Download PDF](https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20Pinout.pdf)  
 

## Bill of Materials
<div>
    <div>
        <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20BOM.pdf" width="100%" height="600px"></embed>
    </div>
</div>

[Download PDF](https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/6d1664db3ee18b0f2725af986c448b64545aa78f/PCB/PCB%20BOM.pdf)  


## Technical drawing
<div>
    <div>
        <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/6d1664db3ee18b0f2725af986c448b64545aa78f/CAD/PCB%20Technical%20Drawing.pdf" width="100%" height="600px"></embed>
    </div>
</div>

[Download PDF](https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/6d1664db3ee18b0f2725af986c448b64545aa78f/CAD/PCB%20Technical%20Drawing.pdf)  


## Packages
Hardware package - click [here](https://github.com/Plastic-Scanner/DB2.x-Hardware/releases/tag/v2.0) to download all hardware documentation of this development board  
Firmware package - click [here](https://github.com/Plastic-Scanner/DB2.x-Firmware) to download all firmware (documentation) of this development board  
Software package - click [here](https://github.com/Plastic-Scanner/software) to download all software (documentation) of this development board  


## Current issues
* There is no clear marking on the pcb which revision it is.
* Add silkscreen labels to connectors.
* LED3 (indicator for 2.5v reference) is breaking the reference voltage cause it is drawing too much current.
* Pin 0 is used for the reset of the LED driver, but if there is Serial communication it is on pin 0 and 1 so it resets the led driver. Jure made a fix by desoldering r24 and soldering a wire from pin 2 to the led drive side of pad r24.
* Mounting holes are not perfectly square
* Arduino reset button is hard to reach

## How to Verify correct working of Development Board 2.0

Run the selftest firmware with 
1. a piece of alumimun
   1. Expected measurements: 
2. a piece of (white teflon)
   1. Expected measurements: 
3. a plastic red coca cola bottle cap
   1. Expected measurements: 


## PCB images
<div style={{textAlign: 'center'}}>
    <img alt="Front View" src="https://github.com/Plastic-Scanner/DB2.x-Hardware/raw/6d1664db3ee18b0f2725af986c448b64545aa78f/Media/pcb_front_view.svg" width="50%"/>
</div>