---
title: How it works
hide_table_of_contents: true
---


# How it works

The plastic scanner allows you to scan an object (like a shampoo bottle) and identify its plastic type using an approach called **discrete near-infrared (NIR) spectroscopy**. Huh? It basically means flashing some kind of light on a plastic sample, measuring its reflection and doing some magic with it. The point is, it allows distinguishing between the five most common plastic resins: PET, HDPE, PE, PVC, PP and PS in an affordable, pocket-size manner.

<div style={{textAlign: 'center'}}>

  ![plastic scanner explaination](/img/plasticscannerexplain.gif)

</div>

## Discrete NIR spectroscopy

Let us try to explain this technology and break it down word-by-word:

**Spectroscopy** is the study of the interaction between matter (e.g. a plastic sample) and electromagnetic radiation (e.g. near-infrared light) at different wavelengths[^1].
By shining light onto a surface, some of it will be absorbed and some of it will be reflected and this ratio depends on material's structure and light's wavelength. Measuring the *reflectance* at various wavelengths gives a *reflectance spectrum* which provides all sorts of useful information about the measured object.

**NIR** stands for Near InfraRed. Visible light is only a small part of the electromagnetic (EM) spectrum and next to it lies the infrared (IR) part. 
It is not visible to the human eye, but it is used in many applications such as tv remotes, night vision cameras and surprise, surprise - spectroscopy.
Only a small part of this infrared spectrum is used for plastic identification, called near-infrared and it contains wavelengths between 700nm and 2500nm.

<div style={{textAlign: 'center'}}>
    <img alt="Electromagnetic (EM) spectrum" src="/img/em_spectrum_nir.svg" width="800px"/>
</div>

**Discrete** spectroscopy means we only measure reflectance at cetrain wavelengths, unlike in continuous spectroscopy where the complete spectrum is measured across all frequencies without having a gap between values (e.g. splitting light into a "rainbow" with a prism). 

## Technology

The approach mentioned above is implemented on a custom PCB which, at its core, contains a **photodiode** and **8 LEDs** emmiting specific wavelengths[^2] of near-infrared light. By flashing each LED individually onto a plastic sample and measuring it's reflectance with the photodiode, we obtain its (discrete) reflectance spectra.

Each family of plastic resins has a typical reflectance spectrum, shown below, which is used for comparison and identification of the measured plastic sample.

<div style={{textAlign: 'center'}}>
    <img alt="Typical reflectance spectra of different plastic polymers" src="/img/response_curve.svg" width="600px"/>
</div>

Industrial devices that can measure a sample's continuous spectrum are expensive and hard to produce at home. In our case, we only measure the reflectance at 8 specific points (this is where the "discrete" part comes from) and observe the ratios betwen them.

[^1]: https://en.wikipedia.org/wiki/Spectroscopy 
[^2]: Wavelengths of near-infrared LEDs in nanometers: 855, 940, 1050, 1200, 1300, 1450, 1550, 1650