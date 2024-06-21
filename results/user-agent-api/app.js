import { getAllCars } from './src/firebaseFunctions';

const carListElement = document.getElementById('carList');

getAllCars()
  .then((cars) => {
    cars.forEach((car) => {
      const carCard = createCarCard(car);
      carListElement.appendChild(carCard);
    });
  })
  .catch((error) => {
    console.error('Error fetching cars:', error);
  });

function createCarCard(car) {
  const card = document.createElement('div');
  card.classList.add('max-w-sm', 'rounded', 'overflow-hidden', 'shadow-lg', 'm-4');

  const image = document.createElement('img');
  image.classList.add('w-full');
  image.src = car.image; // Assuming 'image' is the URL field in your data
  image.alt = `${car.brand} ${car.model}`;
  card.appendChild(image);

  const content = document.createElement('div');
  content.classList.add('px-6', 'py-4');

  const title = document.createElement('div');
  title.classList.add('font-bold', 'text-xl', 'mb-2');
  title.textContent = `${car.brand} ${car.model}`;

  const details = document.createElement('p');
  details.classList.add('text-gray-700', 'text-base');
  details.textContent = `Year: ${car.year} | Capacity: ${car.capacity}`;

  const driverDetails = document.createElement('p');
  driverDetails.classList.add('text-gray-700', 'text-base');
  driverDetails.textContent = `Driver: ${car.driver.name} (${car.driver.experience})`;

  const rentcarDetails = document.createElement('p');
  rentcarDetails.classList.add('text-gray-700', 'text-base');
  rentcarDetails.textContent = `Rentcar: ${car.rentcar.name} (${car.rentcar.contact})`;

  content.appendChild(title);
  content.appendChild(details);
  content.appendChild(driverDetails);
  content.appendChild(rentcarDetails);

  card.appendChild(content);

  return card;
}

