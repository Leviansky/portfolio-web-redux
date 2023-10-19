const route = require("express").Router();

route.get("/api", (req, res) => {
  res.status(200).json({
    message: `Server is Online`,
  });
});

const userRoute = require("./user");
const postRoute = require("./post");
// const roomRoutes = require("./room");
// const bookingRoute = require("./booking")

route.use("/api/users", userRoute);
route.use("/api/posts", postRoute);
// route.use("/api", roomRoutes);
// route.use("/api", bookingRoute)

module.exports = route;