const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Jimp = require('jimp');


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
    console.log('PARAMS EHRE...', req.body);

    Jimp.read('https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg', function(err, baseImg) {
        Jimp.read('https://image.isu.pub/170222230433-2130d4614f32687b188cacfc01ff5a2c/jpg/page_1_thumb_large.jpg', function(err, image1) {
            Jimp.read('https://image.isu.pub/170222230433-2130d4614f32687b188cacfc01ff5a2c/jpg/page_3_thumb_large.jpg', function(err, image2) {
                baseImg.resize(640, 414);
                baseImg.composite(image1, 0, 0);
                baseImg.composite(image2, 320, 0);

                const file = "composited-cover." + baseImg.getExtension();
                baseImg.write(file);
            })
        });
    });


    res.send({ content: 'hello world' })
});

module.exports = app;
