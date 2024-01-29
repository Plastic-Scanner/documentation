---
title: Scanner Usage
---
If you want the plastic scanner to identify material for you, it needs to know what measurements corrospond to which material. This is done by taking a measurement of a known material and then taking measurements of unknown materials. The software will then compare the measurements and try to find the best match. In practice the workflow looks something like this:
First scan plastic of known types, Upload these scans and train a machine learning model on these scans, upload the trained model to the scanner, scan plastic of unknown types, identify plastic!  
The goal is to make a general model that can be distributed to other plastic scanners. this would make step 1 and 2 redundant for the end user.

### Step 1: Scan plastic of known types 
The firmware has a feature to enter the collection mode. To enter this mode press and hold the button for longer than 1 second when the scanner is turned on and asks to press the button for calibration. In this collection mode known samples of plastic are scanned and the data is uploaded to google sheets. This data is then used to train the machine learning model.
### Step 2: Train machine learning model on these scans
In this Google Colab [file](https://colab.research.google.com/drive/1wfOuVHbrcoFD7YLNErialoZrMzzZKGtq#scrollTo=7Yi6WbVLPnDz) we import the scans from the google sheets and train a machine learning model. This model is then saved to the computer
### Step 3: Upload model to scanner
The model is a .h header file and can be included in the original firmware and thus can be uploaded to the scanner using PlatformIO.
### Step 4: Scan plastic of unknown types
The scanner is now ready to scan plastic of unknown types. When the scanner is turned on it will ask to calibrate, and buttonpress shorter than 1 second puts it in the scanning mode.The scanner will take a measurement and compare it to the model. It will then output the most likely type of plastic. This will be done continously until the button is pressed for longer than 1 second.
### Step 5: Identify plastic!
The scanner will output the most likely type of plastic. This is not always correct, but it is a good indication. If your situation asks for other plastics you can follow steps 1 and 2 to build your own model. Note: this is only tested with lasercut plastic types, so no guarentees for other types of plastic.