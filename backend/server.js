const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}


//connect to database
connectDatabase();

//cloudinary.config({
  //cloud_name: process.env.CLOUDINARY_NAME,
  //api_key: process.env.CLOUDINARY_API_KEY,
  //api_secret: process.env.CLOUDINARY_API_SECRET,
//});

cloudinary.config({ 
  cloud_name: 'djzhlu7l4', 
  api_key: '537241533133814', 
  api_secret: 'C6fQKXaKz0Umq0_p2KqCUmFeo6c' 
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
})