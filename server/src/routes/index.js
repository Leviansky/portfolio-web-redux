const route = require("express").Router();

route.get("/api", (req, res) => {
  res.status(200).json({
    message: `Server is Online`,
  });
});

const userRoute = require("./user");
const postRoute = require("./post");
const educationRoute = require("./education");
const experienceRoute = require("./experience");
const organitationRoute = require("./organitation")

route.use("/api/users", userRoute);
route.use("/api/posts", postRoute);
route.use("/api/educations", educationRoute);
route.use("/api/experiences", experienceRoute)
route.use("/api/organitations", organitationRoute)

module.exports = route;