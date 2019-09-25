const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT||3000


// Define path for express config
const publicDirPath  = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

// Define handlebar engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath) 
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))


app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Shubham Jain'
    })
})

app.get('/about',(req,resp)=>{
    resp.render('about',{
        title:' About Weather',
        name:'Shubham Jain'
    })
})

app.get('/help',(req,resp)=>{
    resp.render('help',{
        title:'Help Section',
        name : 'Shubham Jain',
        MobileNo : 9630833902
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast : 'Cloudy',
        location : 'Ujjian'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:404,
        name : 'Shubham Jain',
        errorMessage : 'Help article not found'
    })
    // res.send('Help Article not found')
})

app.get('*',(req,res)=>{
    // res.send('404 page')
    res.render('404',{
        title:404,
        name:'Shubham Jain',
        errorMessage:'Page not found'
    })
})

app.listen(port,()=>{
    console.log('Server is up on port'+port)
})






