"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||n;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=r(7462),o=(r(7294),r(3905));const n={displayed_sidebar:"docsSidebar"},l="Build instructions",i={unversionedId:"boards/DB2.1_build",id:"boards/DB2.1_build",title:"Build instructions",description:"Before you begin",source:"@site/docs/boards/DB2.1_build.md",sourceDirName:"boards",slug:"/boards/DB2.1_build",permalink:"/boards/DB2.1_build",draft:!1,editUrl:"https://github.com/Plastic-Scanner/documentation/tree/main/docs/boards/DB2.1_build.md",tags:[],version:"current",lastUpdatedAt:1683627018,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{displayed_sidebar:"docsSidebar"},sidebar:"docsSidebar"},s={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Tools required",id:"tools-required",level:3},{value:"Material required",id:"material-required",level:3},{value:"Electrical Assembly",id:"electrical-assembly",level:2},{value:"Area 1 - Power",id:"area-1---power",level:3},{value:"Area 2 - ADC",id:"area-2---adc",level:3},{value:"Area 3 - Analog frontend",id:"area-3---analog-frontend",level:3},{value:"Area 4 - LEDs",id:"area-4---leds",level:3},{value:"Area 5 - IO",id:"area-5---io",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-instructions"},"Build instructions"),(0,o.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("p",null,"Please know the current status of the project.",(0,o.kt)("br",{parentName:"p"}),"\n","Currently we are working hard to make new developments for the Plastic Scanner.\nThe first item we are releasing is a development board, this needs to be taken quite literally, it is for developing purpose. With this board you can help develop the Plastic Scanner further and do tests to see if it fits your usecase."),(0,o.kt)("h3",{id:"tools-required"},"Tools required"),(0,o.kt)("p",null,"In order to replicate the development board you need the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flush cutters"),(0,o.kt)("li",{parentName:"ul"},"Forceps"),(0,o.kt)("li",{parentName:"ul"},"Screwdriver"),(0,o.kt)("li",{parentName:"ul"},"Solder"),(0,o.kt)("li",{parentName:"ul"},"Patients"),(0,o.kt)("li",{parentName:"ul"},"Copper wick"),(0,o.kt)("li",{parentName:"ul"},"Good eyes or a cheap usb microscope."),(0,o.kt)("li",{parentName:"ul"},"Themperature controlled soldering iron"),(0,o.kt)("li",{parentName:"ul"},"3D printer"),(0,o.kt)("li",{parentName:"ul"},"flux (optional)",(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"",src:"/img/tools/tools.gif",width:"400px"})))),(0,o.kt)("h3",{id:"material-required"},"Material required"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"",src:"/img/tools/board.jpg",width:"130px"}),(0,o.kt)("img",{alt:"",src:"/img/tools/bulk_components.jpg",width:"130px"}),(0,o.kt)("img",{alt:"",src:"/img/tools/special_components.jpg",width:"130px"})),"In order to replicate the development board you need the following materials:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The printed circuit board"),(0,o.kt)("li",{parentName:"ul"},"Bulk components (resistors, capacitors)"),(0,o.kt)("li",{parentName:"ul"},"Specialized components (adc, arduino, IR LEDs)")),(0,o.kt)("p",null,"All the details can be found in the (",(0,o.kt)("a",{parentName:"p",href:"http://htmlpreview.github.io/?https://github.com/Plastic-Scanner/DB2.x-Hardware/blob/main/PCB/PCB%20interactive%20BOM.html"},"Interactive"),") BOM"),(0,o.kt)("h2",{id:"electrical-assembly"},"Electrical Assembly"),(0,o.kt)("p",null,"This pages walks you through all the soldering and testing of the PCB.\nAll components can be soldered with a reflow oven or hot air station, but with some patience you can also solder it by hand.\nThe board consist of 0805 SMD components which are rather easy to solder by hand. the chips can be a bit more difficult to solder but with some solder and solderwick you will manage."),(0,o.kt)("p",null,"The board will be soldered in 4 area's after soldering each area you can test to see if the board gives the desired results."),(0,o.kt)("h3",{id:"area-1---power"},"Area 1 - Power"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_power-01.jpg",width:"400px"})),(0,o.kt)("p",null,"We start by soldering the power components, once this area is complete we can measure the voltages to check if they are correct."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Solder C11, C12, C13, C14, C15, C16 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder FB1, U3, U4, R20, R17 and D3 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder U3, U4 in place")),(0,o.kt)("p",null,"Supply 5 volts and ground to the 5v pin and the ground pin where the Arduino Uno will be placed. The LED's in the lower right corner should now light up. You can measure if they have the correct voltages by measuring on the test pads for 2.5v, 3.3v and 5.0v.\nIf all is correct you can proceed to the second area!"),(0,o.kt)("h3",{id:"area-2---adc"},"Area 2 - ADC"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_adc-01.jpg",width:"400px"})),(0,o.kt)("p",null,"We continue by soldering the ADC related components in place."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Solder the ADC in place (personally I use the copper wick method)"),(0,o.kt)("li",{parentName:"ol"},"Make sure all connections are properly soldered and there are no bridges (I check with a cheap usb microscope)"),(0,o.kt)("li",{parentName:"ol"},"Solder R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,15,R21,R22,R23,R24 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder C6,C7,C8,C9,C10,Y1 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder the pinheaders for the arduino in place"),(0,o.kt)("li",{parentName:"ol"},"Place the Arduino Uno upside down on the headers with the USB port facing the left side")),(0,o.kt)("p",null,"Once you have reaced this stage you are very well on your way! It is now time to see if all connections are good and if the Arduino Uno can communicate to the ADC. Upload the ",(0,o.kt)("strong",{parentName:"p"},"selftest.ino(fix this)")," file onto the arduino and open the serial monitor for see the responce.\nif the response says: ",(0,o.kt)("strong",{parentName:"p"},"All good!")," that you are ready for the next step!"),(0,o.kt)("h3",{id:"area-3---analog-frontend"},"Area 3 - Analog frontend"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_analog-01.jpg",width:"400px"})),(0,o.kt)("p",null,"The next step is being able to measure infrared light. The analog frontend converts infrared light into a voltage source so that it is possible to measure small changes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Solder the U1 in place"),(0,o.kt)("li",{parentName:"ol"},"Make sure all connections are soldered and there are no bridges"),(0,o.kt)("li",{parentName:"ol"},"solder R1,R2,R3,R4 in place"),(0,o.kt)("li",{parentName:"ol"},"Solcer C1,C2,C3,C4,C5 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder the InGaAs photodiode in place (with the green notch facing left)")),(0,o.kt)("p",null,"If all is correct you now have a very sensitive infrared brightness meter. To check if it is working you can upload the ",(0,o.kt)("strong",{parentName:"p"},"irtest.ino(fix this)")," and use a TV remote and see the responsitivity on the serial plotter!"),(0,o.kt)("h3",{id:"area-4---leds"},"Area 4 - LEDs"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_led-01.jpg",width:"400px"})),(0,o.kt)("p",null,"The second to last step in the process is the most expensive part, we want to make sure the PCB is good before we continue with this section."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Solder U5 in place"),(0,o.kt)("li",{parentName:"ol"},"Make sure all connections are soldered and there are no bridges"),(0,o.kt)("li",{parentName:"ol"},"Solder C17,R25,R26,R27,R28,R29,R30,R31,R32 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder D4 to D11 in place, these are the specific wavelength LEDs, start with the lowest value at D1 (850nm) all the way to the highest value at D8 (1650nm), Make sure to LED is nice and flat on the PCB and only solder for 3 seconds before cooling down the PCB again.")),(0,o.kt)("p",null,"This was the most nerve racking part, but all should be smooth sailing from here."),(0,o.kt)("h3",{id:"area-5---io"},"Area 5 - IO"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"",src:"/img/developmentboards/2.1/board_front_io-01.jpg",width:"400px"})),"From here it is just a final stretch home, the last things to solder up are the input and outputs, it gives you a button to start the scan, a connect for i2c, and a programmable LED!",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Solder the switches, SW1 and SW2 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder R16,R18,R19 and D2 in place"),(0,o.kt)("li",{parentName:"ol"},"Solder J1, J2 and J3 to the board.")),(0,o.kt)("p",null,"That is it! You just soldered the whole development board by yourself! Great job!"))}u.isMDXComponent=!0}}]);