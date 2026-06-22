# Nadeem Shaik - Full Stack Engineering Portfolio

## Overview
A high-performance personal portfolio application designed to showcase full-stack software engineering projects, system architectures, and technical competencies. Built with a modular React architecture and optimized for rapid client-side delivery.

## Features
- **Modular Component Design**: Built with decoupled, highly reusable React components (Header, Hero, About, Projects, TechStack, Footer).
- **Externalized Data Models**: Project information and skills are structured in separate JS data files, separating content from UI presentation.
- **Zero-Configuration Resume Pipeline**: Integrates a custom build-time Vite plugin that automatically scans for any PDF resume in the public assets directory, dynamically binding and renaming the file for download at compile time.
- **Responsive Layout**: Designed with a dark-theme system, optimizing typography and responsive constraints first for desktop screens, while maintaining smooth mobile compatibility.

## Tech Stack
- **Frontend**: React 18, Tailwind CSS, JavaScript (ES6+)
- **Bundler & Tooling**: Vite 5, PostCSS, Autoprefixer
- **Assets**: Google Fonts (Geist Sans), Material Design Icons

## Local Setup
Ensure Node.js is installed. Run the following commands in the project root:

```bash
# Install dependencies
npm install

# Run the local development server
npm run dev

# Compile production-ready static assets
npm run build
```

The production assets compile directly into the `dist/` directory, optimized and ready for static hosting deployment (e.g., Vercel, Netlify, or GitHub Pages).

## Future Improvements
- **Headless CMS Integration**: Migrate data storage to a headless CMS (like Sanity or Strapi) for dynamic project management.
- **CI/CD Automation**: Implement GitHub Actions pipelines to automatically compile, run unit tests, and deploy on main branch pushes.
- **Performance Diagnostics**: Optimize image loader sizes and asset preloading policies to achieve a perfect Lighthouse score.
