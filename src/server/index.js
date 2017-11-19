const express = require('express'),
    items = require('./items'),
    path = require('path'),
    app = express(),
    public = path.resolve(__dirname, '../client/public');

// Set routes
app.use('/api/items', items);
app.use('/public', express.static(public));

// Set port 
app.set('port', (process.env.PORT || 5000));

// Set serve static, for / or *
app.get(/\/|\*/, function (request, response) {
    response.sendFile(public + '/index.html');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});