const foodForm2 = document.querySelector("#foodForm");

var searchValue=document.getElementsByClassName("foodForm").value;
const getFood = async(searchValue) => {
 
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        let div = document.createElement("div");
        div.setAttribute("id", "conditions");

        let food = document.createElement("div");
        let foodNode = document.createTextNode('Menu: '+data.meals[0].strMeal);
        food.appendChild(foodNode);

        div.appendChild(food);       
        
        document.querySelector(".food").appendChild(div);

    }).catch(err => console.log(err))}

document.addEventListener("DOMContentLoaded", (e) => {
    foodForm2.addEventListener("submit", (e) => {
        e.preventDefault();
        if(document.querySelector("#name").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector(".food").removeChild(conditionsDiv);
            }
            getFood(document.getElementById("name").value);
        }else{
            console.log("You must provide a food");
        }
    })
})