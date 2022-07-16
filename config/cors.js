// Import files
const cors = require("cors");
/**
 * @param app - Instance of express app
 * @return function - userCors()
 * */
const useCors = (app) => {
    const allowedOrigins = process.env.CORS_ORIGINS ?
        process.env.CORS_ORIGINS.split(",") :
        [];
    app.use(
        cors({
            origin: function(origin, callback) {
                // allow requests with no origin
                // (like mobile apps or curl requests)
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            },
        })
    );
};

module.exports = useCors;