# replit.md

## Overview

This is a full-stack academic mentorship landing page application built with React, TypeScript, and Express.js. The application showcases Academic Excellence Masterclass, providing information about personalized academic coaching services, instructor credentials, testimonials, and a call-to-action for external registration. The system uses a modern tech stack with shadcn/ui components for the frontend and is designed to be deployed on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for SSR-like development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **API Structure**: RESTful API design with `/api` prefix routing

### Data Storage
- **Database ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Management**: Shared schema definitions between client and server
- **Migration System**: Drizzle Kit for database migrations
- **Session Storage**: PostgreSQL-backed session store (connect-pg-simple)

### Component Architecture
- **Design System**: Modular component library with consistent styling
- **Layout Components**: Navigation, Hero, About, Testimonials, Instructor, CTA, Footer sections
- **UI Components**: Comprehensive set of accessible components (buttons, forms, dialogs, etc.)
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Build and Development
- **Development**: Hot module replacement with Vite development server
- **Production Build**: Vite for client bundle, esbuild for server bundle
- **Asset Handling**: Static assets served through Express with proper caching
- **Error Handling**: Runtime error overlay for development, structured error responses

### Authentication and Security
- **Session Management**: Express session middleware with PostgreSQL storage
- **CORS**: Configured for cross-origin requests
- **Input Validation**: Zod schemas for type-safe data validation
- **Error Boundaries**: React error boundaries for graceful error handling

## External Dependencies

### Core Framework Dependencies
- **Frontend**: React, React DOM, Vite, TypeScript
- **Backend**: Express.js, Node.js HTTP server
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod schema validation library

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **Utilities**: class-variance-authority for component variants, clsx for conditional classes
- **Icons**: Lucide React icon library
- **Carousel**: Embla Carousel for image/content sliders

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Development Server**: Custom Express middleware for Vite integration

### State Management and Data Fetching
- **Query Management**: TanStack React Query for server state
- **Form Management**: React Hook Form with Zod resolvers
- **Date Handling**: date-fns for date manipulation utilities

### Session and Storage
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Database Migrations**: Drizzle Kit for schema management
- **Environment Configuration**: dotenv for environment variables

The application follows a clean architecture pattern with clear separation between presentation, business logic, and data layers. The storage interface allows for easy switching between different storage implementations, currently using an in-memory store with the infrastructure ready for PostgreSQL integration.