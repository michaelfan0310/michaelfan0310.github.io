if ('geolocation' in navigator){
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(function(position){
        const lat=position.coords.latitude;
        const long=position.coords.longitude;
        document.getElementById('latitude').textContent=lat;
        document.getElementById('longitude').textContent=long;
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    });

}else{
    console.log('geolocation not available');
}



const api_url='https://api.openweathermap.org/data/2.5/weather?q=london,Ontaria&appid=6576f538d91956037524f524f1a31cb8&units=metric';


const api_url_geo='https://api.openweathermap.org/data/2.5/weather?lat=43.043989&lon=-81.2628853&appid=6576f538d91956037524f524f1a31cb8&units=metric';



async function getWeather(){
    const response= await fetch(api_url_geo);
    const data= await response.json();
    const dataIcon= data.weather[0].icon;
    const imageURL= 'http://openweathermap.org/img/wn/'+dataIcon+'@2x.png';

    const img=document.querySelectorAll('img');
    
    img[15].src=imageURL;
    // img.style.width="2px";
    // document.body.appendChild(img);
    

    console.log(data.weather[0].main);
    console.log(data.weather[0].icon);
    console.log(data.main.temp);
    console.log(data.main.temp);
    console.log(data.main.temp_min);
    // console.log(api_url_icon);
    document.getElementById('weather1').textContent=data.weather[0].main;
    document.getElementById('weather2').textContent=data.main.temp;
    
}

getWeather();
setInterval(getWeather,10000);