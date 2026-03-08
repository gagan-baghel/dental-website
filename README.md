# Bright Smiles Dental Clinic

![Homepage screenshot 1](./public/appScreenshot.png)
![Homepage screenshot 2](./public/appScreenshot2.png)
![Homepage screenshot 3](./public/appScreenshot3.png)
![Homepage screenshot 4](./public/appScreenshot4.png)
![Homepage screenshot 5](./public/appScreenshot5.png)

A private end-to-end dental clinic website project created and owned by me. It focuses on a premium marketing experience for a fictional clinic, with service discovery, doctor profiles, FAQs, testimonials, appointment flow, and search-ready metadata.

## Overview

Bright Smiles Dental Clinic is my multi-page static site project for a modern dental brand concept. It combines a clean healthcare-focused visual system with responsive layouts, lightweight motion, and reusable content-driven sections. This repository exists to document and maintain my work, not to invite public reuse.

## Key Features

- Responsive homepage and inner pages for services, doctors, care, testimonials, FAQ, contact, and booking.
- Search setup with page metadata, canonical URLs, `robots.txt`, `sitemap.xml`, and structured data.
- Reusable site content stored in a central data module for easier updates.
- Motion-driven hero and section reveal interactions.
- Custom styling with global layout utilities.
- Static multi-page application structure.

## Project Structure

```text
app/
  components/      Shared UI, SEO helpers, and site content
  about/           About page
  book-appointment/ Appointment booking page
  care/            Care products and guidance
  contact/         Contact page
  doctors/         Doctor listing page
  faq/             FAQ page
  services/        Services page
  testimonials/    Reviews and patient stories
public/            Static assets and screenshots
```

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm

These commands are included for my own development workflow.

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production build.
- `npm run start` runs the production server.
- `npm run lint` runs ESLint.

## Pages

- `/`
- `/about`
- `/services`
- `/doctors`
- `/care`
- `/testimonials`
- `/faq`
- `/contact`
- `/book-appointment`
- `/privacy`
- `/terms`

## Search Notes

The project includes:

- page-level metadata helpers
- canonical URLs
- social-sharing metadata
- `robots.txt`
- `sitemap.xml`
- clinic structured data

## Current Notes

- `npm run build` is passing.
- `npm run lint` currently has an ESLint plugin/rule compatibility issue in the existing setup.

## Ownership and Usage

This is my personal project, built end-to-end by me.

No one is permitted to copy, reuse, redistribute, modify, deploy, or present this work as their own without my explicit written permission.

If this project, its code, its design direction, or any adapted portion of it is ever referenced with permission, clear credit to me is required.
