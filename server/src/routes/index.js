const route = require("express").Router();

route.get("/api", (req, res) => {
  res.status(200).json({
    message: `Server is Online`,
  });
});

const userRoute = require("./user");
// const friendlistRoute = require("./friendlist");
// const roomRoutes = require("./room");
// const bookingRoute = require("./booking")

route.use("/api/user", userRoute);
// route.use("/api/friendlist", friendlistRoute);
// route.use("/api", roomRoutes);
// route.use("/api", bookingRoute)

module.exports = route;