"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[834],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="Notes on development",u={unversionedId:"notes",id:"notes",title:"Notes on development",description:"Optics setup",source:"@site/docs/notes.md",sourceDirName:".",slug:"/notes",permalink:"/notes",draft:!1,editUrl:"https://github.com/Plastic-Scanner/docs/notes.md",tags:[],version:"current",lastUpdatedAt:1662475581,formattedLastUpdatedAt:"9/6/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Firmware flashing",permalink:"/boards/DB2.x_firmware"},next:{title:"Revision history",permalink:"/revision_history"}},c={},p=[{value:"Optics setup",id:"optics-setup",level:2},{value:"Measuring cavity",id:"measuring-cavity",level:3},{value:"Backing material",id:"backing-material",level:3},{value:"Electronics circuit",id:"electronics-circuit",level:2},{value:"PCB",id:"pcb",level:2},{value:"Data processing",id:"data-processing",level:2},{value:"Pre-processing",id:"pre-processing",level:3},{value:"interpretation",id:"interpretation",level:3},{value:"Housing",id:"housing",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notes-on-development"},"Notes on development"),(0,r.kt)("h2",{id:"optics-setup"},"Optics setup"),(0,r.kt)("h3",{id:"measuring-cavity"},"Measuring cavity"),(0,r.kt)("p",null,"Question: what is the most optimal shape"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"layout leds"),(0,r.kt)("li",{parentName:"ul"},"placement InGaAs sensor"),(0,r.kt)("li",{parentName:"ul"},"heigth wall between ingaas sensor and led?"),(0,r.kt)("li",{parentName:"ul"},"deviders between each led?"),(0,r.kt)("li",{parentName:"ul"},"height side of the wall?"),(0,r.kt)("li",{parentName:"ul"},"aluminuim tape on the sides?"),(0,r.kt)("li",{parentName:"ul"},"distance between sample and sensor")),(0,r.kt)("p",null,"Question: which LEDs are the most valuable?"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"",src:"/img/sensor_cavity_dim.png",width:"600px"})),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"",src:"/img/sensor_cavity.png",width:"600px"})),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{alt:"",src:"/img/sensor_cavity2.png",width:"600px"})),(0,r.kt)("h3",{id:"backing-material"},"Backing material"),(0,r.kt)("p",null,"Question: What is the best Backing material?\nideal: a material with a flat response between the 800nm and the 1800nm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spectralon (but expensive)"),(0,r.kt)("li",{parentName:"ul"},"Polished aluminium"),(0,r.kt)("li",{parentName:"ul"},"White ceramic tile? (used on the Niro Gun) ")),(0,r.kt)("h2",{id:"electronics-circuit"},"Electronics circuit"),(0,r.kt)("p",null,"Question: what is the best way so measure the signal from the InGaAs sensor\nIs this with a transimpeadance amplifier, which one, how stable should the reference voltage be?"),(0,r.kt)("p",null,"investigate the use of the transimpeadance amplifier\nsimulate the expected outcome of the current setup and make adjustments for tweaks\nsetup of the adc with the ideal settings for our usecase"),(0,r.kt)("h2",{id:"pcb"},"PCB"),(0,r.kt)("p",null,"Question: What footprint of components should be used? For example SMD size.",(0,r.kt)("br",{parentName:"p"}),"\n","Find a balence between batch manufacturing and single unit replication."),(0,r.kt)("p",null,"Question: All in one PCB or modular with separate processor and charge IC?",(0,r.kt)("br",{parentName:"p"}),"\n","Question: Which components are difficult to source, why and how can we be resilliant?"),(0,r.kt)("h2",{id:"data-processing"},"Data processing"),(0,r.kt)("h3",{id:"pre-processing"},"Pre-processing"),(0,r.kt)("p",null,"The data from the board is just a number, it is the ADC value, which on itself is dimentionless. it is possible to convert this into volts, but it does not help much here.\nTo get data ready for interpretation (between multiple plastic scanners) it is good to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Devide by expected maximum value.",(0,r.kt)("br",{parentName:"li"}),"Devide measurement with calibration of polished aluminium, this gives you a percentage between 0 and 100"),(0,r.kt)("li",{parentName:"ol"},"Devide measurements by eachother (beerslaw)",(0,r.kt)("br",{parentName:"li"}),"to see if ratio is positive or negative"),(0,r.kt)("li",{parentName:"ol"},"Scale alle ratios from 0 to 1 for input into ML model.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"General idea to get from InGaAs sensor to determined plastic type"),(0,r.kt)("div",null,(0,r.kt)("div",null,"1. Take a pre measurement (with sample placed but no LED on) ",(0,r.kt)("br",null),"2. Take a set of measurements (turn on one LED, wait 5ms, measure,turn off the LED, repeat for the rest) ",(0,r.kt)("br",null),"3. Take a post measurement (with sample placed but no LED on) ",(0,r.kt)("br",null),"4. Repeat steps 1-3 multiple times, this allows you to take out backgorund noise/light, if the measurements are too different it might be that the sample moved.",(0,r.kt)("br",null),"5. The measurements can then be compensated for the output power of the LEDs",(0,r.kt)("br",null),"6. The measurements can then be compensated for the sensitivity of the InGaAs photodiode",(0,r.kt)("br",null),"7. The measurements can be scaled relative to maximum possible measurement (a full reflection of IR light (polished aluminium))",(0,r.kt)("br",null),"8. At this point you want to shift the focus on the slopes of the curves, in stead of the actual values, the type of the plastic determines the shape of the curve, not the actual value",(0,r.kt)("br",null),"9. Normalize the slopes between 0 and 1",(0,r.kt)("br",null),"10. Use as input for a machine learning model",(0,r.kt)("br",null)),(0,r.kt)("br",null))),(0,r.kt)("h3",{id:"interpretation"},"interpretation"),(0,r.kt)("p",null,"Question: What is the current quality of the data coming out of the Plastic Scanner, and how can we improve this",(0,r.kt)("br",{parentName:"p"}),"\n","Question: How can we write an identification model?",(0,r.kt)("br",{parentName:"p"}),"\n","Question: Which LEDs are critical, which are nice to have, which are redundant?  "),(0,r.kt)("h2",{id:"housing"},"Housing"),(0,r.kt)("p",null,"this is more long term, but find out most common working conditions for a plastic scanner and define it's harsness"),(0,r.kt)("h2",{id:"usage"},"Usage"))}d.isMDXComponent=!0}}]);