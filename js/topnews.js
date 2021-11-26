const api_url_news='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=294749526c424fe6bb4feb6f396b4372';



async function getNews(){
    const response= await fetch(api_url_news);
    const data= await response.json();     
          

    console.log(data.articles[1].title);
    // console.log(data.articles[1].description);
    // console.log(data.main.temp);
    
    document.getElementById('newstitle1').textContent=data.articles[0].title;
    document.getElementById('newstext1').textContent=data.articles[0].description;

    document.getElementById('newstitle2').textContent=data.articles[1].title;
    document.getElementById('newstext2').textContent=data.articles[1].description;

    document.getElementById('newstitle3').textContent=data.articles[2].title;
    document.getElementById('newstext3').textContent=data.articles[2].description;
    
}

getNews();
setInterval(getNews,200000);