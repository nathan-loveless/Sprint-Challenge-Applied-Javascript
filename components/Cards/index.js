// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {

    const articles = document.querySelector('.cards-container');
    console.log(response.data.articles);
    response.data.articles.bootstrap.forEach(element => { articles.appendChild(createArticles(element, articles));});
    response.data.articles.javascript.forEach(element => { articles.appendChild(createArticles(element, articles));});
    response.data.articles.jquery.forEach(element => { articles.appendChild(createArticles(element, articles));});
    response.data.articles.node.forEach(element => { articles.appendChild(createArticles(element, articles));});
    response.data.articles.technology.forEach(element => { articles.appendChild(createArticles(element, articles));});    
})    
.catch(err => {
  console.log(`Error: ${err}`);
});

function createArticles(data, parent)
{
            const comp = document.createElement('div');
            const compHeadline = document.createElement('div');
            const compAuthor = document.createElement('div');
            const compImgContainer = document.createElement('div');
            const compImg = document.createElement('img');
            const compName = document.createElement('span');

            comp.appendChild(compHeadline);
            comp.appendChild(compAuthor);
            compAuthor.appendChild(compImgContainer);
            compImgContainer.appendChild(compImg);
            compAuthor.appendChild(compName);
            comp.appendChild(compAuthor);

            comp.classList.add('card');
            compHeadline.classList.add('headline');
            compAuthor.classList.add('author');
            compImgContainer.classList.add('img-container');
            compImg.setAttribute('src', data.authorPhoto);

            compHeadline.textContent = data.headline;
            compName.textContent =  'By ' + data.authorName;

            return comp;         
}
