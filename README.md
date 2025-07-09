# ArtikelBoost

**ArtikelBoost** is a language-learning application designed to help learners master German noun articles (der, die, das) and their grammatical cases more intuitively.

This project aims to simplify the process of understanding how articles change across different cases — **Nominativ, Akkusativ, Dativ, and Genitiv** — using color cues, examples, and structured presentation.

For demonstration purposes, only a limited set of data is included in this repository. In a full-scale version, the app supports hundreds of words with detailed case information, plural forms, and contextual example sentences.

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

## About the Project

The project is built using **React** and **Tailwind CSS**, with routing handled by **React Router**. All data is stored in structured **JSON** format, including articles, grammatical cases, plurals, meanings, and example sentences. A lightweight **Flask** backend is used to manage and serve the word data efficiently.

## Built with

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
[![Python](https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=%23ffffff)](https://www.python.org/)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![JSON](https://img.shields.io/badge/format-JSON-yellowgreen)](https://www.json.org/)

## Get Started

### Prerequisites

To able to run this project you will need Node.js and Python 3 installed on your computer.

### Installation

Create a virtual environement for the "backend" folder below:

```bash
py -m venv venv
```

Active the environment:

```bash
.\venv\Scripts\activate
```

Then, install dependencies:

```bash
py -m pip install -r requirements.txt
```

Install the requirements for the "frontend" folder below:

```sh
npm install
```

## Usage

You can start the frontend server with

```sh
npm run dev
```

And after activating the environment, backend server with

```bash
flask run
```

Finally, you must have both servers up and running to app work.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2025 Mert Evirgen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

Mert Evirgen - evrgnmert@gmail.com<br><br>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/evirgenmert/)

