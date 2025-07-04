# QuickCart – Mini E-Commerce SPA

This is a **mini e-commerce Single Page Application (SPA)** built using React (Frontend) and plain PHP (Backend).

It allows users to browse products, view product details, manage a cart via sidebar, and simulate checkout. 

###  Live Demo: [https://apiquickcart.infinityfreeapp.com/](https://apiquickcart.infinityfreeapp.com/)  

## Folders
- `/frontend` – ReactJs frontend directory
- `/backend` – PHP backend directory to serve products

## Tech Stack
### Frontend
- **Framework:** React.Js
- **Libraries:** React Redux, Axios, React-DOM, React-Bootstrap
- **Bundler:** Vite
- **Styling:** Bootstrap and CSS

### Backend
- **Language:** PHP
- **Database:** MySQL
- RESTful Routing (custom PHP router)
- PDO for secure DB connection


###
## Features Overview

### Home Page
- Lists featured products (cards)
- Responsive grid layout
- "View All Products" button

### Product Catalog Page
- Shows all products with grid
- Each product includes: image, name, price, add to cart

### Product Details Page
- Full product info: name, price, description, brand, category, stock, rating
- Add to cart button

### Cart Sidebar
- Slide-in sidebar with cart items
- Increase/decrease quantity
- Remove item
- Total amount calculated
- Clear cart button
- Proceed to Checkout button

### Checkout Modal
- Triggered from cart sidebar
- Form fields: Name, Email, Address
- Simulate order placement
- Clears cart on successful submit



###
## How to Run Locally
### Backend (PHP)
1. Clone the Repo and navigate to the backend directory
```bash
  git clone https://github.com/nuruddintipu/QuickCart.git
  cd QuickCart/backend
```

2. Database setup
- Create a database named: quickcart
- You can import the schema from [`backend/schema/schema.sql`](https://github.com/nuruddintipu/QuickCart/blob/master/backend/schema/schema.sql)
- Update 'config/dbConfig.php' if needed:
```bash
  define('DB_HOST', 'localhost');
  define('DB_USER', 'root');
  define('DB_PASS', '');
  define('DB_NAME', 'quickcart');
```

3. Set up the Server
```bash
  php -S localhost:8000
```

4. Test API Endpoints
- Get all products
```bash
  GET http://localhost:8000/api/products
```

- Get a product by id
```bash
  GET http://localhost:8000/api/products/:id 
```


### Frontend (React + vite)
1. Clone the Repo and navigate to the frontend directory
```bash
  git clone https://github.com/nuruddintipu/QuickCart.git
  cd QuickCart/frontend
```
### 2. Install all dependencies with:
 ```bash
   npm install
   ```
### 3. Development Server

Run the following command to start the development server:
```bash 
   npm run dev
```
- Update BASE_URL at [frontend/src/services/api.jsx](https://github.com/nuruddintipu/QuickCart/blob/master/frontend/src/services/api.jsx) to point to the backend server if needed

-By default, the application will be available at: [http://localhost:3000](http://localhost:3000)

### Build for Production
To create an optimized build, run:
```bash 
   npm run build
```
The production-ready files will be generated in the `dist` directory.



## Author
- Name: Nuruddin Tipu
- Github: https://github.com/nuruddintipu
- Email: nuruddintipu.connect@gmail.com
