# 🚌 Amana Transportation

A modern, responsive web application for a public transportation company serving Malaysian bus riders since 2019. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring real-time bus tracking, interactive maps, and comprehensive service information.

![Amana Transportation](https://img.shields.io/badge/Status-Active-green)
![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)

## 🌟 Features

### 🚍 Real-Time Bus Tracking

- **Live GPS tracking** of all active buses
- **Interactive map** powered by Leaflet.js
- **Real-time arrival times** and route information
- **Dynamic bus status updates** (Active, Maintenance, Out of Service)

### 📱 Responsive Design

- **Mobile-first approach** with full responsive design
- **Cross-browser compatibility**
- **Smooth animations** and transitions
- **Accessible UI components**

### 🗺️ Interactive Features

- **Dynamic route visualization** on interactive maps
- **Bus stop markers** with detailed information
- **Route selection** and filtering
- **Live passenger capacity** tracking

### 🎯 Core Sections

- **Hero Section** - Company overview with real-time statistics
- **Live Bus Map** - Interactive tracking and route visualization
- **Bus Schedule** - Detailed timetables and arrival information
- **Services** - Comprehensive service offerings and features
- **Call to Action** - User engagement and conversion section

## 🛠️ Technology Stack

### Frontend

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Maps**: Leaflet.js + React Leaflet

### Development Tools

- **Package Manager**: pnpm
- **Development Server**: Next.js with Turbopack
- **Type Checking**: TypeScript
- **CSS Processing**: PostCSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/MohammadAlHabil/amana-transportation.git
cd amana-transportation
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Run the development server**

```bash
pnpm dev
# or
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server with Turbopack
pnpm dev

# Production build with Turbopack
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
amana-transportation/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with statistics
│   ├── ActiveBusMap.tsx  # Live bus tracking map
│   ├── BusSchedule.tsx   # Schedule and timetables
│   ├── Services.tsx      # Service offerings
│   ├── CallToAction.tsx  # User engagement section
│   ├── Footer.tsx        # Footer with company info
│   └── MapComponent.tsx  # Leaflet map integration
├── lib/                  # Utilities and data
│   ├── data.ts          # Mock transportation data
│   └── types.ts         # TypeScript type definitions
├── public/              # Static assets
└── README.md           # Project documentation
```

## 📊 Data Structure

### Bus Lines

- **5 total routes** (B101, B205, B350, B410, B520)
- **4 active routes** currently operational
- **40+ bus stops** across all routes
- **Real-time passenger data** and utilization metrics

### Operational Metrics

- **99.8%** On-time performance
- **500K+** Monthly passengers
- **4.9/5** Customer rating
- **117** Current passengers across all routes
- **53%** Average bus utilization

## 🎨 Design Features

### UI/UX Elements

- **Clean, modern interface** with intuitive navigation
- **Card-based layouts** for better content organization
- **Hover effects** and smooth transitions
- **Consistent color scheme** with blue accent colors
- **Professional typography** using Geist font family

### Interactive Components

- **Dynamic statistics** pulled from real data
- **Filterable bus routes** and schedules
- **Responsive grid layouts** (1-2-4 columns)
- **Interactive map markers** with popup information
- **Status badges** with color coding

## 🚍 Transportation Data

### Routes Available

1. **B101** - KLCC - Petaling Jaya Express (Active)
2. **B205** - Old Town - Mont Kiara Connector (Active)
3. **B350** - Airport - City Circle (Active)
4. **B410** - University Express (Maintenance)
5. **B520** - Shopping District Shuttle (Active)

### Service Features

- **GPS Tracking** - Real-time location monitoring
- **CCTV Surveillance** - Enhanced security
- **Free Wi-Fi** - High-speed internet on all buses
- **Cashless Payment** - Touch & Go and mobile payments
- **24/7 Support** - Round-the-clock customer service
- **Eco-Friendly** - Electric and hybrid bus fleet
- **Accessibility** - Wheelchair accessible with priority seating

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The application can be deployed on any platform that supports Next.js:

- **Netlify**
- **Railway**
- **Heroku**
- **AWS Amplify**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [Amana Transportation](#)
- **Email**: info@amanatransportation.my
- **Phone**: +60 3-1234 5678
- **Emergency Hotline**: +60 3-1234 9999

## 🎯 Future Enhancements

- **User Authentication** - Passenger accounts and booking history
- **Push Notifications** - Real-time alerts and updates
- **Mobile App** - React Native companion app
- **Payment Integration** - Online ticket purchasing
- **Route Optimization** - AI-powered route planning
- **Multi-language Support** - Bahasa Malaysia and Chinese
- **Dark Mode** - Theme switching capability
- **API Integration** - Real GPS data from actual buses

---

**Built with ❤️ for commuters**
