import {
  Shield,
  Clock,
  CreditCard,
  Wifi,
  MapPin,
  Phone,
  Zap,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Safe & Secure Travel",
      description:
        "GPS tracking, CCTV monitoring, and professional drivers ensure your safety throughout the journey.",
      features: ["24/7 GPS tracking", "CCTV surveillance", "Licensed drivers"],
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description:
        "Stay informed with live bus locations, accurate arrival times, and instant service notifications.",
      features: [
        "Live bus tracking",
        "Arrival notifications",
        "Service alerts",
      ],
    },
    {
      icon: CreditCard,
      title: "Cashless Payment",
      description:
        "Convenient payment options including contactless cards, mobile wallets, and online booking.",
      features: ["Touch & Go", "Mobile payments", "Online booking"],
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description:
        "Stay connected during your journey with complimentary high-speed internet access.",
      features: [
        "High-speed internet",
        "Unlimited usage",
        "All routes covered",
      ],
    },
    {
      icon: MapPin,
      title: "Extensive Network",
      description:
        "Comprehensive route coverage connecting key destinations across Kuala Lumpur and beyond.",
      features: ["40+ bus stops", "5 active routes", "Key destinations"],
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service for assistance, complaints, and emergency situations.",
      features: [
        "Emergency hotline",
        "Live chat support",
        "Multilingual service",
      ],
    },
    {
      icon: Zap,
      title: "Eco-Friendly",
      description:
        "Modern electric and hybrid buses reduce environmental impact while providing comfortable rides.",
      features: ["Electric buses", "Low emissions", "Green technology"],
    },
    {
      icon: Users,
      title: "Accessibility",
      description:
        "Wheelchair accessible buses and priority seating for elderly and disabled passengers.",
      features: ["Wheelchair ramps", "Priority seating", "Audio announcements"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience modern public transportation with premium amenities and
            reliable service designed for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
            <div className="text-gray-600">On-Time Performance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
            <div className="text-gray-600">Monthly Passengers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6 Years</div>
            <div className="text-gray-600">Trusted Service</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
