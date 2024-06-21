// src/firebaseFunctions.js

import { database } from './firebaseConfig';

// Create a new car
const addCar = async (carData) => {
  try {
    const carsRef = database.ref('rental-mobil-366a8-default-rtdb/data');
    const newCarRef = carsRef.push();
    await newCarRef.set(carData);
    console.log('Car added successfully');
    return newCarRef.key; // Return the ID of the newly added car
  } catch (error) {
    console.error('Error adding car:', error);
    throw error;
  }
};

// Read all cars
const getAllCars = async () => {
  try {
    const carsRef = database.ref('rental-mobil-366a8-default-rtdb/data');
    const snapshot = await carsRef.once('value');
    return snapshot.val();
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

// Update a car
const updateCar = async (carId, newData) => {
  try {
    const carRef = database.ref(`rental-mobil-366a8-default-rtdb/data/${carId}`);
    await carRef.update(newData);
    console.log('Car updated successfully');
  } catch (error) {
    console.error('Error updating car:', error);
    throw error;
  }
};

// Delete a car
const deleteCar = async (carId) => {
  try {
    const carRef = database.ref(`rental-mobil-366a8-default-rtdb/data/${carId}`);
    await carRef.remove();
    console.log('Car deleted successfully');
  } catch (error) {
    console.error('Error deleting car:', error);
    throw error;
  }
};

export { addCar, getAllCars, updateCar, deleteCar };

