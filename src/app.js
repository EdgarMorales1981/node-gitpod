const express = require('express');
const app = express();
const Task = require('./model/Task');

//app settings
app.set('views',__dirname + '/views');
app.set('view engine','ejs')

//middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
const tasks  =  await Task.find();
res.render('index',{tasks});

})
// Create task 
app.post('/create', async(req, res) => {
    const newTask  = new Task({

        task: req.body.task,
        description: req.body.description
    })
    console.log(newTask);

    await newTask.save()
    res.redirect('/');

})
// STATIC FILES 
app.use(express.static(__dirname + '/public'))

module.exports = app;