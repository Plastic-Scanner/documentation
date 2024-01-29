"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[559],{5430:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=r(5893),t=r(1151);const l={},o="Build instructions",s={id:"boards/DB2.3_build",title:"Build instructions",description:"Before you begin",source:"@site/docs/boards/DB2.3_build.md",sourceDirName:"boards",slug:"/boards/DB2.3_build",permalink:"/boards/DB2.3_build",draft:!1,unlisted:!1,editUrl:"https://github.com/Plastic-Scanner/documentation/tree/main/docs/boards/DB2.3_build.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"DB 2.3",permalink:"/boards/DB2.3"},next:{title:"Firmware installation",permalink:"/boards/DB2.x_firmware"}},a={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Tools required",id:"tools-required",level:3},{value:"Material required",id:"material-required",level:3},{value:"Electrical Assembly",id:"electrical-assembly",level:2},{value:"Area 1 - Power",id:"area-1---power",level:3},{value:"Area 2 - ADC",id:"area-2---adc",level:3},{value:"Area 3 - Analog frontend",id:"area-3---analog-frontend",level:3},{value:"Area 4 - LEDs",id:"area-4---leds",level:3},{value:"Area 5 - IO",id:"area-5---io",level:3}];function c(e){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"build-instructions",children:"Build instructions"}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,i.jsxs)(n.p,{children:["Please know the current status of the project.",(0,i.jsx)(n.br,{}),"\n","Currently we are working hard to make new developments for the Plastic Scanner.\nThe first item we are releasing is a development board, this needs to be taken quite literally, it is for developing purpose. With this board you can help develop the Plastic Scanner further and do tests to see if it fits your usecase."]}),"\n",(0,i.jsx)(n.h3,{id:"tools-required",children:"Tools required"}),"\n",(0,i.jsx)(n.p,{children:"In order to replicate the development board you need the following tools:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Flush cutters"}),"\n",(0,i.jsx)(n.li,{children:"Forceps"}),"\n",(0,i.jsx)(n.li,{children:"Screwdriver"}),"\n",(0,i.jsx)(n.li,{children:"Solder"}),"\n",(0,i.jsx)(n.li,{children:"Patients"}),"\n",(0,i.jsx)(n.li,{children:"Copper wick"}),"\n",(0,i.jsx)(n.li,{children:"Good eyes or a cheap usb microscope."}),"\n",(0,i.jsx)(n.li,{children:"Themperature controlled soldering iron"}),"\n",(0,i.jsx)(n.li,{children:"3D printer"}),"\n",(0,i.jsx)(n.li,{children:"flux (optional)"}),"\n"]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{alt:"",src:"/img/tools/tools.gif",width:"400px"})}),"\n",(0,i.jsx)(n.h3,{id:"material-required",children:"Material required"}),"\n",(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("img",{alt:"",src:"/img/tools/board.jpg",width:"130px"}),(0,i.jsx)("img",{alt:"",src:"/img/tools/bulk_components.jpg",width:"130px"}),(0,i.jsx)("img",{alt:"",src:"/img/tools/special_components.jpg",width:"130px"})]}),"\n",(0,i.jsx)(n.p,{children:"In order to replicate the development board you need the following materials:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The printed circuit board"}),"\n",(0,i.jsx)(n.li,{children:"Bulk components (resistors, capacitors)"}),"\n",(0,i.jsx)(n.li,{children:"Specialized components (adc, arduino, IR LEDs)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["All the details can be found in the (",(0,i.jsx)(n.a,{href:"http://htmlpreview.github.io/?https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/main/PCB/PCB%20interactive%20BOM.html",children:"Interactive"}),") BOM"]}),"\n",(0,i.jsx)(n.h2,{id:"electrical-assembly",children:"Electrical Assembly"}),"\n",(0,i.jsx)(n.p,{children:"This pages walks you through all the soldering and testing of the PCB.\nAll components can be soldered with a reflow oven or hot air station, but with some patience you can also solder it by hand.\nThe board consist of 0805 SMD components which are rather easy to solder by hand. the chips can be a bit more difficult to solder but with some solder and solderwick you will manage."}),"\n",(0,i.jsx)(n.p,{children:"The board will be soldered in 4 area's after soldering each area you can test to see if the board gives the desired results."}),"\n",(0,i.jsx)(n.h3,{id:"area-1---power",children:"Area 1 - Power"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_power-01.jpg",width:"400px"})}),"\n",(0,i.jsx)(n.p,{children:"We start by soldering the power components, once this area is complete we can measure the voltages to check if they are correct."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Solder C11, C12, C13, C14, C15, C16 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder FB1, U3, U4, R20, R17 and D3 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder U3, U4 in place"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Supply 5 volts and ground to the 5v pin and the ground pin where the Arduino Uno will be placed. The LED's in the lower right corner should now light up. You can measure if they have the correct voltages by measuring on the test pads for 2.5v, 3.3v and 5.0v.\nIf all is correct you can proceed to the second area!"}),"\n",(0,i.jsx)(n.h3,{id:"area-2---adc",children:"Area 2 - ADC"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_adc-01.jpg",width:"400px"})}),"\n",(0,i.jsx)(n.p,{children:"We continue by soldering the ADC related components in place."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Solder the ADC in place (personally I use the copper wick method)"}),"\n",(0,i.jsx)(n.li,{children:"Make sure all connections are properly soldered and there are no bridges (I check with a cheap usb microscope)"}),"\n",(0,i.jsx)(n.li,{children:"Solder R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,15,R21,R22,R23,R24 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder C6,C7,C8,C9,C10,Y1 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder the pinheaders for the arduino in place"}),"\n",(0,i.jsx)(n.li,{children:"Place the Arduino Uno upside down on the headers with the USB port facing the left side"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Once you have reaced this stage you are very well on your way! It is now time to see if all connections are good and if the Arduino Uno can communicate to the ADC. Upload the ",(0,i.jsx)(n.strong,{children:"selftest.ino(fix this)"})," file onto the arduino and open the serial monitor for see the responce.\nif the response says: ",(0,i.jsx)(n.strong,{children:"All good!"})," that you are ready for the next step!"]}),"\n",(0,i.jsx)(n.h3,{id:"area-3---analog-frontend",children:"Area 3 - Analog frontend"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_analog-01.jpg",width:"400px"})}),"\n",(0,i.jsx)(n.p,{children:"The next step is being able to measure infrared light. The analog frontend converts infrared light into a voltage source so that it is possible to measure small changes."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Solder the U1 in place"}),"\n",(0,i.jsx)(n.li,{children:"Make sure all connections are soldered and there are no bridges"}),"\n",(0,i.jsx)(n.li,{children:"solder R1,R2,R3,R4 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solcer C1,C2,C3,C4,C5 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder the InGaAs photodiode in place (with the green notch facing left)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If all is correct you now have a very sensitive infrared brightness meter. To check if it is working you can upload the ",(0,i.jsx)(n.strong,{children:"irtest.ino(fix this)"})," and use a TV remote and see the responsitivity on the serial plotter!"]}),"\n",(0,i.jsx)(n.h3,{id:"area-4---leds",children:"Area 4 - LEDs"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_led-01.jpg",width:"400px"})}),"\n",(0,i.jsx)(n.p,{children:"The second to last step in the process is the most expensive part, we want to make sure the PCB is good before we continue with this section."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Solder U5 in place"}),"\n",(0,i.jsx)(n.li,{children:"Make sure all connections are soldered and there are no bridges"}),"\n",(0,i.jsx)(n.li,{children:"Solder C17,R25,R26,R27,R28,R29,R30,R31,R32 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder D4 to D11 in place, these are the specific wavelength LEDs, start with the lowest value at D1 (850nm) all the way to the highest value at D8 (1650nm), Make sure to LED is nice and flat on the PCB and only solder for 3 seconds before cooling down the PCB again."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This was the most nerve racking part, but all should be smooth sailing from here."}),"\n",(0,i.jsx)(n.h3,{id:"area-5---io",children:"Area 5 - IO"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_io-01.jpg",width:"400px"})}),"\n",(0,i.jsx)(n.p,{children:"From here it is just a final stretch home, the last things to solder up are the input and outputs, it gives you a button to start the scan, a connect for i2c, and a programmable LED!"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Solder the switches, SW1 and SW2 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder R16,R18,R19 and D2 in place"}),"\n",(0,i.jsx)(n.li,{children:"Solder J1, J2 and J3 to the board."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"That is it! You just soldered the whole development board by yourself! Great job!"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var i=r(7294);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);