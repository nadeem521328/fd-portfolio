# Nadeem Shaik - Portfolio Project

## Purpose
This project is a personal portfolio built to display my software engineering projects, tech stack competencies, and backend integration skills. It serves as a central hub for recruiters to review my code repository links, live applications, and download my current resume.

## Features
- **Modular Interface**: Built using React with clean component separation (Header, Hero, About, Projects, TechStack, Footer) for easy maintenance.
- **Externalized Data**: Project info and technical skills are stored in simple data configuration files rather than hardcoded inside UI components.
- **Auto-Detecting Resume**: Uses a build-time script that automatically detects whatever resume PDF is in the public directory and hooks it to the download buttons dynamically.
- **Dark Theme Layout**: Crafted with a modern dark theme and custom gradient accents, optimized for desktop and mobile devices.

## Tech Stack
- **Frontend**: React 18, Tailwind CSS, JavaScript (ES6+)
- **Build Tooling**: Vite 5, PostCSS, Autoprefixer
- **Assets**: Geist Sans (Font), Material Design Icons

## How to Run Locally
1. Clone the repository and navigate into the folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for deployment:
   ```bash
   npm run build
   ```

## Future Work
- Add direct contact form integration using EmailJS or a serverless function.
- Integrate a simple CMS to manage projects without editing code.
