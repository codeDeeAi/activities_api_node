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
const allActivities = require("./src/activities");
// Get all categories
app.get("/categories", (req, res) => {
    res.json(allCategories);
});

// Get single category
app.get("/categories/:id", (req, res) => {
    let result = allCategories.find((category) => {
        if (req.query.search == "name") return category.name == req.params.id;
        return category.id == req.params.id;
    });

    if (typeof result !== "object") {
        result = {};
    }

    res.json(result);
});

// Get Activities from a category
app.get("/activities/:category", (req, res) => {
    // Get category
    let category = allCategories.find((category) => {
        if (req.query.category == "name")
            return category.name == req.params.category;
        return category.id == req.params.category;
    });

    if (typeof category !== "object") return res.status(404);

    let categoryActivities = allActivities.find((activities) => {
        if (activities.category_id == category.id) return activities;
    });

    let result = [];
    // Add request filters
    let random = req.query.random == "true" ? true : false;

    if (random == true) {
        let randomActivity =
            categoryActivities.activities[
                Math.floor(Math.random() * categoryActivities.activities.length)
            ];
        result.push(randomActivity);
    } else {
        result = categoryActivities.activities;
    }

    res.json(result);
});

app.listen(PORT, function() {
    console.log(`Web server listening on port: ${PORT}`);
});