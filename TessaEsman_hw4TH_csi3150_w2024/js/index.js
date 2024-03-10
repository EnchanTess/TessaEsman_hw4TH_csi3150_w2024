// Provided sample data for car listings
const carData = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
];

// Function to apply filters and update car listings
function applyFilters() {
  const minYear = parseInt(document.getElementById("minYear").value);
  const maxYear = parseInt(document.getElementById("maxYear").value);
  const selectedMakes = Array.from(
    document.getElementById("make").selectedOptions
  ).map((option) => option.value);
  const maxMileage = parseInt(document.getElementById("maxMileage").value);
  const minPrice = parseInt(document.getElementById("minPrice").value);
  const maxPrice = parseInt(document.getElementById("maxPrice").value);
  const selectedColors = Array.from(
    document.getElementById("color").selectedOptions
  ).map((option) => option.value);

  const filteredCars = carData.filter(
    (car) =>
      car.year >= minYear &&
      car.year <= maxYear &&
      (selectedMakes.length === 0 ||
        selectedMakes.includes(car.make) ||
        selectedMakes.includes("")) &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (selectedColors.length === 0 ||
        selectedColors.includes(car.color) ||
        selectedColors.includes(""))
  );

  displayCarListings(filteredCars);
}

// Function to display car listings
function displayCarListings(cars) {
  const carListingsDiv = document.getElementById("carListings");
  carListingsDiv.innerHTML = "";

  if (cars.length === 0) {
    carListingsDiv.textContent =
      "No cars match the filter criteria. Please try again.";
    return;
  }

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    const image = document.createElement("img");
    image.src =
      "./assets/" +
      car.model.toLowerCase() +
      ".jpeg";
    image.alt = car.model;
    carCard.appendChild(image);

    const details = document.createElement("div");
    details.classList.add("car-details");
    details.innerHTML = `
      <h2>${car.year} ${car.make} ${car.model}</h2>
      <p>Mileage: ${car.mileage} miles</p>
      <p>Price: $${car.price}</p>
      <p>Color: ${car.color}</p>
    `;
    carCard.appendChild(details);

    carListingsDiv.appendChild(carCard);
  });
}

// Display car listings when the page loads
displayCarListings(carData);
