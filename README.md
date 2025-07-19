# Joke Finder Project

<img width="881" height="453" alt="image" src="https://github.com/user-attachments/assets/24a89931-72d4-4f06-adf9-b1e3ab25a404" />

<img width="1369" height="797" alt="image" src="https://github.com/user-attachments/assets/5eac87e3-fd46-42f4-8910-bfad9ac3f058" />

<img width="975" height="782" alt="image" src="https://github.com/user-attachments/assets/6eac82c6-8a5d-430f-9e67-56d486f8faf4" />



A simple web application that fetches and displays jokes from the [JokeAPI](https://v2.jokeapi.dev/). Users can enter a keyword (such as their name or any word), and the app will return a joke containing that keyword.

---

## Features

- **Keyword Search:** Enter a word or name to find jokes containing that keyword.
- **Live Joke Fetching:** Uses JokeAPI to fetch jokes dynamically.
- **User-Friendly Interface:** Clean and simple UI built with EJS templates.
- **Error Handling:** Displays a message if no joke is found or if an error occurs.

---

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Axios (for API requests)
- body-parser

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-github-username>/joke-finder-project.git
   cd joke-finder-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```

4. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
joke-finder-project/
├── public/           # Static files (CSS, images, etc.)
├── views/            # EJS templates
│   └── index.ejs
├── index.js          # Main server file
├── package.json
└── README.md
```

---

## Author

Developed by [Bahaa Jber](https://github.com/BahaaJber1).
