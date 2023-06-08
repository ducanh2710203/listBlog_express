const express = require('express');
const app = express();
const port = 8080;
const multer = require('multer');
const bodyParser = require('body-parser')

const upload = multer()
app.set('view engine', 'ejs');
app.set("views",'./views')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/',(req, res) =>{
    res.render("home")
})
let arrBlog= [];
app.get('/blog' , (req, res) => {
    res.render("listblog",{arrBlogs: arrBlog})
})


app.post('/blog',(req, res) =>{
    let blog = {
        title : req.body.title,
        content : req.body.content
    }
    arrBlog.push(blog)
    res.redirect('/blog')
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
