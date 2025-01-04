import { Bed, Droplet, Shirt, Sparkles, UtensilsCrossed, Wifi } from 'lucide-react';
import ContactSection from './components/ContactSection';
import FacilityCard from './components/FacilityCard';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ReviewsSection from './components/ReviewsSection';
import RoomCard from './components/RoomCard';
import RulesSection from './components/RulesSection';

function App() {
  const rooms = [
    {
      type: 'Single Seater',
      price: 14000,
      capacity: 1,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000',
    },
    {
      type: 'Two Seater',
      price: 12000,
      capacity: 2,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000',
    },
    {
      type: 'Three Seater',
      price: 11500,
      capacity: 3,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000',
    },
    {
      type: 'Four Seater',
      price: 10500,
      capacity: 4,
      image: 'https://images.unsplash.com/photo-1626265774643-f1943311a86b?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  const facilities = [
    {
      icon: Wifi,
      title: '24/7 High-Speed WiFi',
      description: 'Stay connected with unlimited high-speed internet access',
    },
    {
      icon: Droplet,
      title: 'Water Supply',
      description: '24-hour water supply with hot water facility through geysers',
    },
    {
      icon: UtensilsCrossed,
      title: 'Healthy Food',
      description: 'Nutritious meals with varied menu including chicken, eggs, and more',
    },
    {
      icon: Bed,
      title: 'Comfortable Living',
      description: 'Furnished beds with complete bedding, study table, and storage',
    },
    {
      icon: Shirt,
      title: 'Laundry Service',
      description: 'Unlimited laundry service twice a week',
    },
    {
      icon: Sparkles,
      title: 'Clean Environment',
      description: 'Daily cleaning service maintaining hygiene standards',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      
      <section id="rooms" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.type} {...room} />
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>
      </section>

      <RulesSection />
      <ReviewsSection />
      <ContactSection />

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Kathmandu unity Boys Hostel</h3>
              <p className="text-gray-400">Your comfortable stay in Kathmandu</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-400">Kathmandu, Nepal</p>
              <p className="text-gray-400">Phone: +977 9808507104</p>
              <p className="text-gray-400">Email: admiredsidchau@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#rooms" className="hover:text-white">Rooms</a></li>
                <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
                <li><a href="#rules" className="hover:text-white">Rules</a></li>
                <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kathmandu unity Boys Hostel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;