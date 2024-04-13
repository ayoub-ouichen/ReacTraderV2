const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/getPrice', async (req,res)=>{
    try {
        const fromDate = req.body.from_date
        const toDate = req.body.to_date
        const timeFrame = req.body.time_frame
        const symbol = req.body.symbol
        
        const request = new connection.Request();

        request.input('param1', connection.Date, fromDate);
        request.input('param2', connection.Date, toDate);

        const stringQuery = 'SELECT * FROM PRICE_DATA_' + symbol + '_' + timeFrame + ' WHERE mt5_Timestamp BETWEEN @param1 and @param2'

        const queryResult = await request.query(stringQuery);

        // Initialize arrays for each property
        const x = [];
        const close = [];
        const high = [];
        const low = [];
        const open = [];

        // Iterate over the data and extract values
        queryResult.recordset.forEach(item => {
            // Extract date
            const date = new Date(item.mt5_Timestamp);
            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            
            // Push date to x array
            x.push(formattedDate);

            // Push other values to respective arrays
            close.push(item.mt5_Close);
            high.push(item.mt5_High);
            low.push(item.mt5_Low);
            open.push(item.mt5_Open);
        });

        // Create an object with the desired format
        const result = {
            x: x,
            close: close,
            high: high,
            low: low,
            open: open
        };

        res.status(200).json(result);

    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;