const AWS = require("aws-sdk");
const config = require("../Util/config");

AWS.config.update({
  secretAccessKey: config.S3_SECRET_ACCESS_KEY,
  accessKeyId:config.S3_ACCESS_KEY,
  region:config.S3_BUCKET_REGION,
});

var s3 = new AWS.S3();

const handleFileUpload = (req,res) =>{
  console.log("req._id",req.body._id)
  console.log("req.file",req.file)
  const {originalname,buffer} = req.file;
  let params = {
    Bucket:config.S3_BUCKET,
    Key:originalname,
    Body:buffer,
  }

s3.upload(params,async(err,result) =>{
  if(err){
    res.status(500).json({
      message:"Failed to upload",
      error:err.message,
    });
  }
    res.send({imagePath : `https://pictures-upload-ubereats.s3.us-west-1.amazonaws.com/${result.Key}`})
});

};

module.exports = {
  handleFileUpload,
}
