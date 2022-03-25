async function getQuote(){
    const quoteData = await fetch("https://quotes.rest/qod.json");

      const response = await quoteData.json();

    document.getElementById('quoteText').textContent=response.contents.quotes[0].quote;
    console.log(response.contents.quotes[0].quote);  
    
    


   
}

getQuote();
setInterval(getQuote,600000);
