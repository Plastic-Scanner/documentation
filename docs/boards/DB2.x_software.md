---
title: Software usage
---
# PSplot

Up to date source of the firmware can be found [here](https://github.com/Plastic-Scanner/PSplot/)

## Preperation

1. Make sure that you have Python 3.10 installed
2. Download the latest software [here](https://github.com/Plastic-Scanner/PSplot)
3. `pip install pipenv`
4. `pipenv install`
5. `pipenv shell`
6. `python psplot.py`



## Interface
The interface is divided up in 3 sections:
### Data in/out
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/psplot/datainout.png" width="400px"/>
</div>
Here you can select your developement board, if no COM port is available/selected it will use dummy data (to help the developers!)
You can also import or export data to load previous dataset or to export your data once you are done.

### Measuring
In this section you can:  
- calibrate with reference material  
- fill in details about (un)known sample  
- take a measurement  
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/psplot/measuring.png" width="400px"/>
</div>


### Data visualisation
The last section shows the visualisation of the measurement. It has four sections

1. 2D spectrum graph, this shows the measurement from the sample, with the reference measurement as an ideal straight line and with the SNV applied. It shows the last 3 measurements
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/psplot/spectra.png" width="400px"/>
</div>

2. 3D scatter plot, this shows a 3D plot with the previous measurements. The colors are based on the "Sample Material" input. It defaults to the axis that we think are the most interesting, but with the drop down menus you can play around to see what works for you.
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/psplot/3Dscatter.png" width="400px"/>
</div>

3. > WARNING: this is a first experiment! It is a bar chart, that shows what the computer thinks is the most likely type of plastic, this is at the moment only an experiment for HDPE, PET, PP and PS  

<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/psplot/barchart.png" width="400px"/>
</div>

4. Table with the raw measurement values. In this table you can also edit the material of a measurement after taking the measurement by editing one of cells.
<div style={{textAlign: 'center'}}>
    <img alt="" src="/img/psplot/rawreadings.png" width="400px"/>
</div>

## Contributing
Feel free to improve, modify and contribute to this project. You can find the lastest open source code here [Github Repo](https://github.com/Plastic-Scanner/PSplot/).