interface RoomCardProps {
  type: string;
  price: number;
  capacity: number;
  image: string;
}

export default function RoomCard({ type, price, capacity, image }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={image} alt={type} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
        <div className="mt-4 space-y-2">
          <p className="text-gray-600">Capacity: {capacity} Person</p>
          <p className="text-2xl font-bold text-blue-600">NPR {price}/month</p>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
  <a
    href="https://wa.me/9779801867144?text=Hi%20there!%20I%20am%20interested%20in%20hostel%20booking."
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full text-white text-center"
  >
    Book Now
  </a>
</button>

      </div>
    </div>
  );
}