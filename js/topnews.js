
const apiKey1='294749526c424fe6bb4feb6f396b4372';

const api_url_news='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=294749526c424fe6bb4feb6f396b4372';

const apiKey='c4f081a4b0b89eeeedaae32d42f340f6';

const api_url_media='https://api.mediastack.com/v1/news?access_key='+apiKey+'&countries=us,au&sources=en,-fr';



async function getNews(){
    // const response= await fetch(api_url_news);
    // const data= await response.json();  
    const response= await fetch(api_url_media);
    const media_data= await response.json(); 

    console.log(media_data.data[0].title);
    console.log(media_data.data[0].description);
    //  console.log(data.articles[0].title);
    // console.log(data.articles[0].description);     

    // console.log(data.articles[1].title);
    // console.log(data.articles[1].description);
    // console.log(data.main.temp);
    
    // document.getElementById('newstitle1').textContent=data.articles[0].title;
    // document.getElementById('newstext1').textContent=data.articles[0].description;

    // document.getElementById('newstitle2').textContent=data.articles[1].title;
    // document.getElementById('newstext2').textContent=data.articles[1].description;

    document.getElementById('newstitle3').textContent=media_data.data[0].title;
    document.getElementById('newstext3').textContent=media_data.data[0].description;
    
}

getNews();
// setInterval(getNews,30000);