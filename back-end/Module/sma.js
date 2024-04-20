// Simple Moving Average Function

const twoLineDate = require("../Utility/twoLineDate")

const sma = (data, unit) => {
    const firstStep = unit - 1
    const smaDataX = []
    const smaDataY = []
    for (let index = firstStep; index < data.length; index++) {
        var sum = 0
        for (let index2 = index; index2 >= index - firstStep; index2--) {
            sum = sum + parseFloat(data[index2]['mt5_Close']);
        }

        const averagePrice = (sum/unit)
        
        let mt5_Time = twoLineDate(data[index]['mt5_Timestamp'])

        smaDataX.push(mt5_Time)
        smaDataY.push(averagePrice)
    }
    return {x: smaDataX, y: smaDataY}
}

module.exports = sma