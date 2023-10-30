
async function fetchFact() {
    
    const ip = document.getElementById("input").value;                          //getting the input value
  if(ip.trim().length === 0){
    alert("Please enter a valid text format 😊😊😊");                         //throw error if input is not a number or invalid

  }else{
    let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ip}`;    //inserting input in api and storing
try{
    const response = await fetch(apiUrl);                      //fetch url return promise for that await is used to handle promise and await must used in async function

      if (!response.ok) {
        throw new Error('Network response was not ok');        //throw error
      }

      const data = await response.json();                     //converting readablestream to json

    //fetching and storing the datas

const strname=data.meals[0].strMeal;                      

const veg=data.meals[0].strCategory;
const area=data.meals[0].strArea;
const ingredient=data.meals[0].strIngredient1;
const instructions=data.meals[0].strInstructions;

const link=data.meals[0].strYoutube;


const foodname=document.getElementById("name");                 //getting name div and storing in inst 
foodname.innerHTML+="NAME : " +strname;                          //inserting fetched dishname here



const category=document.getElementById("cat");                  //getting cat div and storing in inst 
category.innerHTML+="Vegitarian : "+veg;                         //inserting fetched veg here


const areae=document.getElementById("area");                    //getting area div and storing in inst 
areae.innerHTML+="Style : "+area;                                //inserting fetched style here

const ingrd=document.getElementById("ingredient");               //getting ingredient div and storing in inst 
ingrd.innerHTML+="Main Ingredient : "+ingredient;               //inserting fetched ingredient here

const inst=document.getElementById("instructions");           //getting instructions div
inst.innerHTML+="Instructions : "+instructions;              //inserting fetched instructions here



const dishLink=document.getElementById("link");             //getting link id div
const createLink = document.createElement("a");             //creating anchor tag
createLink.href = link;                                     // Set the href attribute for the link
createLink.innerHTML ="Watch on Youtube : "+ link;          // Text for the link
dishLink.innerHTML = "";                                   // Clear previous content
dishLink.appendChild(createLink);





const imageContainer = document.getElementById("img");                //getting img div
const imageUrl = data.meals[0].strMealThumb;                          // fetching imageurl and store in imageurl variable

if (imageUrl) {
    const imageElement = document.createElement("img");                 // create an img tag
    imageElement.src = imageUrl;                                        //inserting imgurl in img tag
    imageElement.alt = "Meal Image";                                    // Add an alt attribute for accessibility
    imageElement.className="img-fluid"                                  //add an class atribute 
    imageContainer.innerHTML = "";                                      // Clear previous content
    imageContainer.appendChild(imageElement);
}



        }
        catch(error) {
            // Handle errors, e.g., network errors or parsing errors
            alert('Error:' + error);
        };
    }
}



const btn = document.getElementById("getValue");                   //getting button here
btn.addEventListener("click",fetchFact);                           // event call for button click



