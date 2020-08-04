const router = require('express').Router();

router.get('/todo', async (req,res) => {
    res.status(200).send("test string, all ok hello world lol");
});

module.exports = router;