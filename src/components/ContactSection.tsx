import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600 flex-shrink-0" />
                <span>Kathmandu Unity Boys Hostel, Kathmandu 44600</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600 flex-shrink-0" />
                <span>+977 9808507104</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 flex-shrink-0" />
                <span>admiredsidchau@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-600 flex-shrink-0" />
                <span>Open 24/7</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-center">
                Connect With Us
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/siddhartha9808/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                >
                  <Facebook className="text-blue-600 w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/9779801867144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors"
                >
                  <MessageCircle className="text-green-600 w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/siddhartha9808/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors"
                >
                  <Instagram className="text-pink-600 w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-2xl bg-gradient-to-tr from-indigo-500 via-blue-200 to-purple-300">
  <div className="relative w-full h-0 pb-[56.25%]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4961972559054!2d85.32528328072867!3d27.701962014781977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bffc83334d%3A0x9e2b927e95ee1220!2sKathmandu%20Unity%20Boys%20Hostel!5e0!3m2!1sen!2sus!4v1732552579625!5m2!1sen!2sus"
      className="absolute top-0 left-0 w-full h-full rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ border: "none" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div className="p-4 bg-white">
    <h2 className="text-lg font-semibold text-gray-800">Kathmandu Unity Boys Hostel</h2>
    <p className="text-gray-600 mt-2">
      Explore the location of Kathmandu Unity Boys Hostel with an interactive map. Zoom in and out to discover nearby attractions.
    </p>
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=Kathmandu+Unity+Boys+Hostel"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      Get Directions
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
