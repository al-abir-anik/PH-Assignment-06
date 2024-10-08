

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