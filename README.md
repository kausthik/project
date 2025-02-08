# ideabox - A Project Listing App's Frontend

Developing NodeJS environment `v18.16.0`

This project was bootstrapped with [ViteJS](https://vitejs.dev/)

---

The Project was initialized with the following configurations : 

```bash
npm create vite@latest
```
with a `React` framework + `Javascript` variant.

Linting was setup with ESLint with the following configurations : 
```bash
npm i eslint 
npm init @eslint/config
```
```bash
✔ How would you like to use ESLint? · To check syntax, find problems, and enforce code style
✔ What type of modules does your project use? · JS modules(import/export)
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No 
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
```

## Available scripts 

### `npm run dev`

Runs the app in the development mode.
Open http://localhost:5173 to view it in your browser.


---

## About project : 


- This is a frontend part of a fullstack application called **ideabox** - A Project Listing app. 
- This frontend has been integrated with a REST API developed in ExpressJS.
- The link to the REST API's repository is https://github.com/meetmakwana19/project-listing-backend
- The API's production link is https://projekto-backend.onrender.com/


---

---Ignore---

Unnecessary errors by ESLint :

> 'React' must be in scope when using JSX - eslint (react/react-in-jsx-scope) : this is making us import react in every component file.
