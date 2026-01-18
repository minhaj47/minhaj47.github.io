# GitHub Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The project uses:

- **Next.js App Router** for file-based routing and modern React patterns
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for utility-first styling and responsive design
- **Turbopack** for fast development builds
- **ESLint** for code quality and consistency

## Development Guidelines

### Code Style

- Use TypeScript for all components and utilities
- Follow functional component patterns with hooks
- Use Tailwind CSS classes for styling instead of CSS modules or styled-components
- Implement responsive design patterns using Tailwind's responsive utilities
- Use modern ES6+ syntax and React best practices

### Component Structure

- Place reusable components in `/app/components/`
- Use proper TypeScript interfaces for props and data structures
- Implement proper error boundaries and loading states
- Follow accessibility best practices (ARIA labels, semantic HTML)

### Portfolio-Specific Features

When working on portfolio features, consider implementing:

- Hero section with introduction and call-to-action
- Skills/technologies showcase
- Projects gallery with filtering capabilities
- About section with professional background
- Contact form with validation
- Dark/light theme toggle
- Smooth scroll navigation
- SEO optimization with Next.js metadata

### Performance

- Optimize images using Next.js Image component
- Implement proper loading states and skeleton components
- Use dynamic imports for heavy components
- Follow Core Web Vitals best practices
