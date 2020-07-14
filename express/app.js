const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',(req, res, next) => {
    console.log("Always runs");
    next();
});

app.use('/add-product',(req, res, next) => {
console.log("hi There");
res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

app.use('/product',(req, res, next)=> {
    console.log(req.body);
    res.redirect('/')

});
app.use((req, res, next)=>{
 res.send('<h1>Hello from express</h1>');
});
app.listen(3000);
