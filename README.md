# Alliance Sourcing BD

Alliance Sourcing BD is a modern, route-based marketing and information website for an apparel sourcing and buying-house business in Bangladesh. The project presents the company’s services, production capabilities, global partner network, and contact information through a polished single-page experience built with React, React Router, TypeScript, and Tailwind CSS.

## Overview

This application is designed to help potential buyers and partners understand the company’s value proposition quickly. It highlights:

- Apparel sourcing and buying-house services
- Factory and machinery capabilities
- Product and service categories
- Quality assurance and ethical sourcing commitments
- Contact and partner engagement opportunities

The site is structured as a multi-page experience with a shared layout, reusable sections, and a strong visual emphasis on the apparel manufacturing sector.

## Key Features

- Responsive landing experience with a strong hero section
- Dedicated pages for:
  - Home
  - About Us
  - Buying House
  - Factory & Machinery
  - Global Partners
  - Contact Us
- Reusable shared navigation and footer across all pages
- Rich visual content using local assets stored in the public folder
- Modern React Router-based app structure
- Type-safe development with TypeScript
- Styling powered by Tailwind CSS

## Tech Stack

- React 19
- React Router 7
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Docker

## Project Structure

```text
app/
  components/
    aboutuspage/
    buyinghougepage/
    contactpage/
    factorypage/
    globalpartners/
    homepage/
    shared/
  layouts/
  routes/
  welcome/
public/
  ...images and static assets
```

## Main Routes

The application uses React Router to serve the following routes:

- `/` – Home page
- `/about` – About Us page
- `/buyinghouse` – Buying House page
- `/factory` – Factory & Machinery page
- `/partners` – Global Partners page
- `/contactus` – Contact page

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 20 or later
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app will start in development mode and can be viewed in the browser through the local Vite/React Router dev server.

## Build for Production

```bash
npm run build
```

## Type Checking

```bash
npm run typecheck
```

## Docker

A Dockerfile is included for containerized builds.

### Build the image

```bash
docker build -t alliance-sourcing-bd .
```

### Run the container

```bash
docker run -p 3000:3000 alliance-sourcing-bd
```

## Content and Business Focus

The website is tailored for an apparel sourcing business and emphasizes:

- Reliable sourcing partnerships in Bangladesh
- Buying-house support for international buyers
- Factory and machinery coordination
- Transparent operations and quality control
- Strong communication and contact channels

The footer includes contact information for the company, including the Dhaka division address and phone/email details displayed in the UI.

## Notes

- Static assets such as logos, product images, factory imagery, and vector icons are stored in the public directory.
- The project is currently structured as a frontend marketing and information website rather than a full backend-driven application.
- The app uses a shared layout so navigation and footer remain consistent across all pages.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
