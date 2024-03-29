var Express = require('express');
 var multer = require('multer');
 var bodyParser = require('body-parser');
 var app = Express();
 app.use(bodyParser.json());

 var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({
    storage: Storage
}).array("imgUploader", 3); //Field name and max count

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/notific", function(req, res) {
    var a = 3;
    var b = 7;
    if(a < b)
    {
    res.sendFile(__dirname + "/insert.html");
    function alert()
    {
        alert("hello");
    }
    }

});
app.post("/api/Upload", function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
        //console.log("file uploaded sucessfully");
    });
});
// app.listen(3000, function(a) {
//     console.log("Listening to port 2000");
//     console.log(upload);
// });
app.listen(process.env.PORT, '0.0.0.0');
