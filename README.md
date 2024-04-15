# Online News 

## Setup Project
1. Clone the Repository and open it on Visual Studio Code.
2. Create Your API Key from [https://newsapi.org/](https://newsapi.org/) by Creating or Login into the account.
3. After Getting Your API Key just open `src/Components/Home/News.jsx` file and add **API Key**.
```JavaScript
// Replace (API_KEY) with your API Key and don't forgot to remove Brackets().
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${items}&apiKey=(API_KEY)`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
```
5. After that Open Integrated Terminal and just type command `npm install`.
6. And Then run the command `npm start` in terminal.

## Screenshot
![online_news](https://github.com/nidheepatel02/Online_News_React/assets/108716025/d0541980-3fe8-4ce4-8652-1192f9129333)
