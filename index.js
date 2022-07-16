/**
 * Initialize Express JS
 * */
const express = require("express");
const app = express();
app.use(express.json()); // Use JSON
app.use(express.static("./public")); // Access static files

/**
 * Enable Environment Variables
 * */
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;

/**
 * Enable Cross-origin resource sharing (CORS)
 * */
const useCors = require("./config/cors");
useCors(app);

// Import all data
const allCategories = require("./src/categories");
// Get all categories
app.get("/categories", (req, res) => {
    res.json(allCategories);
});

// Get single category
app.get("/categories/:id", (req, res) => {
    let result = allCategories.find((category) => {
        return category.id == req.params.id;
    });

    if (typeof result !== 'object') {
        result = {};
    }

    res.json(result);
});

// Get Activities from a category
app.get("/activities/:id", (req, res) => {
    let result = allCategories.find((category) => {
        return category.id == req.params.id;
    });

    if (typeof result !== 'object') {
        result = {};
    }

    res.json(result);
});

app.listen(PORT, function() {
    console.log(`Web server listening on port: ${PORT}`);
});