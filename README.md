# SEAM 2026 Website

This is the official website for the **Sai Students Europe & UK Alumni Meet 2026 (SEAM 2026)**.

## About this Project

This project was originally forked from a **Wedding Invitation Website** template. It has been extensively modified and repurposed to serve as the event portal for the SEAM 2026 gathering.

### Key Modifications
*   **Purpose**: Transformed from a wedding invitation to an alumni meet event site.
*   **Branding**: Replaced all wedding-related imagery and text with SEAM 2026 branding, including the "Aum Sri Sai Ram" welcome message and event specific logos.
*   **Visuals**: Implemented responsive video backgrounds (different videos for mobile and desktop views) to enhance the visual appeal.
*   **Navigation**: Restructured the navigation menu to include Home, Schedule, Notifications, and FAQs.
*   **Dynamic Content**: Created a custom **Notifications** system that reads content dynamically from Markdown files, allowing for easy updates without touching the code.
*   **New Pages**: Added dedicated pages for the Event Schedule and FAQs.

## Tech Stack
*   **Framework**: [Next.js](https://nextjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: SVG Icons
*   **Content Management**: Markdown (for Notifications)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Edit Content

### 1. Notifications / Announcements
The notifications on the "Notifications" page are generated from Markdown files located in the `notification_updates` folder.

*   **To Add/Edit**: Simply create or edit the `.md` files in the `notification_updates` folder.
*   **Ordering**: The order of announcements is controlled in `pages/notifications.js`. If you add a new file, you may want to update the `desiredOrder` array in that file to determine where it appears.
*   **Formatting**: You can use standard Markdown (bold, italics, links, lists) in these files.

### 2. Schedule
To edit the daily itinerary:
*   Open `pages/schedule.js`.
*   Locate the `schedule` array.
*   Modify the `day`, `time`, or `activity` fields as needed.

### 3. FAQs
To edit the Frequently Asked Questions:
*   Open `pages/faq.js`.
*   Locate the `faqs` array.
*   Add or modify the objects with `q` (Question) and `a` (Answer).

### 4. Home Page
To edit the welcome message or event details:
*   Open `pages/index.js`.
*   Modify the text inside the HTML tags.

### 5. Assets (Images/Videos)
*   Place new images or videos in the `public/assets/` folder.
*   Reference them in your code as `/assets/filename.ext`.

## Deployment

This project is configured to be deployed to **GitHub Pages**.

1.  **Build**:
    ```bash
    npm run build
    ```
    This generates the static files.

2.  **Deploy**:
    Push the changes to the repository. Ensure your GitHub Pages settings are configured to serve from the appropriate branch/folder.

