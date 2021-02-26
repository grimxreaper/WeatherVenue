function __id(e){return document.getElementById(e)}function __class(e){return document.getElementsByClassName(e)}const _myStorage=window.localStorage,_styles={default:[],hide:[{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],night:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]}]},pSBC=(e,t,n,o)=>{let r,a,i,s,l,c,d,p=parseInt,m=Math.round,g="string"==typeof n;return"number"!=typeof e||e<-1||e>1||"string"!=typeof t||"r"!=t[0]&&"#"!=t[0]||n&&!g?null:(this.pSBCr||(this.pSBCr=e=>{let t=e.length,n={};if(t>9){if([r,a,i,g]=e=e.split(","),t=e.length,t<3||t>4)return null;n.r=p("a"==r[3]?r.slice(5):r.slice(4)),n.g=p(a),n.b=p(i),n.a=g?parseFloat(g):-1}else{if(8==t||6==t||t<4)return null;t<6&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+(t>4?e[4]+e[4]:"")),e=p(e.slice(1),16),9==t||5==t?(n.r=e>>24&255,n.g=e>>16&255,n.b=e>>8&255,n.a=m((255&e)/.255)/1e3):(n.r=e>>16,n.g=e>>8&255,n.b=255&e,n.a=-1)}return n}),d=t.length>9,d=g?n.length>9||"c"==n&&!d:d,l=this.pSBCr(t),s=e<0,c=n&&"c"!=n?this.pSBCr(n):s?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},s=1-(e=s?-1*e:e),l&&c?(o?(r=m(s*l.r+e*c.r),a=m(s*l.g+e*c.g),i=m(s*l.b+e*c.b)):(r=m((s*l.r**2+e*c.r**2)**.5),a=m((s*l.g**2+e*c.g**2)**.5),i=m((s*l.b**2+e*c.b**2)**.5)),g=l.a,c=c.a,l=g>=0||c>=0,g=l?g<0?c:c<0?g:g*s+c*e:0,d?"rgb"+(l?"a(":"(")+r+","+a+","+i+(l?","+m(1e3*g)/1e3:"")+")":"#"+(4294967296+16777216*r+65536*a+256*i+(l?m(255*g):0)).toString(16).slice(1,l?void 0:-2)):null)};var cardsColors;function _styleItDark(){document.documentElement.style.backgroundColor="#111",map.setOptions({styles:_styles.night}),__id("copyright_google").src="./copyright/powered_by_google_on_non_white_hdpi.png",cardsColors||(cardsColors=Array.from(__class("card")).map((e=>e.style.backgroundColor)),cardsColors=[...cardsColors]),Array.from(__class("card")).forEach((e=>{e.style.backgroundColor=pSBC(-.2,e.style.backgroundColor)})),__id("logo").src="./img/weather_venue_856-8_on_black.png"}function _styleItWhite(){document.documentElement.style.backgroundColor="#eee",map.setOptions({styles:_styles.hide}),__id("copyright_google").src="./copyright/powered_by_google_on_white_hdpi.png",cardsColors&&Array.from(__class("card")).forEach((function(e,t){e.style.backgroundColor=cardsColors[t]})),__id("logo").src="./img/weather_venue_856-8.png"}function _showLoading(){__id("spinner-back").classList.add("show"),__id("spinner-front").classList.add("show")}function _hideLoading(){__id("spinner-back").classList.remove("show"),__id("spinner-front").classList.remove("show")}function _setWithExpiry(e,t){const n=new Date,o={value:t,expiry:{day:n.getDay(),month:n.getMonth(),year:n.getFullYear()}};_myStorage.setItem(e,JSON.stringify(o))}function _getWithExpiry(e){const t=_myStorage.getItem(e);if(!t)return null;const n=JSON.parse(t),o=new Date;return o.getDay()!==n.expiry.day||o.getMonth()!==n.expiry.month||o.getFullYear()!==n.expiry.year?(_myStorage.removeItem(e),null):n.value}const _autocompleteOptions={types:["(cities)"]};function _generateDummyCards(){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=JSON.parse('[{"dt":1613390400,"sunrise":1613372331,"sunset":1613409052,"temp":{"day":3,"min":-1.78,"max":4.03,"night":1.7,"eve":2.11,"morn":-1.78},"feels_like":{"day":-3.81,"night":-5.13,"eve":-4.54,"morn":-8.32},"pressure":1024,"humidity":66,"dew_point":-9.78,"wind_speed":6.37,"wind_deg":110,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":6,"pop":0,"uvi":2},{"dt":1613304000,"sunrise":1613286034,"sunset":1613322553,"temp":{"day":1.9,"min":-2.92,"max":2.79,"night":-0.83,"eve":0.18,"morn":-2.63},"feels_like":{"day":-6.01,"night":-7.09,"eve":-6.16,"morn":-10.66},"pressure":1028,"humidity":63,"dew_point":-14.74,"wind_speed":7.67,"wind_deg":96,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":100,"pop":0,"uvi":2},{"dt":1613217600,"sunrise":1613199737,"sunset":1613236054,"temp":{"day":-0.03,"min":-3.34,"max":0.35,"night":-3.11,"eve":-2.1,"morn":-3.34},"feels_like":{"day":-7.28,"night":-10.75,"eve":-9.83,"morn":-10.38},"pressure":1032,"humidity":73,"dew_point":-14.61,"wind_speed":6.74,"wind_deg":91,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":2},{"dt":1613131200,"sunrise":1613113437,"sunset":1613149554,"temp":{"day":1.03,"min":-2.08,"max":1.03,"night":-1.78,"eve":-0.68,"morn":-2.08},"feels_like":{"day":-6.05,"night":-8.36,"eve":-7.1,"morn":-8.99},"pressure":1027,"humidity":69,"dew_point":-13.94,"wind_speed":6.54,"wind_deg":87,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":81,"pop":0,"uvi":1.14},{"dt":1613044800,"sunrise":1613027137,"sunset":1613063054,"temp":{"day":-0.05,"min":-3.07,"max":0.68,"night":-1.31,"eve":-0.84,"morn":-3.07},"feels_like":{"day":-5.91,"night":-8.18,"eve":-6.92,"morn":-8.31},"pressure":1028,"humidity":80,"dew_point":-10.83,"wind_speed":4.95,"wind_deg":88,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":10,"pop":0,"uvi":1.5},{"dt":1612958400,"sunrise":1612940834,"sunset":1612976555,"temp":{"day":-1.18,"min":-4.66,"max":0.01,"night":-2.45,"eve":-1.62,"morn":-4.34},"feels_like":{"day":-8.06,"night":-7.01,"eve":-6.79,"morn":-10.94},"pressure":1012,"humidity":78,"dew_point":-12.58,"wind_speed":6.17,"wind_deg":27,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":53,"pop":0.52,"snow":0.15,"uvi":1.33},{"dt":1612872000,"sunrise":1612854531,"sunset":1612890055,"temp":{"day":-1.67,"min":-3.98,"max":-0.91,"night":-2.78,"eve":-2.22,"morn":-3.84},"feels_like":{"day":-5.7,"night":-8.87,"eve":-7.43,"morn":-8.63},"pressure":1003,"humidity":85,"dew_point":-9.49,"wind_speed":2.21,"wind_deg":40,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":93,"pop":0.12,"uvi":1.33},{"dt":1612785600,"sunrise":1612768225,"sunset":1612803555,"temp":{"day":1.45,"min":-1.19,"max":1.59,"night":-0.53,"eve":0.76,"morn":-1.13},"feels_like":{"day":-1.77,"night":-4.84,"eve":-3.37,"morn":-4.58},"pressure":998,"humidity":81,"dew_point":-5.67,"wind_speed":1.47,"wind_deg":4,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":88,"pop":0.14,"uvi":1.29}]');__id("forecast-items").innerHTML="",document.body.style.backgroundImage=`url(https://openweathermap.org/img/wn/${t[t.length-1].weather[0].icon||"na"}.png), linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)`,document.documentElement.style.backgroundImage=`url(https://openweathermap.org/img/wn/${t[t.length-1].weather[0].icon||"na"}.png), linear-gradient(rgb(235, 178, 177) 0%, rgb(130, 173, 219) 100%)`;const n=Math.max(...t.map((e=>e.temp.max)));t.forEach((function(t){const o=new Date(0);o.setUTCSeconds(t.dt);const r=o.toISOString().slice(0,10),a=e[o.getDay()],i=`https://openweathermap.org/img/wn/${t.weather[0].icon||"na"}@4x.png`,s=t.temp.max||"N/A",l=t.temp.min||"N/A",c=t.weather[0].description||"N/A";let d=`hsl( ${240*(1-s/n)} , 90%, 80%)`;d="; background-color: "+d;const p=`\n            <div class="col-md-3">\n              <div class="card" style="width: 100%${d}">\n                  <div class="card-body">\n                      <h4 class="card-title text-center">${a}</h4>\n                      <h5 class="card-title text-center">${r}</h5>\n                      <p><img class="card-img mx-auto d-block" style="max-width: 100px;" src="${i}"></p>\n                      <h6 class="card-title text-center">${c}</h6>\n                      <p class="card-text text-center">High: ${s} <br />Low: ${l}</p>\n                  </div>\n              </div>\n            </div>\n        `;__id("forecast-items").insertAdjacentHTML("afterbegin",p)}))}function allowDrop(e){e.preventDefault()}function drag(e){e.dataTransfer.setData("text",e.target.id)}function drop(e){e.preventDefault();var t=e.dataTransfer.getData("text");let n=__id(t).cloneNode(!0);const o=`<h3>${t.split("-").slice(1,-1).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("-")}</h3>`;n.setAttribute("id",t+"_clone"),n.setAttribute("draggable",!1),n.childNodes[1].firstElementChild.setAttribute("href",""),n.insertAdjacentHTML("afterbegin",o),e.target.appendChild(n)}function emptyIt(){const e=document.querySelectorAll('[id*="_clone"]');Array.prototype.forEach.call(e,(function(e){e.parentNode.removeChild(e)}))}function _weekdaysLangs(e){switch(e){case"en":return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];case"ar":return["الأحد","الإثنين","الثلثاء","الأربعاء","الخميس","الجمعة","السبت"];default:throw new Error("Language mapping error in _weekdayNames with language=",e)}}function _aqiLangs(e){switch(e){case"en":return{1:"Air Quality: Good",2:"Air Quality: Fair",3:"Air Quality: Moderate",4:"Air Quality: Poor",5:"Air Quality: Very Poor"};case"ar":return{1:"جودة الهواء: جيدة",2:"جودة الهواء: مقبولة",3:"جودة الهواء: متوسطة",4:"جودة الهواء: ضعيفة",5:"جودة الهواء: ضعيفة جدا"};default:throw new Error("Language mapping error in _aqiInterpretation with language=",e)}}function _picturesLangs(e){let t,n;switch(e){case"en":return t=e=>`Local pictures of ${e}`,n=e=>`There are no pictures found for ${e}`,[t,n];case"ar":return t=e=>`صور منطقة ${e}`,n=e=>`لا توجد صور لمنطقة ${e}`,[t,n];default:throw new Error("Language mapping error in _picturesLangs with language=",e)}}function _aqiCardHolder(e,t,n,o,r,a,i){let s=1;return`\n    <div class="col-md-3" style="margin-top:20px;">\n        <div class="card" style="${e}">\n            <h4 class="card-title text-center" data-toggle="collapse" href="#collapseId20" role="button" aria-expanded="true">${t[n]}</h4>\n            <table style="width:100%">\n            <tr>\n                <th style= 'background-color: #4C5273; font-size: xx-small'>${t[s++].split(":")[1].trim()}</th>\n                <th style= 'background-color: #F2E96B; font-size: xx-small'>${t[s++].split(":")[1].trim()}</th>\n                <th style= 'background-color: #F2CA50; font-size: xx-small'>${t[s++].split(":")[1].trim()}</th>\n                <th style= 'background-color: #F2A03D; font-size: xx-small'>${t[s++].split(":")[1].trim()}</th>\n                <th style= 'background-color: #A67041; font-size: xx-small'>${t[s++].split(":")[1].trim()}</th>\n            </tr>\n            </table>\n            <div class="card-body">\n                <div class="collapse show" id="collapseId20">\n                    <h5 class="card-title text-center">${o}</h5>\n                    <p class="card-text text-center">CO: ${r} </p>\n                    <p class="card-text text-center">NO: ${a} </p>\n                    <p class="card-text text-center">NO2: ${i} </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    `}function _tempHolder(e,t,n,o,r,a,i,s,l,c,d,p,m,g){return`\n    <div class="col-md-3" id="${g}-${m}" style="margin-top:20px;" draggable="true" ondragstart="drag(event)">\n        <div class="card" style="${e}">\n            <h4 class="card-title text-center" data-toggle="collapse" href="#collapseId${m}" role="button" aria-expanded="true">${t}\n${n}</h4>\n            \x3c!--<h5 class="card-title text-center">${n}</h5>--\x3e\n            <img class="card-img mx-auto d-block" style="max-width: 30%;" src="${o}">\n            <div class="card-body">\n                <div class="collapse show" id="collapseId${m}">\n                    <h6 class="card-title text-center">${r}</h6>\n                    <p class="card-text text-center">High: ${a} <br />Low: ${i}</p>\n                    <div id="weatherinfo">\n                    <p><img class="icon" src="./img/sunrise.svg"> ${s}</p>\n                    <p><img class="icon" src="./img/sunset.svg"> ${l}</p>\n                    <p><img class="icon" src="./img/humidity.svg"> ${c}</p>\n                    <p><img class="icon" src="./img/pressure.svg"> ${d}</p>\n                    <p><img class="icon" src="./img/wind.svg"> ${p}</p>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    `}function _adsHolder(e){switch(e){case"Google":return'\n                <div class="col-md-3" style="margin-top:20px;">\n                    <div class="card" style="background-color: red;">\n                        <div class="card-body">\n                            <p>Ads go here</p>\n                        </div>\n                    </div>\n                </div>\n                '}}let __currentSpokenCity,paragraph,__currentSpokenForecast;function searchPlace(){const e=new google.maps.places.AutocompleteService,t=new google.maps.places.PlacesService(map);if(!__currentSpokenCity)return;e.getPlacePredictions({input:__currentSpokenCity,types:["(cities)"]},(function(e,n){n===google.maps.places.PlacesServiceStatus.OK?(speak("I am now looking for "+e[0].terms[0].value),t.getDetails({placeId:e[0].place_id},(function(e,t){t===google.maps.places.PlacesServiceStatus.OK?(nearbyRequest(e),setTimeout((function(){speak(__currentSpokenForecast)}),3e3)):speak("I am sorry, there was an error final results")}))):speak("I am sorry, I could not find any city for "+__currentSpokenCity)}))}var synth,SpeechRecognition,recognition;function speak(e){if(synth.speaking)return void console.error("speechSynthesis.speaking");const t=new SpeechSynthesisUtterance(e);t.lang="en-US",t.onend=function(e){console.log("SpeechSynthesisUtterance.onend")},t.onerror=function(e){console.error("SpeechSynthesisUtterance.onerror")},synth.speak(t)}function _fireAccessFunctions(e,t){e?"undefined"!=typeof webkitSpeechRecognition?(synth=window.speechSynthesis,SpeechRecognition=SpeechRecognition||webkitSpeechRecognition,(recognition=new SpeechRecognition).continuous=!1,recognition.lang="en-US",recognition.interimResults=!1,recognition.maxAlternatives=1,document.body.onkeyup=function(e){recognition&&" "===e.key&&(recognition.start(),console.log("Ready to receive a new city command.")),synth.speaking&&"Control"===e.key&&(synth.cancel(),console.log("You shut me up."))},recognition.onresult=function(e){const t=e.results[0][0].transcript;console.log("Result received: "+t+".");const n=e.results[0][0].confidence;console.log("Confidence: "+n),n>.9?(paragraph="Is it "+t+"?",speak(paragraph),__currentSpokenCity=t,searchPlace()):(paragraph="I am sorry, could you say that again ?",speak(paragraph))},recognition.onspeechend=function(){recognition.stop()},recognition.onnomatch=function(e){console.log("I didn't recognise that city.")},recognition.onerror=function(e){console.log("Error occurred in recognition: "+e.error)},t||(paragraph="Hello, Weather Venue is accessible through speech although not fully garanteed. I will assist you on how to look for a city weather forecast. Whenever you want to look for a city, tap spacebar then tell using microphone the name of the city. If you want to interrupt me tap control.",speak(paragraph))):console.log("browser does not support speech recognition"):recognition&&(recognition=void 0)}function _initAccessibility(e){if("en"===e){const e=null!==localStorage.getItem("accessibilitySwitch")&&"true"===localStorage.getItem("accessibilitySwitch");__id("accessibilitySwitch").addEventListener("click",(function(){console.log("accessibilitySwitch clicked ");(__id("accessibilitySwitch").checked?1:0)?localStorage.setItem("accessibilitySwitch","true"):localStorage.removeItem("accessibilitySwitch");_fireAccessFunctions(!!(null!==localStorage.getItem("accessibilitySwitch")&&"true"===localStorage.getItem("accessibilitySwitch")),!1)})),e&&_fireAccessFunctions(!0,!0)}}const today=(new Date).toDateString();__id("date").innerHTML=today;class CurrentList{constructor(e){if(!this.isFeatures(e)||!this.isWeather(e))return{isValid:!1};this.currentList=e,this.weather=e.weather,this.pollution=e.pollution,this.location=e.features[0].properties.name,this.dailies=e.weather[0].daily,this.coordinates=e.features[0].geometry.coordinates,this.isValid=!0}isFeatures(e){return e&&e.features&&e.features.length}isWeather(e){return e&&e.weather&&e.weather.length}}let currentMarked,map,autocomplete,currObj={isValid:!1},markers=[],language="en",directions={start_location:void 0,end_location:void 0},last=(new Date).getTime(),first=!0,center={lat:-33.8688,lng:151.2195};function refreshCenter(){const e=document.getElementsByTagName("script")[3];language=e.getAttribute("lang");switch(e.getAttribute("centerLocation")){case"algiers":center={lat:36.75,lng:3.05};break;case"paris":center={lat:48.85,lng:2.35};break;case"london":center={lat:51.5,lng:.12}}currObj.isValid&&(center={lat:currObj.coordinates[1],lng:currObj.coordinates[0]})}function initMap(){var e;if(refreshCenter(),map?((e=map).data.forEach((function(t){e.data.remove(t)})),google.maps.event.trigger(map,"resize")):map=new google.maps.Map(__id("map"),{center:center,zoom:10}),configUIControls(),_initAccessibility(language),currObj.isValid){map.data.addGeoJson(currObj.currentList),clearMarkers(),getMarkers(),showMarkers(),map.data.setStyle({strokeColor:"blue"});var t=new google.maps.LatLngBounds;map.data.forEach((function(e){e.getGeometry().forEachLatLng((function(e){t.extend(e)}))})),map.fitBounds(t),map.setCenter(center),map.setZoom(11),showAlertsList(currObj),populateHeatMap(0)}let n=new google.maps.InfoWindow,o=__id("infowindow-content");const r=o.cloneNode(!0);n.setContent(o);const a=new google.maps.Marker({map:map,animation:google.maps.Animation.DROP});let i="";markers&&markers.length>0&&markers.forEach((e=>{e.addListener("click",(()=>{currentMarked=e.title,i!==e.title&&(i=e.title,r.getElementsByClassName("title")[0].innerHTML=e.title,n.close(),n.setContent(r),n.open(map,e),null!==e.getAnimation()?e.setAnimation(null):(markers.forEach((e=>{e.setAnimation(null)})),e.setAnimation(google.maps.Animation.BOUNCE)),currObj.isValid&&(__id("location").innerHTML=e.title,cityWeather=currObj.weather.filter((t=>t.cityName===e.title))[0],cityPollution=currObj.pollution.filter((t=>t.cityName===e.title))[0],renderForecastDays(cityWeather.daily),renderPollution(cityPollution)))})),e.addListener("mousedown",(e=>{console.log("mousedown")})),e.addListener("rightclick",(t=>{configURLsControls(e)}))})),autocomplete.addListener("place_changed",(()=>{if(!first&&(new Date).getTime()-last<200)return void console.log("quick re-call, ignore.");first=!1,last=(new Date).getTime(),n.close();const e=autocomplete.getPlace();e.geometry&&(e.geometry.viewport?map.fitBounds(e.geometry.viewport):(map.setCenter(e.geometry.location),map.setZoom(11)),a.setPlace({placeId:e.place_id,location:e.geometry.location}),a.setVisible(!1),o.children.namedItem("place-name").textContent=e.name,o.children.namedItem("place-address").textContent=e.formatted_address,currentMarked=e.name,getPicture(e.name),nearbyRequest(e),showAlertsList(currObj))})),showAlertsList(currObj)}function handleLocationError(e,t,n){t.setPosition(n),t.setContent(e?"Error: The Geolocation service failed.":"Error: Your browser doesn't support geolocation."),t.open(map)}function configUIControls(){null!==localStorage.getItem("darkSwitch")&&"dark"===localStorage.getItem("darkSwitch")?_styleItDark():_styleItWhite(),google.maps.event.addDomListener(__id("darkSwitch"),"click",(function(){null!==localStorage.getItem("darkSwitch")&&"dark"===localStorage.getItem("darkSwitch")?_styleItWhite():_styleItDark()}));const e=__id("formControlRange"),t=__id("formControlRange0");let n,o=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(o=!0),o||(map.controls[google.maps.ControlPosition.TOP_LEFT].clear(),map.controls[google.maps.ControlPosition.TOP_LEFT].push(t)),e.oninput=function(){$("#rangeval").html(`Day ${e.value}`),n=populateHeatMap(e.value-1),n||(e.value=1,$("#rangeval").html("Day 1"))};var r=__id("pac-input");if(null==r){const e=document.createElement("INPUT");e.id="pac-input",e.className="controls",e.type="text",e.placeholder="Enter a location",document.body.appendChild(e),r=__id("pac-input")}if(autocomplete||(autocomplete=new google.maps.places.Autocomplete(r,_autocompleteOptions),map.controls[google.maps.ControlPosition.TOP_CENTER].clear(),map.controls[google.maps.ControlPosition.TOP_CENTER].push(r),autocomplete.bindTo("bounds",map),autocomplete.setFields(["place_id","geometry","name"])),currentMarked="geolocated",__class("custom-map-control-button")[0])return;var a=new google.maps.InfoWindow;const i=document.createElement("button");i.textContent="Go to Current Location",i.classList.add("custom-map-control-button"),map.controls[google.maps.ControlPosition.TOP_RIGHT].clear(),map.controls[google.maps.ControlPosition.TOP_RIGHT].push(i),i.addEventListener("click",(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{const t={lat:e.coords.latitude,lng:e.coords.longitude};a.setPosition(t),a.setContent("Location found."),a.open(map),map.setCenter(t),t.name="Current place",nearbyGeolocatedRequest(t),__id("imgGrid").innerHTML="",showAlertsList(currObj)}),(()=>{handleLocationError(!0,a,map.getCenter())})):handleLocationError(!1,a,map.getCenter())}))}function configURLsControls(e){const t=`${e.position.lat()},${e.position.lng()}`;let n;if(!directions.start_location)return directions.start_location=t,void e.setIcon("https://www.google.com/mapfiles/marker_black.png");if(!directions.end_location&&directions.start_location!==t){directions.end_location=t;const o=`https://www.google.com/maps/dir/?api=1&origin=${directions.start_location}&destination=${directions.end_location}&travelmode=driving`;__id("URL")?(n=__id("URL"),n.innerHTML=""):(n=document.createElement("div"),n.setAttribute("id","URL"));const r=document.createElement("a"),a=document.createTextNode("🔗Google Map's directions");return r.appendChild(a),r.title="Google Map",r.href=o,r.target="_blank",r.style.cssText="background-color: #2a2a3c; color: #fff",n.appendChild(r),map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(),map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(n),void e.setIcon("https://www.google.com/mapfiles/marker_black.png")}markers.forEach((e=>{e.setIcon(e.iconSrc)})),n=__id("URL"),n.innerHTML="",map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear(),map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(n),directions={start_location:void 0,end_location:void 0}}function nearbyRequest(e){_showLoading();var t=_getWithExpiry("response_"+e.name);if(t&&t.length>0)return currObj=new CurrentList(t),__id("location").innerHTML=currObj.location,renderForecastDays(currObj.dailies),initMap(),void _hideLoading();const n=new XMLHttpRequest,o=JSON.stringify({lat:e.geometry.location.lat(),lng:e.geometry.location.lng(),cityname:e.name,language:language});n.open("GET","nearby/"+o),n.responseType="json",n.onload=function(){currObj=new CurrentList(n.response.data),_setWithExpiry("response_"+e.name,currObj.currentList),__id("location").innerHTML=currObj.location,renderForecastDays(currObj.dailies),initMap(),populateHeatMap(0),_hideLoading();const t=_adsHolder("Google");__id("forecast-items").insertAdjacentHTML("beforeend",t)},n.send()}function nearbyGeolocatedRequest(e){_showLoading();const t=new XMLHttpRequest,n=JSON.stringify({lat:e.lat,lng:e.lng,cityname:e.name,language:language});t.open("GET","nearby/"+n),t.responseType="json",t.onload=function(){currObj=new CurrentList(t.response.data),__id("location").innerHTML=currObj.location,renderForecastDays(currObj.dailies),initMap(),_hideLoading()},t.send()}function showAlertsList(e){if(!e.isValid)return;const t=e.weather.map((e=>e.cityName)),n=e.weather.map(((e,n)=>e.alerts?{city:t[n],alert:e.alerts[0]}:void 0)).filter((e=>e));let o=document.createElement("ul");if(__id("panel"))o=__id("panel"),o.classList.contains("open")&&o.classList.remove("open");else{o.setAttribute("id","panel");const e=document.body;e.insertBefore(o,e.childNodes[0])}for(map.controls[google.maps.ControlPosition.BOTTOM_LEFT].clear(),map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(o);o.lastChild;)o.removeChild(o.lastChild);n&&0!==n.length?(o.style.display="block",n.forEach((e=>{const t=document.createElement("li");t.classList.add("alert"),t.textContent=e.city,o.appendChild(t);const n=document.createElement("p");n.classList.add("alertContent"),n.textContent=e.alert.event,o.appendChild(n)})),o.classList.add("open")):o.style.display="none"}const getScale=(e,t,n)=>Math.floor(5*(n-e)/(t-e));let heatmap;function populateHeatMap(e){if(!currObj.isValid)return!1;heatmap||(heatmap=new HeatmapOverlay(map,{radius:.03,maxOpacity:1,scaleRadius:!0,useLocalExtrema:!0,latField:"lat",lngField:"lng",valueField:"count"}));let t=currObj.weather.map((t=>t.daily[e].temp.min));const n=Math.max(...t),o=Math.min(...t);t=t.map((e=>{return t=o,r=n,a=e,Math.floor(5*(a-t)/(r-t));var t,r,a}));const r={max:8,data:currObj.weather.map(((e,n)=>({lat:e.lat,lng:e.lon,count:t[n]})))};return heatmap.setData(r),!0}function renderForecastDays(e){e.sort((function(e,t){return t.dt-e.dt}));const t=_weekdaysLangs(language);document.body.style.backgroundImage=`url(https://openweathermap.org/img/wn/${e[e.length-1].weather[0].icon||"na"}.png)`,document.documentElement.style.backgroundImage=`url(https://openweathermap.org/img/wn/${e[e.length-1].weather[0].icon||"na"}.png)`,__id("forecast-items").innerHTML="";const n=Math.max(...e.map((e=>e.temp.max)));Math.max(...e.map((e=>e.temp.min)));e.forEach((function(e,o){const r=new Date(0);r.setUTCSeconds(e.dt);const a=r.toISOString().slice(5,10),i=t[r.getDay()],s=`https://openweathermap.org/img/wn/${e.weather[0].icon||"na"}@4x.png`,l=e.temp.max||"N/A",c=e.temp.min||"N/A",d=e.weather[0].description||"N/A";let p,m,g,u,h;({sunrise:p,sunset:m,humidity:g,pressure:u,wind_speed:h}=e),p=new Date(1e3*p).toLocaleTimeString("en-GB").slice(0,5),m=new Date(1e3*m).toLocaleTimeString("en-GB").slice(0,5);let y=`; border-radius: 5px; border: 5px solid rgb(122 122 122 / 30%); background: linear-gradient(70deg, hsl( ${240*(1-c/n)} , 90%, 80%) 40%, hsl( ${240*(1-l/n)} , 90%, 80%) 40%)`,f="city-"+currentMarked.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(" ","-").toLowerCase();f=`checkId${f}`;const _=_tempHolder(y,i,a,s,d,l,c,p,m,g,u,h,o,f);__id("forecast-items").insertAdjacentHTML("afterbegin",_)})),e.reverse(),__currentSpokenForecast="Now, let’s see what the weather is like in "+__currentSpokenCity+": ",e.forEach((function(n,o){const r=e=>Number.parseFloat(e).toPrecision(1),a=new Date(0);a.setUTCSeconds(n.dt);const i=t[a.getDay()],s=n.temp.max||"N/A",l=n.temp.min||"N/A",c=n.weather[0].description||"N/A";let d="";switch(o){case 0:d="Today is ";break;case 1:d="Tomorrow is ";break;default:d=e.length-1===o?"Finally, on ":"On "}__currentSpokenForecast+=`${d} ${i}, ${a.toDateString().slice(4,10)}, it feels like ${c} with a maximum temperature of ${r(s)}°C and a minimum of ${r(l)}°. `}))}function renderPollution(e){const t=_aqiLangs(language),n=e.list[0].main.aqi,o=new Date(0);o.setUTCSeconds(e.list[0].dt);const r=o.toISOString().slice(0,10),{co:a,no:i,no2:s}=e.list[0].components,l=_aqiCardHolder("; border-radius: 5px; border: 5px solid rgb(122 122 122 / 30%); background-color: "+{1:"#4C5273",2:"#F2E96B",3:"#F2CA50",4:"#F2A03D",5:"#A67041"}[n],t,n,r,a,i,s);__id("forecast-items").insertAdjacentHTML("afterbegin",l)}function getMarkers(){if(!currObj.isValid)return;center={lat:currObj.coordinates[1],lng:currObj.coordinates[0]};new google.maps.LatLngBounds;let e=0;const t=["blue","purple","green","yellow","red"],n=(e,n,o)=>t[Math.floor(t.length*(o-e)/(n-e))],o=Math.max(...currObj.weather.map((e=>e.daily[0].temp.max))),r=Math.min(...currObj.weather.map((e=>e.daily[0].temp.min)));map.data.forEach((function(t){if("Point"===t.getGeometry().getType()){const a=(currObj.weather[e].daily[0].temp.max+currObj.weather[e++].daily[0].temp.min)/2,i=t.getGeometry().get(),s=new google.maps.Marker({position:i,map:map,animation:google.maps.Animation.DROP,title:t.i.name,iconSrc:`https://maps.google.com/mapfiles/ms/icons/${n(r,o,a)}-dot.png`});s.setIcon(`https://maps.google.com/mapfiles/ms/icons/${n(r,o,a)}-dot.png`),markers.push(s),map.data.remove(t)}}))}function setMapOnAll(e){for(let t=0;t<markers.length;t++)markers[t].setMap(e)}function clearMarkers(){for(let e=0;e<markers.length;e++)markers[e].setVisible(!1);setMapOnAll(null),markers=[]}function showMarkers(){for(let e=0;e<markers.length;e++)markers[e].setVisible(!0);setMapOnAll(map)}function getPicture(e){const[t,n]=_picturesLangs(language);__id("imgGrid").innerHTML="";let o=_myStorage.getItem(e);if(o){o=JSON.parse(o);for(let e=0;e<o.photos.length;e++)__id("imgGrid").innerHTML+='<div class="featured_pictures"><img src="'+o.photos[e]+'" alt="'+o.names[e]+'" /></div>';return}const r=new google.maps.places.PlacesService(map),a={location:map.getCenter(),radius:"3000",query:e,type:["park"]};let i=!1;r.nearbySearch(a,(function(o,r){if(i)return;if(i=!0,__id("gallery").innerHTML=t(e),r===google.maps.places.PlacesServiceStatus.OK){const t=o.map((e=>e.photos?e.photos[0].getUrl():void 0)).filter((e=>e)),r=o.map((e=>e.name));if(!t.length)return void(__id("gallery").innerHTML=n(e));_myStorage.setItem(e,JSON.stringify({photos:t,names:r}));for(let e=0;e<t.length;e++)__id("imgGrid").innerHTML+='<div class="featured_pictures"><img src="'+t[e]+'" alt="'+r[e]+'" /></div>'}else __id("gallery").innerHTML=n(e)}))}
//# sourceMappingURL=all.js.map
