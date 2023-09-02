const router = require("express").Router()
const userRoutes = require("./user-routes")
const commentRoutes = require("./comment-routes.js")
const postRoutes = require("./post-routes.js")




router.use("/user", userRoutes)
router.use("/comment", commentRoutes)
router.use("/post", postRoutes)



module.exports = router;