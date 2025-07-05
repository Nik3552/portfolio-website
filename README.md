# Maiboroda Mykyta - Personal Portfolio

Try it out: https://nik3552.github.io/portfolio-website/

A modern, responsive personal portfolio website showcasing web development skills and creative projects.

## 🌟 Features

### Core Sections
- **Hero Section**: Eye-catching introduction with animated gradient avatar and call-to-action buttons
- **About Me**: Personal introduction with skill highlights and social media links
- **Skills & Technologies**: Interactive skill bars with icons showing proficiency levels
- **Featured Projects**: Project showcase with hover effects, technology tags, and live/GitHub links
- **Contact Form**: Functional contact form with toast notifications

### Design Features
- **Dark/Light Mode Toggle**: Seamless theme switching with smooth transitions
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern Animations**: Smooth hover effects, transitions, and gradient animations
- **Clean Typography**: Professional layout with excellent readability
- **Accessibility**: WCAG compliant with proper contrast ratios and semantic HTML

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** with TypeScript for type-safe component development
- **Vite** for fast development and optimized builds

### Styling & UI
- **Tailwind CSS** for utility-first styling and responsive design
- **shadcn/ui** component library for consistent, accessible UI components
- **Lucide React** for beautiful, consistent icons

### Key Libraries
- **React Hook Form** for form handling and validation
- **Zod** for schema validation
- **React Router DOM** for navigation
- **Class Variance Authority** for component variant management

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06B6D4) - Modern, tech-focused accent color
- **Secondary**: Purple (#8B5CF6) - Creative gradient complement
- **Neutral**: Gray scale for text and backgrounds
- **Dark Mode**: Sophisticated dark theme with proper contrast

### Typography
- Clean, modern font stack optimized for readability
- Hierarchical heading structure (H1-H4)
- Balanced text spacing and line heights

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Single column layout, stacked navigation
- **Tablet**: 768px - 1024px - Two-column layout for projects
- **Desktop**: > 1024px - Full multi-column layout with optimized spacing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Main page components
│   └── Index.tsx       # Main portfolio page
└── styles/             # Global styles and CSS

public/                 # Static assets
├── images/             # Project screenshots and assets
└── favicon.ico         # Site favicon
```

## ✨ Key Components

### Skills Section
- Interactive progress bars showing proficiency levels
- Technology icons with hover effects
- Skills include: JavaScript, React, TypeScript, Automation, Python, CSS/Tailwind

### Projects Showcase
- **E-Commerce Platform**: Full-stack solution with modern design
- **Task Management App**: Collaborative tool with real-time updates
- **AI Content Generator**: ML-powered content creation tool
- **Portfolio Website**: This very website showcasing React skills

### Contact Form
- Form validation with real-time feedback
- Toast notifications for user feedback
- Direct email integration ready

## 🎯 Performance Optimizations

- **Lazy Loading**: Images and components loaded on demand
- **Code Splitting**: Optimized bundle sizes with Vite
- **CSS Optimization**: Tailwind CSS purging for minimal file sizes
- **Image Optimization**: Responsive images with proper sizing

## 🔧 Customization

### Adding New Projects
1. Update the `projects` array in `src/pages/Index.tsx`
2. Add project images to the `public/images/` directory
3. Include technology tags and links

### Modifying Skills
1. Edit the `skills` array in `src/pages/Index.tsx`
2. Update skill levels, icons, and names as needed

### Theme Customization
1. Modify color variables in `tailwind.config.ts`
2. Update CSS custom properties in `src/index.css`

## 📞 Contact Information

- **Email**: [your-email]
- **GitHub**: [github-profile]
- **LinkedIn**: [linkedin-profile]

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:
1. Open an issue for bugs or suggestions
2. Submit a pull request for improvements
3. Star the repository if you find it useful

---

**Built by Maiboroda Mykyta**

*Exploring ideas. Building experiences. Crafting digital solutions that make a difference.*
