const api_iss_url="https://api.wheretheiss.at/v1/satellites/25544";


async function getIss(){
    const response= await fetch(api_iss_url);
    const data_iss= await response.json();  
    
    //  console.log(data_iss.latitude);
    // console.log(data_iss.longitude);     

     document.getElementById('IssPosition1').textContent=data_iss.latitude+'°';
    document.getElementById('IssPosition2').textContent=data_iss.longitude+'°';
    
}

getIss();
setInterval(getIss,3000);

const img2=document.querySelector('#sun-position');
    img2.src='image/sun.gif';

    // https://v2.jokeapi.dev/joke/Programming,Christmas?contains=debugging&amount=4