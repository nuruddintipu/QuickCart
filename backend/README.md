# QuickCart Backend

This is the backend API service for the QuickCart mini e-commerce application, built using **Plain PHP + MySQL**.

##  Tech Stack

- PHP (no framework)
- MySQL
- RESTful Routing (custom PHP router)
- JSON API responses
- CORS enabled

---

## Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/nuruddintipu/QuickCart.git
cd quickcart/backend
```

### 2. Database setup
- Create a database named: quickcart
- You can import the schema from `backend/schema/schema.sql`
- Update 'config/dbConfig.php' if needed:
```bash
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'quickcart');

```

### 3. Set up the Server
```bash
php -S localhost:8000
```

### 4. Test API Endpoints

- Get all products
```bash
- GET http://localhost:8000/api/products
```

- Get a product by id
```bash
- GET http://localhost:8000/api/product/:id 
```

