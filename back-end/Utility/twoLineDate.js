const twoLineDate = (mt5_Timestamp) => {
    // Extract individual date and time components
    var year = mt5_Timestamp.getFullYear();
    var month = ('0' + (mt5_Timestamp.getMonth() + 1)).slice(-2); // Months are zero-based
    var day = ('0' + mt5_Timestamp.getDate()).slice(-2);
    var hours = ('0' + mt5_Timestamp.getHours()).slice(-2);
    var minutes = ('0' + mt5_Timestamp.getMinutes()).slice(-2);
    var seconds = ('0' + mt5_Timestamp.getSeconds()).slice(-2);

    // Construct the formatted date string
    var formattedDate = year + '-' + month + '-' + day;
    var formattedTime = hours + ':' + minutes + ':' + seconds;

    // Push other values to respective arrays
    return formattedDate + '<br>' + formattedTime
}

module.exports = twoLineDate