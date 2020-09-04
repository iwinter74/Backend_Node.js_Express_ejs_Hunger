const express = require('express')
const navigation1 = require('./navigation1.json')
const navigation2 = require('./navigation2.json')
const pizzas = require('./pizzas.json')

const app = express()
app.listen(3000, (req, res) => {
    console.log('Server started')
})
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Homepage', nav1: navigation1, nav2: navigation2 })
})
app.get('/about', (req, res) => {
    res.render('about', {title:'About page', nav1: navigation1, nav2: navigation2})
})
app.get('/team', (req, res) => {
    res.render('team', {title: 'Team page', nav1: navigation1, nav2: navigation2})
})
app.get('/booking', (req, res) => {
    res.render('booking', {title: 'Booking page', nav1: navigation1, nav2: navigation2})
})
app.get('/menu', (req, res) => {
    res.render('menu', {title: 'Menu page', nav1: navigation1, nav2: navigation2, pizzas: pizzas})
})
app.get('/galerie', (req, res) => {
    res.render('galerie', {title:'Galerie page',nav1: navigation1, nav2: navigation2})
})
app.get('/events', (req, res) => {
    res.render('events', {title:'Events page', nav1: navigation1, nav2: navigation2})
})
app.get('/contact', (req, res) => {
    res.render('contact', {title:'Contact page', nav1: navigation1, nav2: navigation2})
})
app.use((req, res) => {
    res.render('404', {
        title:'not_found', nav1: navigation1, nav2: navigation2})
})




  