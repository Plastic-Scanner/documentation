---
title: Revision history
---

This page is made to show which previous versions have been made. It gives you an idea where we came from, what we changed and what worked and what didn't. 
Entries are listed from new to old.  

## Development board 2.2 (DB2.2)

<img src="/img/developmentboards/developmentboard2.2.jpg" alt="development board 2.2" width="200"/>

PCB with IC's that are actually in stock! 

| Item | Description|
| ----------- | ----------- |
| 🌈 Codename     | Brown |
| 📆 Release date| May 2023 |
| 🦄 People                  | Jerry de Vos       |
| 🔗 Source files   | Can be found [here](https://github.com/Plastic-Scanner/DB2.x-Hardware/releases/tag/V2.2)        |
| ⌚ Development time  |  1 months |
| 🎉 The Good  | - New ADC <br></br>- Mounts for Daugther board <br></br>|
| 👹 The Bad  | - Board requires a computer to work |

[Schematics, pinout, Bill of Material, Technical drawing](boards/DB2.2.md)  
[Build instructions](boards/DB2.2_build.md)    

## Development board 2.1 (DB2.1)

<img src="/img/developmentboards/developmentboard2.1.jpg" alt="development board 2.1" width="200"/>

Well documented, easy to contribute PCB, ready for tests and improvements!

| Item | Description|
| ----------- | ----------- |
| 🌈 Codename     | Blue |
| 📆 Release date| March 2022 |
| 🦄 People                  | Jure Vidmar and Jerry de Vos       |
| 🔗 Source files   | Can be found [here](https://github.com/Plastic-Scanner/DB2.x-Hardware/releases/tag/V2.1)        |
| ⌚ Development time  |  1 months |
| 🎉 The Good  | - KiCad documentation <br></br>- Mounts for LED test <br></br>|
| 👹 The Bad  | - Board requires a computer to work <br></br> - Components not available anymore|

[Schematics, pinout, Bill of Material, Technical drawing](boards/DB2.1.md)  
[Build instructions](boards/DB2.1_build.md)    

## Development board 2.0 (DB2.0)

<img src="/img/developmentboards/developmentboard2.0.jpg" alt="development board 2.0" width="200"/>

Proper version of the breakout board, with Arduino!

| Item | Description|
| ----------- | ----------- |
| 🌈 Codename     | Beige |
| 📆 Release date| June 2021 |
| 🦄 People                  | Jure Vidmar and Jerry de Vos       |
| 🔗 Source files | Can be found [here](https://wikifactory.com/+plasticidentificationanywhere/plastic-scanner-devboard)        |
| ⌚ Development time  |  3 months |
| 🎉 The Good  | - Good debugging, like the logic analyzer actually plugs directly in <br></br>- Proper schematics |
| 👹 The Bad  | - Marking on the PCB can be better <br></br>- Board required a computer to work |

[Schematics, pinout, Bill of Material, Technical drawing](boards/DB2.0.md)  
[Build instructions](boards/DB2.0_build.md)  



## Breakout board

<img src="/img/developmentboards/breakoutboard.jpg" alt="breakout board" width="200"/>

Small version of the development board 1

| Item | Description|
| ----------- | ----------- |
| 🌈 Codename     | Breakout board |
| 📆 Release date| November 2020 |
| 🦄 People                  | Jerry de Vos       |
| 🔗 Source files | Can be found [here](https://wikifactory.com/+plasticidentificationanywhere/breakout-board)        |
| ⌚ Development time  |  4 months |
| 🎉 The Good  | - Compact shape, but 0806 components <br></br> - Board breaks in half and can be stacked <br></br>- ADC controls demultiplexer <br></br>- Decicated mosfets and demultiplexer for LEDs  | 
| 👹 The Bad  | - No stable 5v <br></br>- Opamp not connected to ref voltage <br></br>- Ref voltage lines switched <br></br>- Difficult to debug <br></br>- Bad schematics  |


## Development board 1.0 (DB1.0)

<img src="/img/developmentboards/developmentboard1.0.jpg" alt="development board 1.0" width="200"/>

First printed circuit board with the sensor side the same as the ReReMeter, but added connections for the Raspberry Pi and a ESP32. Used bigger 0806 SMD components

| Item | Description|
| ----------- | ----------- |
| 🌈 Codename     | Aqua |
| 📆 Release date| April 2020 |
| 🦄 People                  | Jerry de Vos       |
| 🔗 Source files | Can be found [here](https://oshwlab.com/jerzeek/nir-spectroscope)        |
| ⌚ Development time  |  6 months |
| 🎉 The Good  | - Separation between sensing and processing <br></br> - Bigger components, easier to solder <br></br> - Testpads for debugging <br></br> - Fool proof assembly <br></br> - Qwicc connector to easily add display|
| 👹 The Bad  | - Missing button for interaction <br></br> - Bad schematics |


## ReReMeter 

<img src="/img/developmentboards/reremeter.jpg" alt="reremeter" width="200"/>

The Plastic Scanner project started out as a fork of the ReReMeter. The ReReMeter already contains most of the critical parts of the Plastic Scanner, It is an STM32 based board that can flash infrared LEDs sequentially and measure the reflectance with an InGaAs sensor.

| Item | Description|
| ----------- | ----------- |
| 🌈 Codename     | ReReMeter |
| 📆 Release date| December 2019 |
| 🦄 People                  | Armin straller and Bernhard Gessler       |
| 🔗 Source files | Can be found [here](https://github.com/arminstr/reremeter)        |
| ⌚ Development time  | 6 months |
| 🎉 The Good  | - Board was small and compact <br></br>- Good enough to prove principle and write a paper about|
| 👹 The Bad  | - Board was difficult to replicate due to the small 0402 components. <br></br>   - Board required a computer to work |
