# Tech-Logistics Copilot Instructions

## Project Overview

This is a MERN stack e-commerce application with three distinct applications:

- **client frontend/**: Customer-facing React app (port 3000, "shoeshop")
- **dashboard/**: Admin React app (port 4000, "admin-dashboard")
- **server/**: Express.js API server (port 5000, default port 1000)

## Architecture & Data Flow

### Multi-App Structure

- **Client Frontend** → API calls to server:5000 → MongoDB
- **Admin Dashboard** → Proxy to localhost:5000 → MongoDB
- Both frontends share similar Redux patterns but have different reducers and actions

### Key Dependencies

- **Frontend**: React 17, Redux + Thunk, React Router v5, Axios
- **Backend**: Express, Mongoose, JWT auth, bcrypt, CORS
- **Shared**: Moment.js for dates, React-Toastify for notifications

## Code Patterns & Conventions

### Redux Structure

```
Redux/
├── store.js           # Combined reducers + localStorage persistence
├── Actions/           # Async thunks with axios calls
├── Constants/         # Action type constants (ALL_CAPS_SNAKE_CASE)
└── Reducers/          # Pure reducer functions
```

**Key Pattern**: Actions use `${EP}/api/endpoint` where EP is from `Redux/Url.js`

### API Routes Pattern

- Routes follow RESTful conventions: `/api/products`, `/api/users`, `/api/orders`
- All routes use `express-async-handler` for error handling
- Auth middleware: `protect` (JWT required), `admin` (admin role required)
- Pagination: `?pageNumber=1` (pageSize=12 for products)

### Component Structure

```
components/
├── LoadingError/      # Reusable loading/error components
├── homeComponents/    # Home page specific components
└── profileComponents/ # User profile components
```

### Authentication Flow

- JWT tokens stored in localStorage as `userInfo`
- Separate login flows for customer vs admin
- Token validation in Redux actions with auto-logout on failure
- Dashboard requires admin role verification

### Database Models

- **Product**: Has embedded reviews array, rating calculations
- **User**: Role-based (customer/admin), bcrypt passwords
- **Order**: References User, embedded shipping/payment info

## Development Workflow

### Initial Setup (3-year-old project needs updates)

```bash
# 1. Install dependencies for all apps
cd server && npm install
cd "../client frontend" && npm install
cd ../dashboard && npm install

# 2. Create server environment file
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI, JWT secret, and PayPal client ID

# 3. Start MongoDB locally (required)
# Install MongoDB Community Edition if not installed
# Then: mongod --dbpath /your/db/path

# 4. Import initial data (optional)
cd server && npm run start
# Visit http://localhost:5000/api/import to seed database
```

### Local Development

```bash
# Start all services (requires 3 terminals)
cd server && npm run server     # Backend with nodemon on :5000
cd "client frontend" && npm start  # Frontend on :3000
cd dashboard && npm start       # Admin on :4000
```

### Known Issues & Updates Needed

- **Security vulnerabilities**: 9 vulnerabilities in frontend packages
- **Outdated dependencies**: React 17 → 19, Redux patterns need modernization
- **React Router version mismatch**: Client uses v5, has v6 installed
- **Major updates available**: Express 4→5, Mongoose 7→8, React-Redux 7→9

### Environment Variables

**Server (.env required)**:

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT token generation
- `PAYPAL_CLIENT_ID`: PayPal integration key
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode

**Dashboard (.env exists)**:

- `REACT_APP_SERVER_URL`: API endpoint (http://localhost:5000)

### State Management

- Both apps persist cart items and user info to localStorage
- Dashboard only persists admin user info
- Redux DevTools enabled in development

## Key Conventions

### File Naming

- Components: PascalCase (`ContactInfo.js`)
- Screens: PascalCase with "Screen" suffix (`HomeScreen.js`)
- Models: PascalCase with "Model" suffix (`ProductModel.js`)
- Routes: camelCase with "Routes" suffix (`productRoutes.js`)

### API Response Format

- Success: Direct data or `{ products, page, pages }` for pagination
- Errors: `{ message: "Error description" }` with appropriate HTTP status

### Spanish Language Elements

- UI contains Spanish text (`"Contáctanos"`, `"Colombia"`)
- Consider this for new user-facing strings

## Integration Points

### PayPal Integration

- Client ID exposed via `/api/config/paypal` endpoint
- Uses `react-paypal-button-v2` package

### Image Handling

- Static images served from `public/images/` directories
- Product images stored as strings (likely file paths/URLs)

### Cross-App Communication

- No direct communication between client/dashboard
- All data flows through shared API server
- Admin actions affect customer-visible data immediately
