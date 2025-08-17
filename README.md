# Chinmay's Portfolio

A modern, responsive portfolio website built with React, featuring smooth animations and a beautiful UI.

## Features

- 🎨 Modern and responsive design
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-friendly interface
- 🎯 Interactive sections (About, Skills, Projects, Contact)
- 📧 Contact form with validation
- 🔗 Social media integration

## Technologies Used

- React 18
- Framer Motion (for animations)
- React Icons
- CSS3 with modern features
- Responsive design principles

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Customization

### Personal Information

Update the following files to customize the portfolio with your information:

1. **Hero Section** (`src/components/Hero.js`): Update your name and title
2. **About Section** (`src/components/About.js`): Modify the description and background
3. **Skills Section** (`src/components/Skills.js`): Add or remove skills as needed
4. **Projects Section** (`src/components/Projects.js`): Replace with your actual projects
5. **Contact Section** (`src/components/Contact.js`): Update social media links and email

### Styling

The main styles are in `src/App.css`. You can customize:
- Color scheme
- Typography
- Layout spacing
- Animation timings

### Social Links

Update the social media links in `src/components/Contact.js`:

```javascript
const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourusername' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:your.email@example.com' }
];
```

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   └── Contact.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Deployment

You can deploy this portfolio to various platforms:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `npm run build` and deploy the build folder
- **Firebase Hosting**: Use Firebase CLI to deploy

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE). 