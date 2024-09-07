
document.querySelector("#userName").innerHTML = localStorage.getItem('userName')


document.querySelector("#logBtn").addEventListener("click",function(){
    localStorage.removeItem('userName')
})


async function getRecipe(){
    let res = await fetch('https://forkify-api.herokuapp.com/api/search?q=corn')
    let data = await res.json()
    let recipes = data.recipes
  
    var recipesContainer = document.querySelector("#recipes");
    recipesContainer.innerHTML = '';
    recipes.forEach((recipe)=> {
      var html = `
        <div class="col-lg-4 d-flex align-items-stretch ">
            <div class="card mb-4 shadow-sm ">
                <img src="${recipe.image_url}" class="card-img-top w-100 test" alt="${recipe.title}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">Publisher: ${recipe.publisher}</p>
                    <a href="${recipe.source_url}" target="_blank" class="btn btn-primary">View Recipe</a>
                </div>
            </div>
        </div>`;
      recipesContainer.innerHTML += html;
    });
  }
    
    
  
  getRecipe();