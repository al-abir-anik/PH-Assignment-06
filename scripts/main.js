function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("card-container").classList.add("hidden");
  document.getElementById("likeCard-container").classList.add("hidden");
}
function hideLoading() {
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("card-container").classList.remove("hidden");
    document.getElementById("likeCard-container").classList.remove("hidden");
  }, 2000);
}

// active category button function
function activeCategory(categoryId) {
  const inactiveBtn = document.getElementsByClassName("btn-category");

  for (let i = 0; i < inactiveBtn.length; i++) {
    inactiveBtn[i].classList.remove(
      "rounded-3xl",
      "bg-[#0E7A81]/10",
      "border-[1.5px]",
      "border-[#0E7A81]"
    );
  }
  const activeBtn = document.getElementById(categoryId);
  activeBtn.classList.add(
    "rounded-3xl",
    "bg-[#0E7A81]/10",
    "border-[1.5px]",
    "border-[#0E7A81]"
  );
}

// Like Button Functionality
function likeButton(imageUrl) {
  const likecardContainer = document.getElementById("likeCard-container");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("w-full", "rounded-lg");

  likecardContainer.appendChild(img);
}

// Details button functionality
function detailsButton(urlId) {
  const modalContainer = document.getElementById("modal-container");

  modalContainer.innerHTML = `
    <img src="${urlId.image}" class="rounded-xl"/>
    <h3 class="text-xl font-bold text-[#131313]">${urlId.pet_name}</h3>
    <div>
      <div>
        <p class="text-base text-[#131313]/70"><i class="fa-regular fa-calendar-days"></i> Breed: ${urlId.breed}</p>
        <p class="text-base text-[#131313]/70"><i class="fa-regular fa-calendar-days"></i> Gender: ${urlId.gender}</p>
        <p class="text-base text-[#131313]/70"><i class="fa-regular fa-calendar-days"></i> Vaccinated status: ${urlId.vaccinated_status}</p>
      </div>
      <div>
        <p class="text-base text-[#131313]/70"><i class="fa-regular fa-calendar-days"></i> Birth: ${urlId.date_of_birth}</p>
        <p class="text-base text-[#131313]/70"><i class="fa-regular fa-calendar-days"></i> Price: ${urlId.price}</p>
      </div>
    </div>
    <hr class="w-full">
    <div>
      <h5 class="text-base font-semibold text-[#131313]">Details Information</h5>
      <p class="text-sm text-[#131313]/70">${urlId.pet_details}</p>
    </div>
  `;

  document.getElementById("pet-details-modal").showModal();
}


// Sorting Price low to high
// function sortPrice() {
//   const sortedData = price.sort((a, b) => a.price - b.price);
//     renderCards(sortedData);
// }
// renderCards(price);
