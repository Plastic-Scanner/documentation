# Build instructions

## Before you begin

Please know the current status of the project.  
Currently we are working hard to make new developments for the Plastic Scanner.
The first item we are releasing is a development board, this needs to be taken quite literally, it is for developing purpose. With this board you can help develop the Plastic Scanner further and do tests to see if it fits your usecase.

### Tools required
<!-- <div style={{textAlign: 'center'}}>
    <img alt="" src="/img/tools/flush_pliers.jpg" width="130px"/>
    <img alt="" src="/img/tools/forceps.jpg" width="130px"/>
    <img alt="" src="/img/tools/screwdriver.jpg" width="130px"/>
    <img alt="" src="/img/tools/solder.jpg" width="130px"/>
    <img alt="" src="/img/tools/copper_wick.jpg" width="130px"/>
    <img alt="" src="/img/tools/solder_iron.jpg" width="130px"/>
    <img alt="" src="/img/tools/usb_microscope.jpg" width="130px"/>
</div> -->
In order to replicate the development board you need the following tools:

* Flush cutters
* Forceps
* Screwdriver
* Solder
* Patients
* Copper wick
* Good eyes or a cheap usb microscope.
* Themperature controlled soldering iron
* 3D printer
* flux (optional)
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/tools/tools.gif" width="400px"/>
</div>


### Material required

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/tools/board.jpg" width="130px"/>
    <img alt="" src="/img/tools/bulk_components.jpg" width="130px"/>
    <img alt="" src="/img/tools/special_components.jpg" width="130px"/>
</div>
In order to replicate the development board you need the following materials:

* The printed circuit board
* Bulk components (resistors, capacitors)
* Specialized components (adc, arduino, IR LEDs)


All the details can be found in the ([Interactive](http://htmlpreview.github.io/?https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/main/PCB/PCB%20interactive%20BOM.html)) BOM

## Electrical Assembly

This pages walks you through all the soldering and testing of the PCB.
All components can be soldered with a reflow oven or hot air station, but with some patience you can also solder it by hand.
The board consist of 0805 SMD components which are rather easy to solder by hand. the chips can be a bit more difficult to solder but with some solder and solderwick you will manage.

The board will be soldered in 4 area's after soldering each area you can test to see if the board gives the desired results.



### Area 1 - Power

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/developmentboards/2.1/board_front_power-01.jpg" width="400px"/>
</div>

We start by soldering the power components, once this area is complete we can measure the voltages to check if they are correct.

1. Solder C11, C12, C13, C14, C15, C16 in place
2. Solder FB1, U3, U4, R20, R17 and D3 in place
3. SOlder U3, U4 in place

<!-- your board should now look something like this: -->

Supply 5 volts and ground to the 5v pin and the ground pin where the Arduino Uno will be placed. The LED's in the lower right corner should now light up. You can measure if they have the correct voltages by measuring on the test pads for 2.5v, 3.3v and 5.0v.
If all is correct you can proceed to the second area!

### Area 2 - ADC

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/developmentboards/2.1/board_front_adc-01.jpg" width="400px"/>
</div>

We continue by soldering the ADC related components in place.

1. Solder the ADC in place (personally I use the copper wick method)
2. Make sure all connections are properly soldered and there are no bridges (I check with a cheap usb microscope)
3. Solder R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,15,R21,R22,R23,R24 in place
4. Solder C6,C7,C8,C9,C10,Y1 in place
5. Solder the pinheaders for the arduino in place
6. Place the Arduino Uno upside down on the headers with the USB port facing the left side

<!-- your board should now look something like this: -->

Once you have reaced this stage you are very well on your way! It is now time to see if all connections are good and if the Arduino Uno can communicate to the ADC. Upload the **selftest.ino(fix this)** file onto the arduino and open the serial monitor for see the responce.
if the response says: **All good!** that you are ready for the next step!

### Area 3 - Analog frontend

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/developmentboards/2.1/board_front_analog-01.jpg" width="400px"/>
</div>

The next step is being able to measure infrared light. The analog frontend converts infrared light into a voltage source so that it is possible to measure small changes.

1. Solder the U1 in place
2. Make sure all connections are soldered and there are no bridges
3. solder R1,R2,R3,R4 in place
4. Solcer C1,C2,C3,C4,C5 in place
5. Solder the InGaAs photodiode in place (with the green notch facing left)

<!-- your board should now look something like this: -->

If all is correct you now have a very sensitive infrared brightness meter. To check if it is working you can upload the **irtest.ino(fix this)** and use a TV remote and see the responsitivity on the serial plotter!

### Area 4 - LEDs

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/developmentboards/2.1/board_front_led-01.jpg" width="400px"/>
</div>

The second to last step in the process is the most expensive part, we want to make sure the PCB is good before we continue with this section.

1. Solder U5 in place
2. Make sure all connections are soldered and there are no bridges
3. Solder C17,R25,R26,R27,R28,R29,R30,R31,R32 in place
4. Solder D4 to D11 in place, these are the specific wavelength LEDs, start with the lowest value at D1 (850nm) all the way to the highest value at D8 (1650nm), Make sure to LED is nice and flat on the PCB and only solder for 3 seconds before cooling down the PCB again.


This was the most nerve racking part, but all should be smooth sailing from here.

<!-- your board should now look something like this: -->

### Area 5 - IO

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/developmentboards/2.1/board_front_io-01.jpg" width="400px"/>
</div>
From here it is just a final stretch home, the last things to solder up are the input and outputs, it gives you a button to start the scan, a connect for i2c, and a programmable LED!

1. Solder the switches, SW1 and SW2 in place
2. Solder R16,R18,R19 and D2 in place
3. Solder J1, J2 and J3 to the board.


That is it! You just soldered the whole development board by yourself! Great job!


