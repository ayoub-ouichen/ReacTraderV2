const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/getData', async (req,res)=>{
    try {
            // To Do ...
        } catch (err) {
            return res.status(500).json({ success: false, message: err });
        }
    }
);

module.exports = router;