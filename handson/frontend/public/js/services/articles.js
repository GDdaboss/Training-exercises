export function fetchAndShowArticles() {
    fetch("http://localhost:4201/articles")
        .then(function (response) {
        return response.json();
    })
        .then(function (articles) {
        console.log(articles);
        var container = document.querySelector('div.container');
        articles.forEach(function (article) {
            container.innerHTML +=
                "<div class=\"col-lg-4 col-md-6 col-sm-12\">\n                        <div class=\"card\" style=\"width: 18rem;\">\n                            <img class=\"card-img-top\" src=\"" + article.imageUrl.url + "\" alt=\"Card image cap\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\">" + article.title + "</h5>\n                                <p class=\"card-text\">" + article.abstract + "</p>\n                            </div>\n                        </div>\n                    </div>";
        });
    })
        .catch(function (error) {
        console.log(error.message);
    });
}
