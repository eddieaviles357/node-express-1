const express = require('express');
let axios = require('axios');
const router = express.Router();

const URL = "https://api.github.com/users";

router.post('/', async (req, res, next) => {
    try {
        let {developers} = req.body;
        // handle multiple promises
        let results = await Promise.allSettled( 
                        developers.map( async (dev) => await axios.get(`${URL}/${dev}`) ) 
                        );
        // extract data from promise
        let out = results.map(({value}) => ({ name: value.data.name, bio: value.data.bio }));
        return res.status(200).json({data: out});
    } catch (err) {
        next(err);
    }
  });

module.exports = router;