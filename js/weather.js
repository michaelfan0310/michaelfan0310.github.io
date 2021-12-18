async function getWeather(){

const apiKEY='cd9180cfab0e6b06a7207e6677586ae5';

// https://api.openweathermap.org/data/2.5/weather?q=London,%20CA&appid=cd9180cfab0e6b06a7207e6677586ae5&units=metric

if ('geolocation' in navigator){
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(function(position){
        const lat=position.coords.latitude;
        const long=position.coords.longitude;
        document.getElementById('latitude').textContent=lat;
        document.getElementById('longitude').textContent=long;
        console.log(lat);
        console.log(long);        
    });

}else{
    console.log('geolocation not available');
      lat=43.043989;
      long=-81.2628853;
}

const api_url='https://api.openweathermap.org/data/2.5/weather?q=London,%20CA&appid='+apiKEY+'&units=metric';

    // const api_url='https://api.openweathermap.org/data/2.5/weather?q=Woodstock,Ontario&appid='+apiKEY+'&units=metric';

    // const api_url_geo='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+apiKEY+'&units=metric';
    const response= await fetch(api_url);
    const data= await response.json();
    const dataIcon= data.weather[0].icon;
    const imageURL= 'http://openweathermap.org/img/wn/'+dataIcon+'@2x.png';

    const img=document.querySelector('#weatherIcon');
    
    img.src=imageURL;
    // console.log(response);
    // img.style.width="2px";
    // document.body.appendChild(img);   

    // console.log(data.weather[0].main);
    // console.log(data.weather[0].icon);
    // console.log(data.main.temp);
    // console.log(data.main.temp);
    // console.log(data.main.temp_min);
    // console.log(api_url_icon);
    document.getElementById('weather1').textContent=data.weather[0].main;
    document.getElementById('weather2').textContent=data.main.temp;   
    // const img2=document.querySelector('#sun-position');
    // img2.src='image/sun.gif';
}

getWeather();
setInterval(getWeather,300000);



window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 1, cityid: '6058560', appid: '6576f538d91956037524f524f1a31cb8', units: 'metric', containerid: 'openweathermap-widget-1', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();


{/* <div id="openweathermap-widget-19"></div>
<script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 19,cityid: '5128581',appid: '6576f538d91956037524f524f1a31cb8',units: 'metric',containerid: 'openweathermap-widget-19',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script> */}

{/* <div id="openweathermap-widget-19"></div>
<script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 19,cityid: '1796236',appid: '6576f538d91956037524f524f1a31cb8',units: 'metric',containerid: 'openweathermap-widget-19',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script> */}

{/* <div id="openweathermap-widget-19"></div>
<script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 19,cityid: '2988507',appid: '6576f538d91956037524f524f1a31cb8',units: 'metric',containerid: 'openweathermap-widget-19',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script> */}