import { addCar, getAllCars, updateCar, deleteCar } from './firebaseFunctions';

// Contoh penggunaan addCar
const newCarData = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2023,
  capacity: 5,
  // tambahkan informasi driver dan rentcar sesuai struktur yang sudah ditetapkan sebelumnya
};
addCar(newCarData)
  .then((carId) => {
    console.log(`New car added with ID: ${carId}`);
  })
  .catch((error) => {
    console.error('Error adding car:', error);
  });

// Contoh penggunaan getAllCars
getAllCars()
  .then((cars) => {
    console.log('All cars:', cars);
  })
  .catch((error) => {
    console.error('Error fetching cars:', error);
  });

// Contoh penggunaan updateCar
const carIdToUpdate = 'your_car_id_here';
const updatedCarData = {
  model: 'Corolla',
  year: 2022,
};
updateCar(carIdToUpdate, updatedCarData)
  .then(() => {
    console.log('Car updated successfully');
  })
  .catch((error) => {
    console.error('Error updating car:', error);
  });

// Contoh penggunaan deleteCar
const carIdToDelete = 'your_car_id_here';
deleteCar(carIdToDelete)
  .then(() => {
    console.log('Car deleted successfully');
  })
  .catch((error) => {
    console.error('Error deleting car:', error);
  });

