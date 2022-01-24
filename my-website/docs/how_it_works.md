---
title: How it works
hide_table_of_contents: false
---


# How it works

The plastic scanner allows you to scan an object (like a shampoo bottle) and identify its plastic type using an approach called **discrete near-infrared (NIR) spectroscopy**. Sounds like scientific gibberish? It basically means flashing some kind of light on a plastic sample, measuring its reflection and doing some scientific abracadabra with it. The point is, it allows distinguishing between the five most common plastic resins: PET, HDPE, PE, PVC, PP and PS in an affordable, pocket-size manner.

<!-- WARNING: there's an inconsistency between description and image of which resins can we identify. HDPE/LDPE? -->
<div style={{textAlign: 'center'}}>

  ![plastic scanner explaination](/img/plasticscannerexplain.gif)

</div>

## Discrete NIR spectroscopy

Let's go slightly deeping into this technology the Plastic Scanner is using. Lets break it down word by word: Discrete - NIR - spectroscopy, and go from back to front.

**Spectroscopy** *is a collective term for scientific techniques that allow one to examine substances according to their electromagnetic spectrum [wikipedia](https://en.wikipedia.org/wiki/Spectroscopy).* By shining light to a surface (e.g. a plastic sample), some of it will be absorbed and some of it will be reflected. The amount of reflected light, depends on material's structure and light's wavelength. Measuring the *reflectance* at various wavelengths gives a *spectrum* which provides all sorts of useful information about the measured object. And this is, brutaly simplified, the essence of spectroscopy.

To give an example: if you shine white light(mixed electromagnetic spectrum) on a bottlecap, most of the white light gets absorbed, but some of the light gets reflected in your eye. Depending on which wavelength gets the reflected the rods and cones in your eye are sensitive to this, giving you the information that the bottlecap is red.
<!-- Image of light reflecting-->

**NIR** stands for Near InfraRed. Visible light is only a small part of the electromagnetic spectrum, beyond red there is infrared it contains the electromagnetic (EM) wavelengths between 780 nm to 2500 nm, it is not visable to the eye, but it is definitly there!
<!-- Image  of electromagnetic spectrum and NIR-->

If you want to capture a NIR spectrum, there are two possibilities, continuous or **discrete**. Continous caputures the complete spectrum, discrete only measures at certain wavelengths. The plastic scanner does this by shining led's with a specific wavelength on a product. This method is a lot simpler since you do not need to break mixed infrared light like in prism.

<!-- Image  of a graph with points vs lines-->


## Technology

This is implemented on a custom PCB which, at its core, contains a **photodiode** and **8 LEDs** emmiting specific wavelengths of near-infrared light (see DB2.0 for details). By flashing each LED individually onto a plastic sample and measuring it's reflectance with the photodiode, we obtain its (discrete) reflectance spectra, as shown in image below. 

<!-- Image of a measured sample spectrum -->

Each family of plastic resins has a typical reflectance spectrum, shown below, which is used for comparison and identification of the measured plastic sample.

<div style={{textAlign: 'center'}}>
    <img alt="Typical reflectance spectra of different plastic polymers" src="/img/typical_reflectance_spectras.png" width="400px"/>
</div>

<!-- This info is specific to current implementation - move it do development board chapter: -->
<!-- Wavelengths of LEDs are: XXX, ZZZ, TTT, YYYY... Sensor is ABS123-blabla with this response curve shown below. -->

Industrial devices that can measure a sample's spectrum across all wavelengths are expensive and hard to produce. What we're doing is jst measuring the refelctance at 8 specific points (that's why it is called **discrete** NIR ). Then we compare the ratios between these points, since only the shape of the curve matters and absolute values are dependent upon distance between the sample and sensor, ambient light, plastic color, etc.

Since there are many factors affecting the readings we focus on the shape of the curve and not it's absolute values. Measuring a sample from a greater distance or at different lighting conditions or of a different color would produce different results. That is why we take specific wavelengths and compare their ratios.