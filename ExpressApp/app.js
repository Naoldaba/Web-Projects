const express=require('express')
const app=express();
const mongoose= require('mongoose')
const blogRoutes=require('./routes/blogRoutes')

app.set('view engine', 'ejs');
//listen for port

const dbURL="mongodb+srv://nahafile:aldebaran@cluster0.navdefh.mongodb.net/nodejs"

mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>{
    app.listen(3000,()=>{
        console.log('listening')
    })
}).catch((err)=>{console.log(err)})

//to provide css and other static data
app.use(express.static('public'))

//to accept data
app.use(express.urlencoded({extended: true}));

app.use((req,res,next)=>{
    console.log("new request made")
    console.log("host:" + req.hostname)
    console.log("path:"+req.url)
    console.log("method:"+req.method)
    next()
}) 

app.get('/',(req,res)=>{
    //res.send('<p>Home Page </p>')
    res.redirect('/blogs');
   
})

app.get('/about',(req,res)=>{
    //res.send('<p>Home Page </p>')
    res.render('about',{title: "About"})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

app.use("/blogs",blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title: '404'})
})
