# QuickCart

A simple Single Page Application built using React (Frontend) and plain PHP (Backend) for Qtec Solution assessment.

This project is part of the Qtec Solution Limited Frontend Developer Assessment.

## Folders
- `/frontend` – React app using Vite
- `/backend` – Plain PHP APIs to serve product data

## Tech Stack
### Frontend
- **Framework:** React.Js
- **Libraries:** Redux Toolkit, Axios, React-DOM
- **Bundler:** Vite
- **UI-Components:** React-Bootstrap
- **Styling:** Bootstrap and CSS

### Backend
- **Language:** PHP
- **Data Storage:** MySQL

## How to Run Locally
### Backend (PHP)
1. Ensure PHP and Apache installed on your system
2. Navigate to the 'QuickCart/backend/' directory
3. Start the PHP server using following command:

```bash
php -S localhost:8000
```

### Frontend (React)
1. Ensure you have Node.js and npm installed
2. Navigate to the 'QuickCart/frontend' directory
3. Install necessary dependencies by running:

```bash
npm install
```
4. Update the BASE_URL in the 'QuickCart/frontend/src/services/api.jsx' if needed to point to the backend
5. Start the React development server using:
```bash
npm run dev
```
6. The frontend will now be running on 'http://localhost:3000' by default

## Key Endpoints
- GET **http://localhost:8000/api/products** Fetches the list of products
- GET **http://localhost:8000/api/products/:id** Fetches an individual product

## Author
- Github: https://github.com/nuruddintipu
- Email: nuruddintipu.connect@gmail.com
