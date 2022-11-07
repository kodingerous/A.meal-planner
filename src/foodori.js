const ori = document.querySelector("#foodForm");        //ori=origins

var searchValue=document.getElementsByClassName("foodForm").value;
const getori = async(searchValue) => {                  

  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        let div = document.createElement("div");
        div.setAttribute("id", "conditions");
        
        let ori = document.createElement("div");
        let oriNode = document.createTextNode('Origin country:  '+data.meals[0].strArea);
        ori.appendChild(oriNode);

        div.appendChild(ori);       
        
        document.querySelector(".ori").appendChild(div);               //print in class:ori in food.html

    }).catch(err => console.log(err))}

document.addEventListener("DOMContentLoaded", (e) => {
    ori.addEventListener("submit", (e) => {                     
        e.preventDefault();
        if(document.querySelector("#name").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector(".ori").removeChild(conditionsDiv);
            }
            getori(document.getElementById("name").value);          
        }else{
            console.log("You must provide a food");
        }
    })
})