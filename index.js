var searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(e){
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            var res = JSON.parse(xhttp.responseText);
            var imageData = res.results.map(function(item){
                return item;
            })

            var wrapper = document.getElementById('wrapper');
            wrapper.classList.remove('wrapper-vh')


            var container = document.getElementById('image-divs');
            container.innerHTML = '';

            var resultsContainer = document.getElementById('show-results')
            resultsContainer.innerHTML = '';
            var showResults = document.createElement('div');
            showResults.classList.add('show-results');
            showResults.innerHTML = `
                <h2>${`Showing results for: `} <span>${textValue.charAt(0).toUpperCase() + textValue.slice(1)}</span></h2>
            `
            resultsContainer.appendChild(showResults);

            imageData.forEach(function(image){
                console.log(image)
                var imageDiv = document.createElement('div');
                imageDiv.innerHTML = `
                    <img src=${image.urls.regular}>
                `
                container.appendChild(imageDiv);
            })
            wrapper.appendChild(resultsContainer);
            wrapper.appendChild(container);
        }
    };

var textValue = document.getElementById('search-bar').value;        
xhttp.open("GET", `https://api.unsplash.com/search/photos?per_page=30&page=1&query=${textValue}&client_id=58VkTwarYrsNBXEmBb2vMluNRjrK4agI7Rnk9jrBsRY`, true);
xhttp.setRequestHeader('Authorization', '58VkTwarYrsNBXEmBb2vMluNRjrK4agI7Rnk9jrBsRY');
xhttp.send();
})
