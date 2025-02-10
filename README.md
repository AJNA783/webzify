# webzify
# Theme Selection System

## Project Overview

The **Theme Selection System** is a web application that allows users to select website preferences from dropdown menus and view corresponding website template images based on their choices. Built using the MERN stack (with an in-memory data store instead of MongoDB), the project consists of:

- **Backend (Node.js + Express):**  
  Provides an API endpoint (`/api/images/get-approved`) that filters and returns approved website template images based on query parameters (website type and design tone).

- **Frontend (React):**  
  Presents an interactive user interface with creative styling, including a striking hero section, animated dropdowns, and a responsive image gallery. When a user selects their desired website type and design tone, the frontend calls the backend API to fetch and display relevant template images in real time.

This project is designed to offer a modern, attractive, and responsive experience, with a dark blue and cyan color scheme and smooth animations.

## Installation Steps

### Prerequisites

- **Node.js** (v12 or later) and **npm** must be installed on your machine.
- A code editor (like VS Code) is recommended.
- Basic knowledge of terminal/command prompt usage.

### 1. Clone the Repository

Clone this repository to your local machine using Git:


2. Setup and Run the Backend
Open a terminal and navigate to the backend folder:


cd theme-selection-system/theme-selection-backend
Install the backend dependencies:


npm install
Start the backend server:


node index.js
You should see a message similar to:

Server is running on http://localhost:5000
(Optional) Test the API by visiting the following URL in your browser:

http://localhost:5000/api/images/get-approved?websiteType=E-commerce&designTone=Professional
This should return a JSON array containing the matching image object(s).

3. Setup and Run the Frontend
Open a new terminal window and navigate to the frontend folder:


cd theme-selection-system/theme-selection-frontend
Install the frontend dependencies:


npm install
Start the React development server:


npm start
This should automatically open your application in your default web browser at http://localhost:3000.

4. Using the Application
Select Options:
Use the dropdown menus to choose the website type (e.g., E-commerce, Service-Based, Informative) and the design tone (e.g., Professional, Playful and Chill, Relax).

View Templates:
Once both selections are made, the frontend will call the backend API and display the corresponding website template images in an attractive gallery.

Interactive UI:
Enjoy the modern, responsive design complete with animations and hover effects.

Additional Information
Technologies Used:
Frontend: React, Axios, CSS (with custom animations and responsive design)
Backend: Node.js, Express, CORS
Customization:
You can update the in-memory data in the backend (index.js) to add more template images or adjust the filtering logic as needed.
Feedback & Contributions:
Feel free to open issues or submit pull requests if you have any suggestions or improvements.
License
This project is licensed under the MIT License. See the LICENSE file for details.

---







