const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/crawler.html"), (err) => {
    // console.log(err);
  });
});

router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
