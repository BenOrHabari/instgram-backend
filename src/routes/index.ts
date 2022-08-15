const authRoutes = require('./auth-routes.ts');
const postingRoutes = require('./post-routes');

module.exports = function loadRoutes(app){
        authRoutes(app);
        postingRoutes(app);
};