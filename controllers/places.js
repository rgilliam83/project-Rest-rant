const { append } = require('express/lib/response');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('GET /places')
});



module.exports = router

