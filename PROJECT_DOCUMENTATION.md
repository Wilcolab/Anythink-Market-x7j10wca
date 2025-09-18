# Anythink Market Project Documentation

## Overview

Anythink Market is a full-stack web application powered by [Wilco](https://www.trywilco.com). It consists of a Node.js/Express backend and a React/Redux frontend, orchestrated via Docker Compose for easy development and deployment.

## Architecture

- **Backend:** Node.js with Express, MongoDB (via Mongoose), Passport for authentication, JWT, and RESTful API routes.
- **Frontend:** React SPA with Redux for state management, supporting user authentication, item management, profiles, and more.
- **Database:** MongoDB, managed as a service in Docker Compose.
- **Containerization:** All services (frontend, backend, database) are containerized for local development and cloud deployment.

## Setup & Development

1. **Clone the repository**
2. **Start with Docker Compose:**

   ```bash
   docker compose up
   ```

   This will start all services (frontend, backend, database).
3. **Development Workflow:**
   - For new features or bug fixes, create a branch and open a pull request against `main`. Add `@vanessa-cooper` as reviewer.

## Backend Details

- Entry: `backend/app.js`
- Config: `backend/config/`
- Models: `backend/models/`
- Routes: `backend/routes/`
- Error Handling: Custom middleware for Mongoose validation errors.
- See `backend/README.md` for more details.

## Frontend Details

- Entry: `frontend/src/index.js`
- Components: `frontend/src/components/`
- State: `frontend/src/store.js`, `frontend/src/reducers/`
- Pages: Home, Login/Register, Settings, Editor, Item, Profile
- See `frontend/readme.md` for more details.

## Testing

- End-to-end tests and documentation are in the `/tests` directory.
- Frontend and backend have their own test setups.

## Additional Resources

- [Backend README](backend/README.md)
- [Frontend README](frontend/readme.md)
- [Docker Compose File](docker-compose.yml)

## Contact

For questions or issues, open a GitHub issue or contact the project maintainers.
