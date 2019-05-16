const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('*', function (req, res) {
    console.log(req.originalUrl);
    /*    const extOfUrl = req.originalUrl.split('.').pop();*/

    const indexOfExt = req.originalUrl.lastIndexOf('.');
    if (indexOfExt === -1) {
        return res.sendFile(path.join(__dirname + '/dist/BookShop/index.html'));
    }
    const extOfUrl = req.originalUrl.slice(indexOfExt + 1);


    const extensions = ['js', 'css', 'woff2'];
    for (let extension of extensions) {
        console.log(extension);
        if (extOfUrl === extension) {
            return res.sendFile(path.join(__dirname + '/dist/BookShop/' + req.originalUrl));
        }
    }
    return res.sendFile(path.join(__dirname + '/dist/BookShop/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

process.on('SIGTERM', function () {
    console.log('\ncaught SIGTERM, stopping gracefully');

    process.exit(1);
});