---
title: Data processing
---
## Data processing

### Pre-processing

The data from the board is just a number, it is the ADC value, which on itself is dimentionless. it is possible to convert this into volts, but it does not help much here.

<details>
  <summary>General idea to get from InGaAs sensor to determined plastic type</summary>
  <div>
    <div>
    1. Take a pre measurement (with sample placed but no LED on) <br/>
    2. Take a set of measurements (turn on one LED, wait 10ms, measure,turn off the LED, repeat for the rest) <br/>
    3. Take a post measurement (with sample placed but no LED on) <br/>
    4. Repeat steps 1-3 multiple times, this allows you to take out backgorund noise/light, if the measurements are too different it might be that the sample moved.<br/>
    5. The measurements can then be compensated for the output power of the LEDs<br/>
    6. The measurements can then be compensated for the sensitivity of the InGaAs photodiode<br/>
    7. The measurements can be scaled relative to maximum possible measurement (a full reflection of IR light (reference material))<br/>
    8. Normalize the values based on the reference material between 0 and 1<br/>
    9. apply SNV transformation to overlay all readings<br/>
    10. Use as input for a machine learning model<br/>
    
    
    </div>
    <br/>
  </div>
</details>

### interpretation
Question: What is the current quality of the data coming out of the Plastic Scanner, and how can we improve this  
Question: How can we write an identification model?  
Question: Which LEDs are critical, which are nice to have, which are redundant?  