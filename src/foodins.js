const ins = document.querySelector("#foodForm");        //ins=instructions

var searchValue=document.getElementsByClassName("foodForm").value;
const getins = async(searchValue) => {                  //set searchValue on getins parameter

  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        let div = document.createElement("div");
        div.setAttribute("id", "conditions");
        
        let ins = document.createElement("div");
        let insNode = document.createTextNode('Instructions:    '+data.meals[0].strInstructions);
        ins.appendChild(insNode);

        div.appendChild(ins);       
        
        document.querySelector(".instructions").appendChild(div);               //print in class:instructions in food.html

    }).catch(err => console.log(err))}

document.addEventListener("DOMContentLoaded", (e) => {
    ins.addEventListener("submit", (e) => {                     
        e.preventDefault();
        if(document.querySelector("#name").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector(".instructions").removeChild(conditionsDiv);
            }
            getins(document.getElementById("name").value);          
        }else{
            console.log("You must provide a food");
        }
    })
})