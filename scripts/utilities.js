

// Categories button function
function createButtons(buttonData) {
  const categories = document.getElementById("btn-categories");

  buttonData.forEach((element) => {
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
        <button id='btn-${element.id}' onclick="activeCategory('btn-${
      element.id
    }'); loadCategoryCards('${element.category.toLowerCase()}')" class="btn-category btn bg-transparent border border-[#0E7A81]/15 w-auto h-auto px-8 py-3 flex">
          <img class="w-10" src='${element.category_icon}'>
          <p class="text-xl font-bold text-[#131313]">${element.category}</p>
        </button>
    `;
    categories.appendChild(buttonDiv);
  });
}




// Load Cards function
function createCards(cardData) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  showLoading();
  hideLoading();

  setTimeout(() => {
    if (cardData == 0) {
      cardContainer.innerHTML = `
        <div class="w-2/3 h-auto mx-auto space-y-5 py-8">
          <img src="images/error.webp" class="w-10/12 mx-auto">
          <h3 class="text-3xl font-bold text-center text-[#131313]">No Information Available</h3>
          <p class="text-base text-[#131313]/70 text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
      </div>
      `;
      return;
    }

    cardData.forEach((element) => {
      const card = document.createElement("div");
      // card.id = `button-${element.petId}`;
      card.classList.add(
        "card",
        "bg-transparent",
        "border",
        "border-[#0E7A81]/15",
        "h-auto",
        "p-4"
      );
      card.innerHTML = `
      <figure class="">
        <img src="${element.image}" class="rounded-xl"/>
      </figure>
  
      <div class="h-auto space-y-1">
        <h4 class="text-xl font-bold text-[#131313] pt-2">${
          element.pet_name
        }</h4>
        <p class="text-base text-[#131313]/70">
          <i class="fa-solid fa-paw"></i>
          Breed:&nbsp;&nbsp; ${
            element.breed != null && element.breed != undefined
              ? element.breed
              : "Not Given"
          }
        </p>
        <p class="text-base text-[#131313]/70">
          <i class="fa-regular fa-calendar-days"></i>
          Birth:&nbsp;&nbsp; ${
            element.date_of_birth != null && element.date_of_birth != undefined
              ? element.date_of_birth
              : "Not Given"
          }
        </p>
        <p class="text-base text-[#131313]/70">
          <i class="fa-solid fa-venus"></i>
          Gender:&nbsp;&nbsp; ${
            element.gender != null && element.gender != undefined
              ? element.gender
              : "Not Given"
          }
        </p>
        <p class="text-base text-[#131313]/70">
          <i class="fa-solid fa-dollar-sign"></i>
          Price:&nbsp;&nbsp; ${
            element.price != null && element.price != undefined
              ? element.price
              : "Not Given"
          }
        </p>
      </div>
      
      <hr class="w-full my-3">
  
      <div class="flex justify-between">
        <button onclick="likeButton('${
          element.image
        }')" class="btn btn-outline btn-accent border border-[#0E7A81]/15">
          <i class="fa-solid fa-thumbs-up text-lg"></i>
        </button>
        <button onclick="adoptButton()" class="btn btn-outline btn-accent border border-[#0E7A81]/15 font-bold text-base">
          Adopt
        </button>
        <button onclick="loadPetDetails('${
          element.petId
        }')" class="btn btn-outline btn-accent border border-[#0E7A81]/15 font-bold text-base">
          Details
        </button>
      </div>  
    `;
      cardContainer.appendChild(card);
    });
  }, 2000);
}
