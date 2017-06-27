'use strict';
const storage = require('@google-cloud/storage');

const gcs = storage({
    projectId: 'issuu-hackathon-06-17',
    keyFilename: __dirname + '/config.json',
});

const bucketName = 'custom-covers';
const bucket = gcs.bucket(bucketName);

function getPublicUrl(fileName) {
    return `https://storage.googleapis.com/${bucketName}/${fileName}.jpeg`;
}

function uploadToGcs(fileName, cb) {
    bucket.upload(`${__dirname}/../../${fileName}.jpeg`, (err, file) => {
        if (err) {
            console.error(err);
        }
        cb(getPublicUrl(fileName));
    });
};

module.exports = uploadToGcs;
