

// Fetch All Pet Categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((response) => response.json())
    .then((data) => createButtons(data.categories))
    .catch((error) => console.error("Fetching data:", error));
};
loadCategories();


// Fetch All Pets
const loadAllCards = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((response) => response.json())
    .then((data) => createCards(data.pets))
    .catch((error) => console.error("Fetching data:", error));   
}
loadAllCards();


// Fetch Pets by Category
const loadCategoryCards = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryId}`)
  .then(response => response.json())
  .then(data => createCards(data.data))
  .catch(error => console.error("Fetching data:", error));
}


// Fetch pet details by Id
const loadPetDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
  .then(response => response.json())
  .then(data => detailsButton(data.petData))
  .catch(error => console.error("Fetching data:", error));
}



// Sorting
const sortCardsByPrice = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
  .then((response) => response.json())
  .then((data) => {
    const sortedPets = data.pets.sort((a, b) => b.price - a.price);
    createCards(sortedPets);
  })
  .catch((error) => console.error("Fetching data:", error));   
}