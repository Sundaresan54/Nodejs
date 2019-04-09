const express = require ('express');
const app = express();
const fs = require('fs');



const PORT = process.env.PORT||3001;
app.listen(PORT,console.log(`listening on ${PORT}`))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const path = './sample.json'

try {
  if (fs.existsSync(path)) {
      console.log("already present");
    //file exists
  }
  else{
      var data={
        name: 'Mike',
        age: 23,
        gender: 'Male',
        department: 'English',
        car: 'Honda'
    };
    fs.writeFile('sample.json', JSON.stringify(data),'utf-8', (err,data)=>{

        console.log("created");
    });
  }
} catch(err) {
  console.error(err)

}



app.get('/', (req,res)=>{
    fs.readFile('sample.json',(err,data)=>{
        let sun = JSON.parse(data);
        console.log("hello")
        res.json(sun);

     });

});

 app.post('/add', (req,res)=>{
   var userName = req.query.username;
fs.readFile('sample.json', function (err, data) {
    var json = JSON.parse(data);
    json.push(' Username: ' + userName);
    fs.writeFile("sample.json", JSON.stringify(json), function(err){
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });

});
});
 
