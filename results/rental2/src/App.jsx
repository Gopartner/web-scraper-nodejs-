import React from 'react';
import CarCard from './components/CarCard';
import toyotaCalyaImage from './assets/mobil/avanza.jpg';
import daihatsuAylaImage from './assets/mobil/avanza.jpg';
import toyotaAgyaImage from './assets/mobil/avanza.jpg';
import daihatsuSigraImage from './assets/mobil/avanza.jpg';

const cars = [
  {
    name: "Toyota Calya",
    imageUrl: toyotaCalyaImage,
    price: "194.000",
    providers: 6,
    seats: 6,
    baggage: 2,
    rating: "+1"
  },
  {
    name: "Daihatsu Ayla",
    imageUrl: daihatsuAylaImage,
    price: "199.000",
    providers: 4,
    seats: 4,
    baggage: 2,
    rating: "+2"
  },
  {
    name: "Toyota Agya",
    imageUrl: toyotaAgyaImage,
    price: "200.000",
    providers: 4,
    seats: 4,
    baggage: 2,
    rating: "+1"
  },
  {
    name: "Daihatsu Sigra",
    imageUrl: daihatsuSigraImage,
    price: "210.000",
    providers: 2,
    seats: 6,
    baggage: 2,
    rating: "+2"
  }
];

const App = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Mobil di Surabaya</h1>
    <div className="flex space-x-4 mb-4">
      <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-md">
        Dengan Supir
      </button>
      <button className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-md">
        Lepas Kunci
      </button>
    </div>
    <div className="grid grid-cols-1 gap-4">
      {cars.map((car) => (
        <CarCard key={car.name} car={car} />
      ))}
    </div>
  </div>
);

export default App;

