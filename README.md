# GitHub Repository Explorer

A modern full-stack web application designed to explore GitHub profiles and repositories with enhanced performance, secure API integration, and insightful analytics. The application enables users to search GitHub accounts, browse repositories, analyze language usage, and view detailed repository information through an intuitive and responsive interface.

## Project Overview

This project was developed as part of the Studio Graphene Full Stack Developer Assessment. It demonstrates the ability to design and implement a scalable full-stack solution using modern TypeScript technologies, backend API integration, caching mechanisms, and responsive frontend development.

The application follows a client-server architecture where a Node.js backend acts as a secure proxy between the frontend and the GitHub API. This approach ensures secure token management, centralized error handling, improved performance through caching, and better rate-limit management.

## Key Features

### User Search & Profile Exploration

* Search GitHub users by username
* View profile details including avatar, bio, followers, following, and repository statistics
* Intelligent username suggestions with debounced search

### Repository Management

* Browse public repositories
* Sort repositories by stars, name, or last updated date
* Load additional repositories dynamically
* View repository metadata including language, stars, and update history

### Repository Insights

* Expand repositories to view detailed information
* Display fork count, open issues, visibility status, creation date, and default branch
* Visualize programming language distribution through analytics dashboards

### Performance & Scalability

* Server-side caching using NodeCache
* GitHub Personal Access Token authentication
* Rate-limit protection and centralized API management
* Optimized API requests through backend proxy architecture

### User Experience

* Responsive design for desktop, tablet, and mobile devices
* Clean and modern user interface
* Recent search history stored locally
* Comprehensive error handling and loading states

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* TypeScript
* Axios
* NodeCache

### Deployment

* Vercel (Frontend)
* Render (Backend)

## Architecture

Frontend applications communicate exclusively with the Node.js backend, which securely interacts with the GitHub API. This architecture provides:

* Secure token storage
* Reduced API requests through caching
* Better rate-limit handling
* Centralized business logic and error management
* Improved maintainability and scalability

## Technical Highlights

* Full-stack TypeScript implementation
* REST API integration with GitHub
* 60-second in-memory caching strategy
* Debounced search optimization
* Responsive component-based UI
* Secure backend proxy architecture
* Analytics visualization for repository languages

## Future Enhancements

Potential improvements include:

* Automated testing (Unit & Integration)
* Advanced repository filtering and search
* Docker containerization
* CI/CD pipelines using GitHub Actions
* AI-powered repository analysis and developer insights
* Enhanced monitoring and performance analytics

## Outcome

This project demonstrates proficiency in full-stack web development, API integration, backend optimization, responsive UI design, deployment workflows, and modern software engineering practices. The implementation focuses on both functional requirements and production-ready considerations such as security, scalability, performance, and maintainability.

**Author:** Simran Gupta
