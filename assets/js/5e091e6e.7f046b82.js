"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2611],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,h=p["".concat(c,".").concat(u)]||p[u]||f[u]||i;return t?r.createElement(h,a(a({ref:n},d),{},{components:t})):r.createElement(h,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7302:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:1,sidebar_label:"Infrared"},c="Infrared",l={unversionedId:"introduction/infrared",id:"introduction/infrared",title:"Infrared",description:"Infrared sorting works by shining IR light on a plastic object",source:"@site/docs/introduction/infrared.md",sourceDirName:"introduction",slug:"/introduction/infrared",permalink:"/documentation/docs/introduction/infrared",editUrl:"https://github.com/Plastic-Scanner/docs/introduction/infrared.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Infrared"},sidebar:"tutorialSidebar",previous:{title:"General introduction",permalink:"/documentation/docs/intro"},next:{title:"Plastic Sorting",permalink:"/documentation/docs/introduction/plastic-sorting"}},d=[],f={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infrared"},"Infrared"),(0,i.kt)("p",null,"Infrared sorting works by shining IR light on a plastic object\nand measuring the reflection of the different wavelengths.\nAbsorption within the visible spectrum gives information about\nthe color of a product, and absorption in the infrared spectrum\ngives information about the chemical bonds associated with\nthe atoms of a functional group.\nDifferent chemical bonds (like O\u2013H, C\u2013H, and N\u2013H) vary in\nstrength and therefore the amount of energy required for the\nbond-vibration varies as well. This variation in energy can be\nexpressed on a spectrum as a series of absorptions at different\nwavelengths. This can be seen in figure 2.7 (Davies, 2005). An\nexample: white light shines on an object, only the wavelength\nof the object is reflected, this reflection enters your eyes,\nmaking you aware that the object is, for example, blue. This\ncan also be done with IR light; the reflection gives us details\nabout the molecular structure of a product, making it possible\nto identify the type of plastic.\nNear-infrared spectrometry can be used to identify different\ntypes of plastic, since different types of plastic have different\nabsorbance peaks. PVC, for example has an absorbance peak\nat 1660nm and PET has an absorbance peak of 1716nm. Based\non this principle, Scott(1995) was able to successfully separate\nPET from PVC. In 2012 Masoumi and Safavi repeated this\nexperiment and were able to identify five different types\nof plastic using just the ratio between 1656nm and 1724nm\n(Masoumi et al., 2012). A visualization of these absorption\ncurves is shown in the figure 2.8, where the vertical axis\nrepresents the absorption in percentages and the horizontal axis\nrepresents the wavelength in nanometers."),(0,i.kt)("p",null,"Current infrared sorting techniques are divided into two\ncategories: Conveyor belt style or handheld scanner .\nWith the conveyor belt method, a sensor is placed above the\nconveyor belt, and based on the reading of the infrared sensor\nthe object is sorted (often with compressed air). With handheld\nscanning, a user scans a plastic object whereafter the scanner\ntells what type of plastic it is. Users in LMIC benefit most from\na handheld scanner since their inflow is often not continuous\nand there are no conveyor belts in place on which to mount\ninfrared sensors.\nMarket research in the field of handheld scanners, or more\nprecisely infrared spectrometers showed that based on\nthe technology used to sense the reflection there are three\ncategories: Micro Electrical Mechanical spectroscopy\nSystems (MEMS), Optical spectroscopy systems and discrete\nspectroscopy systems. The category that is most suitable\nfor LMIC is discrete spectroscopy. MEMS spectroscopy\nis complex to manufacture, while Optical spectroscopy is\nexpensive. Discrete spectroscopy is less accurate but research\nby Straller and Gessler (2019) suggests that it can still identify\nthe plastics mentioned earlier. Straller\u2019s research led to the\ndevelopment of the open-source ReReMeter (figure 2.9). This\nplastic identification tool is used as a starting point for the\ndevelopment of this project. Since open-source knowledge is\nused in this project, it is therefore also expected to share the\nproject in an open-source manner.\nMore information about infrared identification can be found in\nappendix IV (identification)"))}p.isMDXComponent=!0}}]);