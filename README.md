
# Bi-Cycle-store-B4A2V4

This is a NSQL backend project. This project name **Bi-Cycle-store-B4A2V4.** This is a bicycle store product related backend project. I used **Express**, **Mongoose**, **Typescript** and **mongodb uri** in this project. I ensured data integrity using Mongoose schema validation and I used **cors** for middleware in this project. For the .env file I used **dotenv**. I used **ts-node-dev** because It restarts target node process when any of required files changes and I used **eslint** to fix errors in my code and I used **.prettierrc** to keep the code format correct.

## Project Feature

This is a NSQL bicycle store backend project. The database is designed to accommodate flexibility, scalability, and support for a variety of features such as inventory management, sales tracking, and customer management.

**1. Inventory Management**
- Store and manage information about bicycles.
- Track stock levels, categories (e.g., mountain, road, BMX, etc.).
**2. Customer Management**
- Record customer information, purchase history, and preferences.
**3. Sales and Orders**
- Maintain orders (with multiple items in each order).
- Total revenue of orders.

## Installation Instructions
Follow these steps to install and set up the project on your local machine:

### Prerequisites
Make sure you have the following installed:

- **Node.js** (v20.18.0) [Download here](https://nodejs.org/en/download/package-manager)
- **Express** : [Install here](https://expressjs.com/en/starter/installing.html)
- **Mongoose** : [Install here](https://mongoosejs.com/docs/index.html)
- **Typescript** : [Install here](https://www.typescriptlang.org/download/)
- **Cors** : [Install here](https://www.npmjs.com/package/cors)
- **Dotenv** : [Install here](https://www.npmjs.com/package/dotenv)

---

### Steps to Install

**1. Clone the Repository**
```bash
git clone https://github.com/Antorkarmokar28/Bi-Cycle-store-B4A2V4.git

cd bicycle-store
```
**2. Install Dependencies Run the following command to install all required packages:**
```bash
npm install
```
**3. Set Up Environment Variables**
- Create a .env file in the root directory.
- Add the following variables: 
```bash
NODE_ENV= development
PORT=5000
DATABASE_URL=mongodb+srv://antorkarmokar28:Antor1324@cluster0.3x29n.mongodb.net/Bi-Cycle-store-B4A2V4?retryWrites=true&w=majority&appName=Cluster0
```
**4. Start the Application**
- For development mode:
```bash
npm run dev
```
- For production mode:
```bash
npm start
```
**5. Access the Application Open your browser and navigate to:**

```bash
http://localhost:5000

```
## Video link
https://drive.google.com/file/d/1uMn6sspJPL5Fdc7QmXJh9_rEiOPwAVlM/view?usp=sharing
