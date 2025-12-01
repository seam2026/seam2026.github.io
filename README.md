# SEAM 2026 Website

This is the official website for the Sai Europe Alumni Meet 2026.

## Getting Started

1.  **Install Dependencies**:
    `ash
    npm install
    ` 

2.  **Run Development Server**:
    `ash
    npm run dev
    ` 
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Edit Content

### Notifications / Announcements
The notifications on the "Notifications" page are generated from Markdown files located in the 
otification_updates folder.

1.  **Add a new announcement**:
    *   Create a new .md file in the 
otification_updates folder.
    *   The filename will be used as the title (e.g., Registration_Details.md becomes "Registration Details").
    *   Write the content inside the file using Markdown. You can use bold, italics, lists, and links.

2.  **Edit an existing announcement**:
    *   Open the corresponding .md file in 
otification_updates.
    *   Modify the text.
    *   Save the file. The website will update automatically in development mode.

### Schedule
To edit the schedule, open pages/schedule.js.
*   Locate the schedule array.
*   Modify the day, 	ime, or ctivity fields as needed.

### FAQs
To edit the FAQs, open pages/faq.js.
*   Locate the aqs array.
*   Add or modify the objects with q (Question) and  (Answer).

### Home Page
To edit the home page text, open pages/index.js.

## Deployment (GitHub Pages)

This project is configured for static export to GitHub Pages.

1.  **Build the project**:
    `ash
    npm run build
    ` 
    This command runs 
ext build followed by 
ext export.
    The static files will be generated in the out directory.

2.  **Push to GitHub**:
    *   Commit your changes.
    *   Push to the master branch (or whichever branch is set up for GitHub Pages).
    *   Ensure your GitHub repository settings for Pages are set to serve from the root (or out folder if you are using a custom workflow, but typically for user sites it's the root of the master branch. Since this is a Next.js app, you might need a GitHub Action to build and deploy to a gh-pages branch).

    **Recommended GitHub Action**:
    Create a file .github/workflows/nextjs.yml to automatically build and deploy on push.

## Project Structure

*   pages/: Contains the route definitions (Home, Schedule, Notifications, FAQ).
*   components/: Reusable React components (Header, Footer, Layout).
*   public/: Static assets (images, videos, icons).
*   styles/: CSS files (Tailwind setup).
*   
otification_updates/: Markdown files for the announcements.
