const cat = document.querySelector("#foodForm");        // cat=category

var searchValue=document.getElementsByClassName("foodForm").value;
const getcat = async(searchValue) => {                  // assign searchValue on getcat parameter

  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        let div = document.createElement("div");
        div.setAttribute("id", "conditions");
        
        let cat = document.createElement("div");
        let catNode = document.createTextNode('Category:    '+data.meals[0].strCategory);
        cat.appendChild(catNode);

        div.appendChild(cat);       
        
        document.querySelector(".category").appendChild(div);               //print in class:category in food.html

    }).catch(err => console.log(err))}

document.addEventListener("DOMContentLoaded", (e) => {
    cat.addEventListener("submit", (e) => {                     
        e.preventDefault();
        if(document.querySelector("#name").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector(".category").removeChild(conditionsDiv);
            }
            getcat(document.getElementById("name").value);          
        }else{
            console.log("You must provide a food");
        }
    })
})