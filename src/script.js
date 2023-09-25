$(document).ready(function(event){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});
 

/* Приклад з https://newsapi.org/docs/endpoints/top-headlines
let url = 'https://newsapi.org/v2/top-headlines/sources?' +
          'sources=category'+
          'language=en'+
          'country=ua&' +
          'apiKey=19621247d3984cfd93c596cba9eb69bc';
let req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    }) */

/* 
const ulHeaderList = document.querySelector('#headerList');
const newsButton = document.querySelector('#headerNews');
console.log(newsButton); 

async function loadNews(e){

  const url = 'https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=19621247d3984cfd93c596cba9eb69bc';
  
  let response = await fetch(url, {
  method: 'GET',
  
});

const responsResult = await response.json();
//console.log(responsResult);  

if(response.ok) {
  getNews(responsResult);
} 
  else{
    return responsResult.message;
  }
} //Отримали відповідь на запит



newsButton.addEventListener('click',getNews, getNews.innerHTML = '');

//e.preventDefault();


function getNews(data){
  if(data[1] === Math.ceil(data[2] / data[3])) { 
    return "We're sorry, but you've reached the end of search results.";
  }
  
    if (data[0].length === 0) {
      loadMoreBtn.classList.remove('is-hidden')
  } 
  const newsMarcup = data[0].map({
    title, name, content
  })  
    return `<div class="news" >
      <h2>${title}</h2>
      <p>${content}</p> 
      <p>${name}</p> 
    </div>`;
  }.join('');



 if(newsButton){
  loadNews();
}  */