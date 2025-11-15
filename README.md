<div align="center">

# 🍹 Maison Mix
### Premium Cocktail Experience with GSAP Animations

<!-- <img src="" alt="Maison Mix Website Preview" width="800" style="border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"> -->
<img width="1889" height="939" alt="image" src="https://github.com/user-attachments/assets/198dbc4b-2b7e-4cbe-9bab-dad2f9b33c34" />




[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-yellow?style=for-the-badge&logo=vercel)](https://maison-mix.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/sujal-pawar/Maison-Mix)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

*A modern, interactive cocktail website showcasing smooth scroll-based animations, interactive UI components, and premium design aesthetics.*

</div>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend Framework
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat-square&logo=vite)

### Animations & Graphics
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=flat-square&logo=greensock)
![ScrollTrigger](https://img.shields.io/badge/ScrollTrigger-Enabled-88CE02?style=flat-square)
![SplitText](https://img.shields.io/badge/SplitText-Animations-88CE02?style=flat-square)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-06B6D4?style=flat-square&logo=tailwindcss)
![Responsive](https://img.shields.io/badge/React%20Responsive-10.0.1-FF6B6B?style=flat-square)

</div>

**Key Technologies:**
- **React 19.2.0** - Modern UI library with hooks and functional components
- **Vite 7.2.2** - Fast build tool and development server
- **GSAP 3.13.0** - Professional-grade animation library with ScrollTrigger, SplitText, and Timeline
- **@gsap/react 2.1.2** - React integration for GSAP
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Responsive 10.0.1** - Responsive design utilities

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

---

<div align="center">

## 🏆 GSAP Learning Journey

*This project was built while learning GSAP animations*

<img src="https://img.shields.io/badge/Learning%20Focus-GSAP%20Animations-88CE02?style=for-the-badge&logo=greensock">
<img src="https://img.shields.io/badge/Skill%20Level-Intermediate-FF6B6B?style=for-the-badge">
<img src="https://img.shields.io/badge/Animation%20Types-5+-yellow?style=for-the-badge">

</div>

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

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/sujal-pawar/Maison-Mix.git
cd Maison-Mix

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

<div align="center">
<strong>🚀 Your cocktail experience will be running on <code>http://localhost:5173</code></strong>
</div>

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
maison-mix/
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

### GSAP 
- Understanding of GSAP timeline system
- ScrollTrigger plugin implementation
- Performance optimization for smooth animations

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

---

<div align="center">

**Built with ❤️ by [Sujal Pawar](https://github.com/sujal-pawar)**

*Learning GSAP*

[![GitHub followers](https://img.shields.io/github/followers/sujal-pawar?style=social)](https://github.com/sujal-pawar)
[![GitHub stars](https://img.shields.io/github/stars/sujal-pawar/Maison-Mix?style=social)](https://github.com/sujal-pawar/Maison-Mix)

</div>
