# GitHub Repo Explorer

A full-stack GitHub Repository Explorer built as part of the Studio Graphene Full Stack Developer assessment (Exercise 3). The application allows users to search GitHub profiles, view repository information, explore repository details, visualize language usage, and benefit from server-side caching and rate-limit protection through a Node.js backend proxy.

---

## Live Demo

### Frontend

[Live Application](https://github-repo-explorer-taupe.vercel.app)

### Backend

[Backend API](https://github-repo-explorer-85qw.onrender.com)


<img width="950" height="428" alt="image" src="https://github.com/user-attachments/assets/3dff7d30-f1e5-4f27-ba62-5e2c4b583ff8" />

<img width="623" height="431" alt="image" src="https://github.com/user-attachments/assets/a5fb3c92-493e-4820-8677-5874201d6eb2" />


---

## Exercise Chosen

**Exercise 3: GitHub Repo Explorer**

The goal of this exercise was to build a full-stack application where users can search for GitHub profiles and repositories. The frontend communicates exclusively with a Node.js backend, which acts as a proxy to the GitHub API. This approach enables server-side caching, secure API token usage, and centralized error handling.

---

## Key Highlights

- Full-stack TypeScript application
- Server-side GitHub API proxy
- 60-second in-memory caching using NodeCache
- GitHub Personal Access Token authentication
- Debounced username suggestions
- Expandable repository details
- Language analytics dashboard
- Responsive design for desktop and mobile
- Deployed on Vercel and Render

---

## Features

### Core Features

* Search GitHub users by username
* Display user profile information

  * Avatar
  * Name
  * Bio
  * Followers
  * Following
  * Public repository count
* Display public repositories

  * Repository name
  * Description
  * Primary language
  * Star count
  * Last updated date
* Sort repositories by:

  * Stars
  * Name
  * Last Updated
* User-friendly error handling
* GitHub rate-limit handling

### Additional Features

* Server-side caching (60-second TTL)
* Repository "Load More" functionality
* Expandable repository details

  * Open issues
  * Fork count
  * Default branch
  * Visibility
  * Creation date
* Recently searched usernames (Local Storage)
* GitHub username suggestions with debounce
* Language distribution analytics
* Responsive UI for desktop and mobile devices
* GitHub API token authentication on the backend

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express
* TypeScript
* Axios
* NodeCache

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Architecture

```text
React Frontend
      │
      ▼
Node.js Express API
      │
      ▼
GitHub API
```

The frontend never communicates directly with GitHub.

Benefits:

* Secure API token storage
* Centralized error handling
* Server-side caching
* Reduced GitHub API requests
* Better rate-limit management

---

## Environment Variables

### Backend (.env)

```env
PORT=5000
CLIENT_URL=http://localhost:5173
GITHUB_TOKEN=your_github_personal_access_token
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

## How to Run Locally

### Clone Repository

```bash
git clone https://github.com/shivang0130/github-repo-explorer.git
cd github-repo-explorer
```

---

### Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Documentation

### Get GitHub Profile

#### Request

```http
GET /api/github/:username
```

#### Example

```http
GET /api/github/octocat
```

#### Response

```json
{
  "user": {
    "login": "octocat",
    "name": "The Octocat"
  },
  "repos": []
}
```

---

### Get Username Suggestions

#### Request

```http
GET /api/github/suggestions/:query
```

#### Example

```http
GET /api/github/suggestions/oct
```

#### Response

```json
[
  "octocat",
  "octodemo",
  "octokit"
]
```

---

### Get Repository Details

#### Request

```http
GET /api/repositories/:owner/:repo
```

#### Example

```http
GET /api/repositories/facebook/react
```

#### Response

```json
{
  "open_issues_count": 1200,
  "forks_count": 48000,
  "default_branch": "main",
  "visibility": "public"
}
```

---

## Project Structure

```text
github-repo-explorer/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── types/
│   │   └── App.tsx
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── types/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   └── package.json
│
└── README.md
```

---

## Caching Strategy

The application uses NodeCache with:

```text
TTL: 60 seconds
```

If the same GitHub username is requested within 60 seconds, the cached response is returned instead of making another GitHub API request.

Benefits:

* Faster responses
* Reduced GitHub API usage
* Better handling of rate limits

---

## Challenges & Decisions

### Why Use a Backend Proxy?

Instead of calling GitHub directly from the browser:

* GitHub token remains secure
* Cache can be implemented server-side
* API requests can be controlled centrally
* Better error handling

### Why Implement Debounced Suggestions?

* Reduces unnecessary API calls
* Improves user experience
* Makes username discovery easier

### Why Implement Server-Side Caching?

GitHub's unauthenticated API has strict rate limits.

Implementing a 60-second cache:
- Reduces API calls
- Improves response times
- Minimizes rate-limit issues
- Provides a better user experience

### Why Use a GitHub Token?

Public GitHub API requests can quickly hit rate limits in cloud environments.

Using a server-side token:
- Increases API limits
- Keeps credentials secure
- Prevents exposing secrets to the browser

---

## Future Improvements

If given additional time, I would implement:

* Unit and integration tests
* Skeleton loading components
* Repository search and filtering
* Docker containerization
* CI/CD pipeline using GitHub Actions
* AI-powered repository insights using LLM APIs to generate summaries of a user's GitHub activity and technology stack

---

## AI-Assisted Development

AI tools were used to accelerate development, debugging, architectural decision-making, and code review throughout the project. All generated code was reviewed, tested, and adapted to fit the application's requirements.

This reflects an AI-native development workflow while maintaining engineering ownership and code quality.

---

## Acknowledgements

* GitHub REST API
* React
* Express
* Tailwind CSS
* Recharts
* Axios

---

## Conclusion

This project demonstrates full-stack application development using modern TypeScript tooling, API integrations, caching strategies, responsive UI development, deployment workflows, and AI-assisted engineering practices.

The focus was not only on meeting the functional requirements but also on implementing production-oriented considerations such as caching, rate-limit handling, secure API access, and scalable architecture.

---

## Author

Shivang Gupta

Built as part of the Studio Graphene Full Stack Developer Assessment.
