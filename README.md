# Dribbble

# React + Vite

It's a multiple login page. Where user can successfully log into there id and can create an id.

# Installation
For running my react app I've used vitejs.dev. it's a site help to create react app faster with good pluggins and easy user interface.

1.first you need to run the command "npm create vite@latest"
2.Then you have to type a project name.
3.Then you have to select react by moving the arrow down to react.
4.Then you have to select javascript by moving the arrow down to javascript.
5.Then you have to close your react app and need to open folder again.
6.After that run an install command npm install.
7.And after that write npm run dev to start the localhost server.

# For Tailwind Installation

Visit to Tailwindcss site,then open docs from navbar. Rest of the steps are mentioned below:

1.Then open the frameworks guide and open Viteframework.
2.From there run this command "npm install -D tailwindcss postcss autoprefixer"
3.After installing that run "npx tailwindcss init -p"
4.After that copy paste this code into tailwindconfig file and save it with ctrl+S
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
5.In last step you need to copy paste this code into index.css after removing all the css 
@tailwind base;
@tailwind components;
@tailwind utilities;

and now you can use tailwind in your code.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
