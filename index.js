document.addEventListener("DOMContentLoaded", function () {
    main();
});
const ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "dishes /gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "dishes /kojiro.jpg", rating: 4.2, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "dishes /naruto.jpg" , rating: 4, comment: "Liked it!"},
    { id: 4, name: "Nirvana Ramen", restaurant: "Menya", image: "dishes /nirvana.jpg", rating: 4.8, comment: "Good dinning experience!" },
    { id: 5, name: "Shoyu Ramen", restaurant: "Menya", image: "dishes /shoyu.jpg", rating: 4.5, comment: "Beautiful presentation!" },
 ];


 
 const ramenMenu = document.getElementById("ramen-menu");
 const ramenDetail = document.getElementById("ramens");
 const ramenForm = document.getElementById("new-ramen-form");
 
 

 function displayRamens() {

     ramens.forEach(ramen => {
         const img = document.createElement("img"); 
         img.src = ramen.image;
         img.alt = ramen.name;
         img.addEventListener("click", () => handleClick(ramen));
         ramenMenu.appendChild(img);
     });
 }
 

 function handleClick(ramen) { 

     document.getElementById("ramen-name").textContent = ramen.name;
     document.getElementById("ramen-image").src = ramen.image;
     document.getElementById("ramen-restaurant").textContent = "Restaurant: " + ramen.restaurant;
     document.getElementById("ramen-rating").textContent = "Rating: " + ramen.rating + "/5";
     document.getElementById("ramen-comment").textContent = "Comment: " + ramen.comment;
 }
 

 function addSubmitListener() {
     ramenForm.addEventListener("submit", function (event) {
         event.preventDefault(); 
       
         const name = document.getElementById("new-name").value;
         const restaurant = document.getElementById("new-restaurant").value;
         const image = document.getElementById("new-image").value;
         const rating = document.getElementById("new-rating").value;
         const comment = document.getElementById("new-comment").value;
 
         
         if (!name || !restaurant || !image || !rating || !comment) {
             alert("!Please fill out this field.");
             return NewRamen;
         }
 
         
         const newRamen = { name, restaurant, image, rating, comment };
         ramens.push(newRamen); 
 
         
         const img = document.createElement("img");
         img.src = image;
         img.alt = name;
        
         img.addEventListener("click", () => handleClick(newRamen));
 
         ramenMenu.appendChild(img);
 
         handleClick(newRamen);

     });
 }
 

 function main() {
     displayRamens();
     addSubmitListener();
 
   
     if (ramens.length > 0) {
         handleClick(ramens[0]);
     }
 }



 