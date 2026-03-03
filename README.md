# 🍎 Vinaysena's OS Portfolio

A premium, highly interactive personal portfolio application designed with a dual-personality interface. Experience a full macOS-style desktop environment on your computer and a sleek iOS-inspired home screen on your mobile device.

![macOS Desktop Appearance](https://via.placeholder.com/1200x675/2c2c2c/ffffff?text=macOS+Desktop+View)
_The desktop experience features a functional dock, draggable windows, and glassmorphism._

---

## ✨ Key Features

### 🖥️ Desktop Experience (macOS Style)

- **Multi-Window System**: Drag, stack, and focus multiple windows simultaneously.
- **Interactive Dock**: Smooth magnification effect with real-time tooltips.
- **Glassmorphism Design**: High-fidelity frosted glass aesthetics across all UI components.
- **System Apps**: Terminal, Browser, Photos, Finder, and more.

### 📱 Mobile Experience (iOS Style)

- **Adaptive iOS Grid**: Icons automatically transition to an iOS-style app grid on mobile.
- **Full-Screen Focus**: Windows expand to fill the screen with clean iOS-style headers.
- **Status Bar**: Realized iOS status bar with signal, wifi, and battery indicators.
- **Gestural Animations**: Smooth slide-up transitions using GSAP.

---

## 🚀 Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [GSAP (GreenSock)](https://greensock.com/gsap/)
- **State management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Viewing**: [React-PDF](https://projects.wojtekmaj.pl/react-pdf/)
- **Date/Time**: [Day.js](https://day.js.org/)

---

## 🛠️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vinaysenadev/my-portfolio.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```bash
src/
├── components/     # High-level UI components (Dock, Navbar, Welcome)
├── hoc/            # Higher-Order Components (windowWrapper)
├── hooks/          # Custom React hooks (useMobile)
├── store/          # Zustand global state (window, location)
├── windows/        # Individual "App" components (Browser, Terminal, etc.)
├── constants/      # Project data and icon configurations
└── index.css       # Global styles and Tailwind layers
```

---

## 🎨 Aesthetic Philosophy

This project aims to bridge the gap between web applications and native operating systems. By leveraging **GSAP** for micro-interactions and **Tailwind 4.0** for modern glassmorphism, the portfolio provides a "WOW" factor that goes beyond simple static pages.

---

_Built with ❤️ by Vinaysena_
