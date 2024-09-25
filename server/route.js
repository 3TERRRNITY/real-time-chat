const express = require('express');

const router = express.Router();

router.get("/", (request, response) => {
   response.send("Стой!")
})

module.exports = router;