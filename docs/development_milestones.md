# Development Milestones

| Name                     | Types of Plastic | Form Factor        | Material | Interpretation | Enviroment  | Material cost | Certainty | database type       |
|--------------------------|------------------|--------------------|----------|----------------|-------------|---------------|-----------|---------------------|
| Proof of concept         | 1                | computer connected | 3D print | Computer       | In the Dark | 1000          | 80% sure  | local database      |
| Minimum Viable Product   | 5                | computer connected | 3D print | Computer       | In the Dark | 1000          | 80% sure  | local database      |
| Cool Plastic Scanner     | 5                | Handheld           | 3D print | Computer       | Open        | 800           | 80% sure  | Computer database   |
| Great Plastic Scanner    | 5                | Handheld           | recycled | On device      | Open        | 300           | 90% sure  | online own database |
| Ultimate Plastic Scanner | 5+               | Handheld           | recycled | On device      | Open        | 100           | 95% sure  | Big open database   |


## Proof of concept
**Status:** 🧑‍💻In progress

<details><summary>

### Objective 1: Physics characteristics of components.
</summary>
Describe and measure the components used to make sure that then can execute the desired task.

**Tasks:**

* Charicterise LED driver
  * Is it possible to drive the leds with constant signal.
  * How long can the LED be on
  * Is there a startup time
  * At what point do the LEDs give a constant amounth of light.
* ~~Make PCB to test LED and InGaAs sensor~~
  * ~~Make a PCB that can hold up to 8 leds in a circulair pattern, use 2.54mm pins to power them. add a pad for an InGaAs sensor in the middle.~~
* Characterise LED
  * Solder one of the leds on the board, power it according to the specs of the datasheet, measure its spectrum with a spectrometer. Compare this to the datasheet. 
  * How constant are the leds over time? 
  * What is the light output as a function over time if it is one? 
  * How quickly do the leds degrade?
* Charicterise InGaAs sensor
  * Solder on a separate board an InGaAs sensor, turn on different leds and measure if you get the expected sensitivity.
  * Does it make sense to measure as an interger
  * How consistant are repeated measurements
  * What is the background noise
* Charicterise Analog frontend
* Charicterise ADC

**Required materials:**

* ~~Ossiloscope~~
* ~~Powersupply~~
* Power output meter
* Industrial spectrometer

**Estimated time:**  
Not taking into account lead time of pcb, and access to required material, the testing itself is quite straight forward. Expected around two weeks of work by a single person.  

**Estimated outcome:**  
A report that concludes if the leds and InGaAs sensor are able to do discrete spectroscopy.
</details>

<details><summary>

### Objective 2: Ideal setup of the sensor cavity

</summary>
Once we know that the characteristics of the components we can make an theoretically ideal sensor cavity that provides the maximum amounth of information for the sensor.

**Unknowns:**  

Is it possible to fully develop this based on only theory? or do we need tests or prototypes?
**Tasks:**

* Determine which wavelengths of LEDs are used
* Determine height between LED, sample and sensor
* Determine height between devider wall between LED and sensor
* Determine coating on walls
  
**Required material**  

* Reference sample
* 3D printer
 
**Estimated time**  

**Estimated outcome**  
Suggested design of sensor cavity that has the highest change of succesful readings.
which includes a design of a pcb with the layout of the componentns and 3D designs that can be printed with an FDM printer

</details>

<details><summary>

### Objective 3: Create Proof of concept
</summary>
Once we know how the sensor cavity needs to look like we can develop the rest of the proof of concept.

**Unknowns:**  
**Tasks:**
* Determine how the InGaAs sensor needs to be measured
  * use of an opamp
  * use of a high precision ADC
  * Requirements for reference voltage
* Design a setup that incorporates LEDs, LED driver, InGaAs sensor, required amplification, microcontroller, and a way for input and output.
* Design hardware components required to get the optimal sensor cavity defined in Objective 2.
* Compare the built proof of concept with the expected values.
**Required material**  
**Estimated time**  
**Estimated outcome**  
a setup to measure various plastics, this can include off the shelve modules for the ADC or LED driver.


</details>

<details><summary>

### Objective 4: Comparisment of "pure" plastics between proof of concept and industrial spectroscope.
</summary>
The goal of the Objective is to get an idea how this discrete setup compares to an industrial setup, and to see if it is possible to get comprable spectra.

**Tasks:**

* Find plastics with little to no additives
  * go to plastic product manufacturers 
  * go to polymer manufacturers
* setup experiment to capture spectra from these samples
  * capture spectra from samples with industrial spectroscope
* Compare spectra from these samples to our measurements
  * Capture data with our setup
* Compare to known spectra
* Calculate/optimize distance between sample and sensor

**Required material**  

* Pure plastic granulate
* Industrial spectroscope

**Estimated time**  
**Estimated outcome**  
A report that compares the samples measured with industrial spectrometer and our setup. and an improved sensor cavity
</details>


<!-- 
<details><summary>

### Objective X
</summary>

**Unknowns:**  
**Tasks:**
**Required material**  
**Estimated time**  
**Estimated outcome**  
</details> -->


## Minimum Viable Product
**Status:** 🔜 Not started yet.  
First need to have proof of concept finished.  
## Cool Plastic Scanner
**Status:** 🔜 Not started yet.  
## Great Plastic Scanner
**Status:** 🔜 Not started yet.  
