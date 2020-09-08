import IArticle from '../models/IArticles';

export function fetchAndShowArticles(){
    fetch(`http://localhost:4201/articles`)
        .then(function(response: Response){
            return response.json()
        })
        .then(function(articles: IArticle[]){
            console.log(articles)
        
            const container = <HTMLElement> document.querySelector('div.container')
            articles.forEach(function(article) {
                container.innerHTML +=
                    `<div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${article.imageUrl.url}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.abstract}</p>
                            </div>
                        </div>
                    </div>`
                })

        })
        .catch(function(error){
            console.log(error.message)
        })
}