# URL Shortener
This is a URL shortening tool built with Express.js and MongoDB.
The application allows users to input a long URL and generate a short URL.
<div style="display: flex;">
   <img src="https://github.com/user-attachments/assets/35d45ba7-53ba-4387-8864-6701782d8654" style="height: 400px;" />
</div>

## Feature
Input a long URL and generate a unique short URL.

## Tech Stack
- **Frontend**: HTML, CSS (Handlebars templating engine)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation & Setup
1. Clone this repository
```bash
git clone https://github.com/thisIsBun/url_shortener_express.git
cd url_shortener_express
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a .env file in the root directory and add the following content:
```bash
MONGODB_URI=your_mongodb_connection_string
```

4. Start the Server
```bash
npm run dev
```
By default, the server will run on http://localhost:3000.
