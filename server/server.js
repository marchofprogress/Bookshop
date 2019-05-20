const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// localstring: './../frontend/dist/BookShop/'

router.get('*', function (req, res) {
    console.log(req.originalUrl);
    /*    const extOfUrl = req.originalUrl.split('.').pop();*/

    const indexOfExt = req.originalUrl.lastIndexOf('.');
    if (indexOfExt === -1) {
        return res.sendFile(path.join(__dirname + './../bookshop/index.html'));
    }
    const extOfUrl = req.originalUrl.slice(indexOfExt + 1);


    const extensions = ['js', 'css', 'woff2'];
    for (let extension of extensions) {
        console.log(extension);
        if (extOfUrl === extension) {
            return res.sendFile(path.join(__dirname + './../bookshop/' + req.originalUrl));
        }
    }
    return res.sendFile(path.join(__dirname + './../bookshop/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 4202);

console.log('Running at Port 4202');

process.on('SIGTERM', function () {
    console.log('\ncaught SIGTERM, stopping gracefully');

    process.exit(1);
});