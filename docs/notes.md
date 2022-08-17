# Notes on development

## Optics setup

### Measuring cavity
Question: what is the most optimal shape
- layout leds
- placement InGaAs sensor
- heigth wall between ingaas sensor and led?
- deviders between each led?
- height side of the wall?
- aluminuim tape on the sides?
- distance between sample and sensor

Question: which LEDs are the most valuable?
<!-- The ones where overtones are the suppose to happen? -->

<!-- information joost -->

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/sensor_cavity_dim.png" width="600px"/>
</div>
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/sensor_cavity.png" width="600px"/>
</div>
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/sensor_cavity2.png" width="600px"/>
</div>

### Backing material
Question: What is the best Backing material?
ideal: a material with a flat response between the 800nm and the 1800nm
- Spectralon (but expensive)
- Polished aluminium
- White ceramic tile? (used on the Niro Gun) 


## Electronics circuit
Question: what is the best way so measure the signal from the InGaAs sensor
Is this with a transimpeadance amplifier, which one, how stable should the reference voltage be?

investigate the use of the transimpeadance amplifier
simulate the expected outcome of the current setup and make adjustments for tweaks
setup of the adc with the ideal settings for our usecase


## PCB
Question: What footprint of components should be used? For example SMD size.  
Find a balence between batch manufacturing and single unit replication.

Question: All in one PCB or modular with separate processor and charge IC?  
Question: Which components are difficult to source, why and how can we be resilliant?


## Data processing
Question: What is the current quality of the data coming out of the Plastic Scanner, and how can we improve this  
Question: How can we write an identification model?  
Question: Which LEDs are critical, which are nice to have, which are redundant?  

## Housing
this is more long term, but find out most common working conditions for a plastic scanner and define it's harsness

## Usage





