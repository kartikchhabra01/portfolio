# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features modern design, smooth animations, and dark mode support.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: ARIA labels, semantic HTML, and good contrast
- **Performance**: Optimized with Tailwind's utility classes

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **TailwindCSS** for styling
- **Framer Motion** for animations (optional)
- **Modern CSS** with custom animations
- **Component-based** architecture

## 📱 Sections

1. **Navbar** - Sticky navigation with dark mode toggle
2. **Hero Section** - Eye-catching landing area with animated elements
3. **About Section** - Professional introduction with skill bars
4. **Projects Section** - Portfolio showcase with hover effects
5. **Contact Section** - Contact form and social media links
6. **Footer** - Clean footer with navigation and social links

## 🎨 Design Features

- **Color Palette**: Modern neutral base with blue/purple accent colors
- **Typography**: Clean Inter font family
- **Animations**: Smooth hover effects, scale transforms, and transitions
- **Accessibility**: Proper ARIA labels, semantic HTML, and good contrast
- **Performance**: Optimized with Tailwind's utility classes

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── styles/             # Global styles
├── App.tsx             # Main App component
├── index.tsx           # Entry point
└── index.css           # Global CSS with Tailwind directives
```

## 🎯 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
  }
}
```

### Content
- Update personal information in each component
- Replace project images and descriptions
- Modify contact details and social links

### Styling
- Customize Tailwind classes in components
- Add new animations in `tailwind.config.js`
- Modify global styles in `src/index.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:
- System preference detection
- Manual toggle in navbar
- Smooth transitions between themes

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using React & TailwindCSS
