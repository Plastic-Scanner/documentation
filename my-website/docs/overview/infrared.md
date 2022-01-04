---
sidebar_position: 1
sidebar_label: 'Infrared'
---
# Infrared
Infrared sorting works by shining IR light on a plastic object
and measuring the reflection of the different wavelengths.
Absorption within the visible spectrum gives information about
the color of a product, and absorption in the infrared spectrum
gives information about the chemical bonds associated with
the atoms of a functional group.
Different chemical bonds (like O–H, C–H, and N–H) vary in
strength and therefore the amount of energy required for the
bond-vibration varies as well. This variation in energy can be
expressed on a spectrum as a series of absorptions at different
wavelengths. This can be seen in figure 2.7 (Davies, 2005). An
example: white light shines on an object, only the wavelength
of the object is reflected, this reflection enters your eyes,
making you aware that the object is, for example, blue. This
can also be done with IR light; the reflection gives us details
about the molecular structure of a product, making it possible
to identify the type of plastic.
Near-infrared spectrometry can be used to identify different
types of plastic, since different types of plastic have different
absorbance peaks. PVC, for example has an absorbance peak
at 1660nm and PET has an absorbance peak of 1716nm. Based
on this principle, Scott(1995) was able to successfully separate
PET from PVC. In 2012 Masoumi and Safavi repeated this
experiment and were able to identify five different types
of plastic using just the ratio between 1656nm and 1724nm
(Masoumi et al., 2012). A visualization of these absorption
curves is shown in the figure 2.8, where the vertical axis
represents the absorption in percentages and the horizontal axis
represents the wavelength in nanometers.

Current infrared sorting techniques are divided into two
categories: Conveyor belt style or handheld scanner .
With the conveyor belt method, a sensor is placed above the
conveyor belt, and based on the reading of the infrared sensor
the object is sorted (often with compressed air). With handheld
scanning, a user scans a plastic object whereafter the scanner
tells what type of plastic it is. Users in LMIC benefit most from
a handheld scanner since their inflow is often not continuous
and there are no conveyor belts in place on which to mount
infrared sensors.
Market research in the field of handheld scanners, or more
precisely infrared spectrometers showed that based on
the technology used to sense the reflection there are three
categories: Micro Electrical Mechanical spectroscopy
Systems (MEMS), Optical spectroscopy systems and discrete
spectroscopy systems. The category that is most suitable
for LMIC is discrete spectroscopy. MEMS spectroscopy
is complex to manufacture, while Optical spectroscopy is
expensive. Discrete spectroscopy is less accurate but research
by Straller and Gessler (2019) suggests that it can still identify
the plastics mentioned earlier. Straller’s research led to the
development of the open-source ReReMeter (figure 2.9). This
plastic identification tool is used as a starting point for the
development of this project. Since open-source knowledge is
used in this project, it is therefore also expected to share the
project in an open-source manner.
More information about infrared identification can be found in
appendix IV (identification)