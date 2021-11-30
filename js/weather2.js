async function getWeather_2city(){

const apiKEY='6576f538d91956037524f524f1a31cb8';


// <!-- '+lat+'-->
    const api_url_ny='https://api.openweathermap.org/data/2.5/weather?q=NY,usa&appid='+apiKEY+'&units=metric';

    
    const response= await fetch(api_url_ny);
    const data= await response.json();
    const dataIcon= data.weather[0].icon;
    const imageURL= 'http://openweathermap.org/img/wn/'+dataIcon+'@2x.png';

    // const img=document.querySelectorAll('img');
    const img=document.querySelector('#weatherIcon2');
    img.src=imageURL;
    // img.style.width="2px";
    // document.body.appendChild(img);
    const api_url_SH='https://api.openweathermap.org/data/2.5/weather?q=ShangHai,china&appid='+apiKEY+'&units=metric';
    const reponse2 = await fetch(api_url_SH);
    const data2 = await reponse2.json();
    const data2Icon= data2.weather[0].icon;
    const imageURL2= 'http://openweathermap.org/img/wn/'+data2Icon+'@2x.png';
    const img2=document.querySelector('#weatherIcon3');
    img2.src=imageURL2;
    // const img2=document.querySelector('#weatherIcon3');
    // img2.src=imageURL;

    // console.log(data.weather[0].main);
    // console.log(data.weather[0].icon);
    // console.log(data.main.temp);
    // console.log(data.main.temp);
    // console.log(data.main.temp_min);
    // console.log(api_url_icon);
    document.getElementById('weather3').textContent=data.weather[0].main;
    document.getElementById('weather4').textContent=data.main.temp;
     document.getElementById('weather5').textContent=data2.weather[0].main;
    document.getElementById('weather6').textContent=data2.main.temp;
    
}

getWeather_2city();
setInterval(getWeather_2city,30000);





