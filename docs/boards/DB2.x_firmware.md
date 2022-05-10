# Firmware flashing

## Firmware

1. Make sure you have VScode installed
2. Install the platformIO plugin
3. Download the latest firmware [here](https://github.com/Plastic-Scanner/DB2.x-Firmware)
4. Connect Development board to PC
5. Upload firmware
6. Open Serial monitor and send "scan", this will result in a scan from all the wavelengths

## Software

1. Make sure that you have Python 3.10 installed
2. Download the latest software [here](https://github.com/Plastic-Scanner/spectraplot)
3. `pip install pipenv`
4. `pipenv install`
5. `pipenv shell`
6. change port to correct COM port
7. `python ps-spectraplot.py`

## Usage

1. place a sample on the scanner
2. press spacebar to scan
3. graph will update
4. read values from serial