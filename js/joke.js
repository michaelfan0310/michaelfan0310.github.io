// function get_joke_of_the_day() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
// 	 if (this.readyState == 4 && this.status == 200) {
// 	     // Access the result here
//          const data=this.responseText;
//          const jokeText=data;
// 	     document.getElementById('newstitle2').textContent=jokeText;
// 	 }
//     };
//     xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
//     xhttp.send();
// }

// get_joke_of_the_day();


// const api_joke='https://markmscott-slapbot-v1.p.rapidapi.com/Hairline';


async function getJoke(){
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });
      const response = await jokeData.json();

    document.getElementById('newstitle2').textContent=response.joke;
    // console.log(data.articles[0].description);     
    
    // console.log(data.articles[1].title);
    // console.log(data.articles[1].description);
 
    
    // document.getElementById('newstitle1').textContent=data.articles[0].title;
    // document.getElementById('newstext1').textContent=data.articles[0].description;

   
}

getJoke();
setInterval(getJoke,180000);
