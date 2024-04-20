const express = require('express');
const connection = require('../connection');
const sma = require('../Module/sma');
const router = express.Router();

router.post('/getSMA', async (req,res)=>{
    try {
        const fromDate = req.body.from_date
        const toDate = req.body.to_date
        const timeFrame = req.body.time_frame
        const symbol = req.body.symbol
        const unit = req.body.unit
        
        const request = new connection.Request();

        request.input('param1', connection.Date, fromDate);
        request.input('param2', connection.Date, toDate);

        const stringQuery = 'SELECT top 4000 * FROM PRICE_DATA_' + symbol + '_' + timeFrame + ' ORDER BY mt5_Timestamp desc'

        const queryResult = await request.query(stringQuery);
        queryResult.recordset.reverse()

        const result = sma(queryResult.recordset, unit)
        res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;