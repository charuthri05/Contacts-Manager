# Contact List Manager

A full-stack web application enabling users to manage their contacts efficiently. Built with a React frontend and a Ruby on Rails API backend using an in-memory SQLite database.

---

## Features

- Add new contacts with validation
- View all contacts in a list
- Responsive search by name or email (supports partial matches and typos)
- Prevent duplicate email entries
- Delete existing contacts
- Minimal, responsive UI
- Dynamic page titles
- Backend tests with RSpec

---

## Tech Stack

| Layer       | Technology           | Version      |
|-------------|----------------------|--------------|
| Frontend    | React                | 18.x         |
| Routing     | React Router DOM     | 6.x          |
| HTTP Client | Axios                | Latest       |
| Backend     | Ruby on Rails (API)  | 7.x          |
| Language    | Ruby                 | 3.x          |
| Database    | SQLite               | In-Memory    |
| Styling     | Inline CSS           | —            |
| Fuzzy Search| fuzzy_match (Ruby)   | Latest       |
| Testing     | RSpec                | 3.x          |

---

## API Endpoints

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| GET    | /contacts?search=     | List all contacts with search filter |
| POST   | /contacts             | Add a new contact                    |
| DELETE | /contacts/:id         | Delete a contact by ID               |

---

## Design Principles

- Separation of Concerns: React handles the UI, Rails manages the API logic
- RESTful API structure
- Validations enforced on both frontend (JS) and backend (Rails)
- Typo-tolerant fuzzy search using the `fuzzy_match` gem
- Minimal and accessible UI design
- Backend test coverage with RSpec

---

## Folder Structure

```
contact-manager/
├── contact-manager-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── AddContact.jsx
│   │   │   └── ContactList.jsx
│   └── App.jsx
├── contact-manager-backend/
│   ├── app/
│   │   ├── models/contact.rb
│   │   └── controllers/contacts_controller.rb
│   └── spec/models/contact_spec.rb
```

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/charuthri05/Contacts-Manager.git
cd contacts-manager
```

### Backend (Rails API)

1. Navigate to the backend folder:
   ```
   cd contacts-backend
   ```

2. Install dependencies:
   ```
   bundle install
   ```

3. Migrate the database schema:
   ```
   rails db:migrate
   ```

4. Start the Rails server:
   ```
   rails server
   ```
   The API will run at: `http://localhost:3000`

---

### Frontend (React App)

1. Navigate to the frontend folder:
   ```
   cd contacts-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React app:
   ```
   npm start
   ```
   The app will run at: `http://localhost:3001`

---

## Running Backend Tests

To run backend tests using RSpec:

```
cd contact-manager-backend
bundle exec rspec
```

Tests include:

- Name and email presence validation
- Email format validation
- Unique email constraint

---

## Trade-offs and Limitations

- Uses in-memory SQLite DB: data resets on server restart
- No authentication/login system
- Fuzzy search implemented client-side and server-side for small datasets

---

## Contact

For any questions, feel free to reach out via:

- GitHub: charuthri05
- Email: charuthriabburi05@gmail.com
