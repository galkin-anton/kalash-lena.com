const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const rootFolderName = process.env.BUILD_DIRECTORY || 'dist';
// configuration
const config = {
  s3BucketName: process.env.BUCKET_NAME,
  folderPath: `./${rootFolderName}`, // path relative script's location
};

// initialize S3 client
const s3Config = {
  signatureVersion: 'v4',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};
const s3 = new AWS.S3(s3Config);

//remove this log in production
// Github show  **** instead of your keys(some privacy things), so //don't panic if you see your password like that
console.log('s3 config ', s3Config);
// resolve full folder path
const distFolderPath = path.join(__dirname, config.folderPath);

uploadDirectoryFiles(distFolderPath);

function uploadDirectoryFiles(distFolder) {
  const files = fs.readdirSync(distFolder);
  if (!files || files.length === 0) {
    console.log(
        `provided folder '${distFolder}' is empty or does not exist.`);
    return;
  }
  for (const fileName of files) {
    // get the full path of the file
    const filePath = path.join(distFolder, fileName);
    // If it was directory recursively call this function again
    if (fs.lstatSync(filePath).isDirectory()) {
      uploadDirectoryFiles(filePath);
      continue;
    }
    uploadFile(filePath, fileName);
  }

}

function uploadFile(filePath, fileName) {
  const relativeFilePath = `${__dirname}/${rootFolderName}/`;
  const fileKey = filePath.replace(relativeFilePath, '');
  console.log({fileName, filePath, fileKey});
  const metaData = getContentTypeByFile(fileName);
  const fileContent = fs.readFileSync(filePath);
  // upload file to S3
  s3.putObject({
    Bucket: config.s3BucketName,
    Key: fileKey,
    Body: fileContent,
    ContentType: metaData,
  }, (err, res) => {
    if (err) {
      return console.log('Error uploading file ', err);
    }
    console.log(`Successfully uploaded '${fileKey}'!`, {res});
  });

  function getContentTypeByFile(fName) {
    let rc = 'application/octet-stream';
    const fileNameLowerCase = fName.toLowerCase();

    if (fileNameLowerCase.indexOf('.html') >= 0) {
      rc = 'text/html';
    } else if (fileNameLowerCase.indexOf('.css') >= 0) {
      rc = 'text/css';
    } else if (fileNameLowerCase.indexOf('.json') >= 0) {
      rc = 'application/json';
    } else if (fileNameLowerCase.indexOf('.js') >= 0) {
      rc = 'application/x-javascript';
    } else if (fileNameLowerCase.indexOf('.png') >= 0) {
      rc = 'image/png';
    } else if (fileNameLowerCase.indexOf('.jpg') >= 0) rc = 'image/jpg';

    return rc;
  }
}