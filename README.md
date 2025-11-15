# 🍹 Cocktail - Premium Cocktail Experience

A modern, interactive cocktail website built with React and GSAP animations. This project showcases smooth scroll-based animations, interactive UI components, and a sleek design for a premium cocktail bar experience.

## 🚀 Demo

[Live Demo](https://maison-mix.vercel.app) | [Repository](https://github.com/sujal-pawar/Maison-Mix)

## 📸 Preview

![Cocktail Website Preview](./public/readme/preview.png)

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.2.0** - Modern UI library with hooks and functional components
- **Vite 7.2.2** - Fast build tool and development server

### Animations & Graphics
- **GSAP 3.13.0** - Professional-grade animation library
  - ScrollTrigger for scroll-based animations
  - SplitText for text animations
  - Timeline for complex animation sequences
- **@gsap/react 2.1.2** - React integration for GSAP

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Responsive 10.0.1** - Responsive design utilities
- **Custom CSS** - Advanced styling and gradients

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Vite Plugin React** - React support for Vite

## ✨ Features

### 🎬 Advanced GSAP Animations
- **Scroll-triggered animations** - Elements animate as user scrolls
- **Video scroll effects** - Video scales and transforms with scroll position
- **Text split animations** - Characters and words animate individually
- **Parallax effects** - Smooth parallax scrolling for background elements
- **Timeline sequences** - Complex, choreographed animations

### 📱 Interactive Components
- **Dynamic cocktail slider** - Browse cocktails with smooth transitions
- **Responsive navigation** - Mobile-friendly navigation system
- **Interactive menu system** - Smooth category switching
- **Scroll-based video playback** - Video responds to scroll position

### 🎨 Design Features
- **Modern gradient backgrounds** - Custom radial gradients
- **Noise texture overlays** - Artistic texture effects
- **Custom typography** - Modern Negra and serif font combinations
- **Mobile-first responsive design** - Optimized for all devices

## 🎯 GSAP Learning Journey

While building this project, I learned and implemented several GSAP concepts:

### Core GSAP Concepts
```javascript
// Timeline creation with ScrollTrigger
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

// Text animations with SplitText
const heroSplit = new SplitText('.title', { type: 'chars words' });
gsap.from(heroSplit.chars, {
  y: 100,
  duration: 1.8,
  ease: 'expo.out',
  stagger: 0.06
});
```

### Key GSAP Features Learned
- **ScrollTrigger Plugin** - Scroll-based animation triggers
- **Timeline Management** - Coordinating multiple animations
- **Easing Functions** - Using `expo.out`, `power1.inOut` for natural motion
- **Stagger Animations** - Sequential animation of elements
- **Transform Properties** - Scale, translate, rotate animations
- **Opacity Transitions** - Smooth fade effects

### Animation Patterns Implemented
1. **Hero Section Animation**
   - Character-by-character text reveals
   - Parallax leaf movements
   - Video scale and position transforms

2. **Scroll-Based Video Effects**
   - Video container scaling
   - Position transforms on scroll
   - Opacity changes for depth

3. **Content Reveal Animations**
   - Text sliding from bottom
   - Staggered element appearances
   - Image entrance effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sujal-pawar/cocktail.git
   cd cocktail
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎥 Video Optimization

For smooth GSAP video animations, optimize your videos using FFmpeg:

```bash
ffmpeg -i input.mp4 -vf scale=1280:-1 -vcodec libx264 -crf 18 -preset veryfast -g 1 -movflags faststart -pix_fmt yuv420p -an output_gsap.mp4
```

This command:
- Scales video to 1280px width
- Optimizes for web playback
- Removes audio for faster loading
- Sets fast start for immediate playback

## 📁 Project Structure

```
cocktail/
├── public/
│   ├── images/          # Static images and icons
│   ├── videos/          # Video files for animations
│   └── fonts/           # Custom fonts
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx     # Main hero section with video
│   │   ├── Navbar.jsx   # Navigation component
│   │   ├── Menu.jsx     # Cocktail menu slider
│   │   └── Contact.jsx  # Contact section
│   ├── constants/       # Static data and configurations
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind
└── package.json        # Dependencies and scripts
```

## 🎨 Color Palette

- **Primary Yellow**: `#e7d393` - Accent color for highlights
- **White Variants**: `#efefef` - Text and UI elements
- **Black**: `#000000` - Background and contrast
- **Gradients**: Custom radial gradients for depth

## 🌟 Key Learning Outcomes

### GSAP Mastery
- Understanding of GSAP timeline system
- ScrollTrigger plugin implementation
- Performance optimization for smooth animations
- Mobile-responsive animation considerations

### React Integration
- Proper cleanup of GSAP instances
- useGSAP hook implementation
- Ref management for DOM manipulation
- Effect timing and dependencies

### Performance Optimization
- Video compression for web
- Animation performance best practices
- Mobile optimization strategies
- Lazy loading considerations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GSAP Team** - For creating an incredible animation library
- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Design Inspiration** - Modern cocktail bar aesthetics

---

Built with ❤️ by [Sujal Pawar](https://github.com/sujal-pawar) while learning GSAP animations
