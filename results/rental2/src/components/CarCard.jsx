import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const CarCard = ({ car }) => (
  <div className="flex p-4 bg-white shadow-md rounded-md">
    <div className="w-2/5 relative"> {/* 40% lebar untuk gambar */}
      <img className="w-full h-32 object-cover rounded-md" src={car.imageUrl} alt={car.name} />
      <span className="absolute top-2 left-2 text-sm font-semibold bg-white p-1 rounded"> {/* Ukuran teks diperkecil */}
        {car.name}
      </span>
    </div>
    <div className="w-3/5 ml-4"> {/* 60% lebar untuk keterangan */}
      <div className="flex justify-between items-center">
        <div className="text-blue-500 font-bold">Best of the Month</div>
        <div className="text-right text-sm text-gray-500">{car.rating}</div>
      </div>
      <div className="text-red-500 font-bold mt-1">Dari Rp {car.price}/hari</div>
      <div className="flex items-center mt-2 space-x-2">
        <span className="text-gray-500">{car.providers} penyedia tersedia</span>
        <FontAwesomeIcon icon={faChair} />
        <span>{car.seats}</span>
        <FontAwesomeIcon icon={faBriefcase} />
        <span>{car.baggage}</span>
      </div>
    </div>
  </div>
);

export default CarCard;

