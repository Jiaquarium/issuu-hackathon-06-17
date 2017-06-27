const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Jimp = require('jimp');

const uploadToGoogleCloudStorage = require('./google-api/img-upload');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST', 'OPTIONS');
    next();
});

app.get('/', function(req, res) {
    res.send({ content: 'hello world' });
});

app.post('/', function(req, res) {
    const fileName = `${Date.now()}-custom-cover`;

    Jimp.read('https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg', function(err, baseImg) {
        Jimp.read(req.body.pageOneToMerge, function(err, image1) {
            Jimp.read(req.body.pageTwoToMerge, function(err, image2) {
                baseImg.resize(640, 414);
                baseImg.composite(image1, 0, 0);
                baseImg.composite(image2, 320, 0);

                const file = `${fileName}.` + baseImg.getExtension();
                baseImg.write(file);

                uploadToGoogleCloudStorage(fileName, url => res.send({ content: url }));
            });
        });
    });

});

module.exports = app;
