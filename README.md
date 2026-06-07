# Shree Boutique

A professional web application for Shree Boutique, featuring a modern frontend architecture and a headless content management system. 

## Technical Architecture

- Frontend Framework: Next.js (App Router)
- UI Library: React 19
- Styling: Tailwind CSS & CSS Modules
- Animations: Framer Motion
- Content Management: Sanity CMS
- Deployment: Vercel

## Key Features

- Server-Side Rendering (SSR) for optimized performance and SEO.
- Fully responsive design engineered with Tailwind CSS and custom module scoping.
- Headless CMS integration allowing administrators to securely update gallery images and client testimonials in real-time.
- Next.js Image optimization for rapid asset delivery.
- Interactive routing and client-side transitions.

## Local Development Setup

To run this project locally, ensure you have Node.js installed, then execute the following commands:

1. Install dependencies:
   npm install

2. Configure environment variables. You will need to create a `.env.local` file with the appropriate Sanity credentials:
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production

3. Start the development server:
   npm run dev

The application will be accessible at http://localhost:3000. 

## Content Management

Administrators can manage the website content by navigating to `/studio`. The studio is integrated directly into the Next.js application, eliminating the need for a separate deployment. Data is revalidated automatically to ensure the live application remains synchronized with the CMS.
