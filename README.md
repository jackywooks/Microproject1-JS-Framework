# Fruit Information Web Application

A simple web application that provides information about various fruits through a REST API and static web pages. This project is built using Express.js and serves as a demonstration of basic web server functionality with static file serving and API endpoints.

## Features

- Static web pages for different sections:
  - Home page
  - Fruit information page
  - Farm information page
  - API documentation page
- REST API endpoint (`/api/fruits`) that serves fruit data
- Responsive web design
- JSON-based data storage

## Technologies Used

- Node.js
- Express.js
- Nodemon (for development)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jackywooks/Microproject1-JS-Framework.git
   ```

2. Install dependencies:
   ```bash
   npm install express
   npm install nodemon --save-dev
   ```

3. Add NodeMon as a dependency in package.json, inside the script object
    ```
    "start": "nodemon",
    ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Project Structure
├── app.js # Main application entry point
<br>
├── data/
<br>
│ └── fruit.json # Fruit data storage
<br>
└── public/ # Static files directory
<br>
  ├── index.html
<br>
  ├── fruit.html
<br>
  ├── farm.html
<br>
  └── api.html

## Available Routes
- `/` - Home page
- `/fruit` - Fruit information page
- `/farm` - Farm information page
- `/api` - API documentation page
- `/api/fruits` - REST API endpoint for fruit data

## API
### GET /api/fruits
Returns a list of fruits with their properties:
- Name
- Color
- Size(cm)
- Origin

Image Resource:
<br>
Index:
<br>
Photo by <a href="https://unsplash.com/@ja_ma?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jacopo Maiarelli</a> on <a href="https://unsplash.com/photos/assorted-fruits-at-the-market--gOUx23DNks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
Fruits:
<br>
Photo by <a href="https://unsplash.com/@priscilladupreez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Priscilla Du Preez 🇨🇦</a> on <a href="https://unsplash.com/photos/one-red-apple-CoqJGsFVJtM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
<br>
Photo by <a href="https://unsplash.com/@khlebnikovayulia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Yulia Khlebnikova</a> on <a href="https://unsplash.com/photos/blueberries-in-bowl-and-white-surface-oh5MXKl9OHo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
<br>
Photo by <a href="https://unsplash.com/@dorner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mike Dorner</a> on <a href="https://unsplash.com/photos/riped-banana-on-pink-surface-sf_1ZDA1YFw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
<br>
Photo by <a href="https://unsplash.com/@jannerboy62?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nick Fewings</a> on <a href="https://unsplash.com/photos/a-pile-of-carrots-sitting-next-to-each-other-d9gDUaDpnes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
<br>
Photo by <a href="https://unsplash.com/@enginakyurt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">engin akyurt</a> on <a href="https://unsplash.com/photos/sliced-green-fruit-on-white-surface-jPVcZsxRGJo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
<br>
Photo by <a href="https://unsplash.com/@nachoargenta?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nacho Domínguez Argenta</a> on <a href="https://unsplash.com/photos/grapes-F_ilCik66Hg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Farm:
<br>
Photo by <a href="https://unsplash.com/@francesgunn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Frances Gunn</a> on <a href="https://unsplash.com/photos/barn-surrounded-by-trees-QcBAZ7VREHQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
