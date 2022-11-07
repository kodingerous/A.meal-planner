const ingredients = document.querySelector("#foodForm");

var searchValue=document.getElementsByClassName("foodForm").value;
const getingredients = async(searchValue) => {
 
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        let div = document.createElement("div");
        div.setAttribute("id", "conditions");

        let ingredients = document.createElement("div");
        let ingredientsNode = document.createTextNode('1. '+data.meals[0].strIngredient1+' - '+data.meals[0].strMeasure1);
        ingredients.appendChild(ingredientsNode);
        
        let ingredients2 = document.createElement("div");
        let ingredients2Node = document.createTextNode('2. '+data.meals[0].strIngredient2+' - '+data.meals[0].strMeasure2);
        ingredients2.appendChild(ingredients2Node);

        let ingredients3 = document.createElement("div");
        let ingredients3Node = document.createTextNode('3. '+data.meals[0].strIngredient3+' - '+data.meals[0].strMeasure3);
        ingredients3.appendChild(ingredients3Node);

        let ingredients4 = document.createElement("div");
        let ingredients4Node = document.createTextNode('4. '+data.meals[0].strIngredient4+' - '+data.meals[0].strMeasure4);
        ingredients4.appendChild(ingredients4Node);

        let ingredients5 = document.createElement("div");
        let ingredients5Node = document.createTextNode('5. '+data.meals[0].strIngredient5+' - '+data.meals[0].strMeasure5);
        ingredients5.appendChild(ingredients5Node);
        
        let ingredients6 = document.createElement("div");
        let ingredients6Node = document.createTextNode('6. '+data.meals[0].strIngredient6+' - '+data.meals[0].strMeasure6);
        ingredients6.appendChild(ingredients6Node);

        let ingredients7 = document.createElement("div");
        let ingredients7Node = document.createTextNode('7. '+data.meals[0].strIngredient7+' - '+data.meals[0].strMeasure7);
        ingredients7.appendChild(ingredients7Node);

        let ingredients8 = document.createElement("div");
        let ingredients8Node = document.createTextNode('8. '+data.meals[0].strIngredient8+' - '+data.meals[0].strMeasure8);
        ingredients8.appendChild(ingredients8Node);

        let ingredients9 = document.createElement("div");
        let ingredients9Node = document.createTextNode('9. '+data.meals[0].strIngredient9+' - '+data.meals[0].strMeasure9);
        ingredients9.appendChild(ingredients9Node);

        let ingredients10 = document.createElement("div");
        let ingredients10Node = document.createTextNode('10. '+data.meals[0].strIngredient10+' - '+data.meals[0].strMeasure10);
        ingredients10.appendChild(ingredients10Node);

        let ingredients11 = document.createElement("div");
        let ingredients11Node = document.createTextNode('11. '+data.meals[0].strIngredient11+' - '+data.meals[0].strMeasure11);
        ingredients11.appendChild(ingredients11Node);

        let ingredients12 = document.createElement("div");
        let ingredients12Node = document.createTextNode('12. '+data.meals[0].strIngredient12+' - '+data.meals[0].strMeasure12);
        ingredients12.appendChild(ingredients12Node);

        let ingredients13 = document.createElement("div");
        let ingredients13Node = document.createTextNode('13. '+data.meals[0].strIngredient13+' - '+data.meals[0].strMeasure13);
        ingredients13.appendChild(ingredients13Node);

        let ingredients14 = document.createElement("div");
        let ingredients14Node = document.createTextNode('14. '+data.meals[0].strIngredient14+' - '+data.meals[0].strMeasure14);
        ingredients14.appendChild(ingredients14Node);

        let ingredients15 = document.createElement("div");
        let ingredients15Node = document.createTextNode('15. '+data.meals[0].strIngredient15+' - '+data.meals[0].strMeasure15);
        ingredients15.appendChild(ingredients15Node);

        div.appendChild(ingredients);               //ingredients are added as well with their measurements
        div.appendChild(ingredients2);
        div.appendChild(ingredients3);
        div.appendChild(ingredients4);
        div.appendChild(ingredients5);
        div.appendChild(ingredients6);
        div.appendChild(ingredients7);
        div.appendChild(ingredients8);
        div.appendChild(ingredients9);
        div.appendChild(ingredients10);
        div.appendChild(ingredients11);
        div.appendChild(ingredients12);
        div.appendChild(ingredients13);
        div.appendChild(ingredients14);
        div.appendChild(ingredients15);

        document.querySelector(".ingredients").appendChild(div);            //print in class:ingredients in food.html

    }).catch(err => console.log(err))}

document.addEventListener("DOMContentLoaded", (e) => {
    ingredients.addEventListener("submit", (e) => {
        e.preventDefault();
        if(document.querySelector("#name").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector(".ingredients").removeChild(conditionsDiv);
            }
            getingredients(document.getElementById("name").value);
        }else{
            console.log("You must provide a food");
        }
    })
})