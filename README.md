# Jinisha Lee Marosario - Portfolio

A modern, professional portfolio website showcasing my skills, projects, and achievements as a Full-Stack Developer.

## 🌟 Features

- **Modern Dark Theme Design** - Beautiful dark theme with purple and pink gradient accents
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging animations and hover effects throughout
- **Comprehensive Sections**:
  - Hero section with social links
  - About me with language skills
  - Technical skills organized by category
  - Featured projects with filtering
  - Education timeline
  - Leadership & achievements
  - Courses & workshops
  - Contact section

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **React Icons** - Icon library
- **Google Fonts** - Inter & Poppins fonts

## 📦 Installation

1. Clone or navigate to the portfolio directory:
```bash
cd d:\Projects\portfolio
```

2. Install dependencies (if not already installed):
```bash
npm install
```

## 🚀 Running the Portfolio

### Development Mode

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   ├── Card.jsx
│   │   └── Card.module.css
│   ├── pages/
│   │   ├── Portfolio.jsx
│   │   └── Portfolio.module.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:
- Custom CSS properties for colors, typography, spacing, and more
- Consistent border radius and shadows
- Smooth transitions and animations
- Responsive breakpoints for all screen sizes

### Color Palette

- **Primary Background**: Dark navy (#0A0E27)
- **Accent Purple**: #8B5CF6
- **Accent Pink**: #EC4899
- **Accent Blue**: #3B82F6

## 📝 Customization

To customize the portfolio with your own information:

1. **Update Personal Information**: Edit `src/pages/Portfolio.jsx`
   - Modify the hero section text
   - Update social media links
   - Change email address

2. **Add/Remove Projects**: Edit the `projects` array in `Portfolio.jsx`

3. **Update Skills**: Modify the `skills` object in `Portfolio.jsx`

4. **Change Colors**: Edit CSS custom properties in `src/index.css`

## 🌐 Deployment

This portfolio can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**

## 📧 Contact

- **Email**: jinishaleemarosario@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## 📄 License

This portfolio is open source and available for personal use.

---

Built with ❤️ using React and modern web technologies
