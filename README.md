# Admin App

## Installation

To set up the application, follow these steps:

1. **Clone the repository and install dependencies:**

   ```sh
   git clone https://github.com/Ranto-creat/React-admin
   npm install
   ```

2. **Set up the JSON server:**

   Open a new terminal and navigate to the server folder:

   ```sh
   cd React-admin/src/server/
   json-server --watch db.json -p 3004
   ```

3. **Start the React application:**

   In a new terminal, navigate to the application directory and run:

   ```sh
   cd React-admin/
   npm run dev
   ```

### Output

You should see output similar to this:

```sh
  VITE v5.4.14  ready in 1255 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.42.205:5173/
  ➜  press h + enter to show help
```

---