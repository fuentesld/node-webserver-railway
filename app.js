import 'dotenv/config'
import express from 'express'
import hbs from 'hbs'
import { URL } from 'url';

// const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

const port = process.env.PORT
const app = express()

app.set( 'view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use( express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre : 'Luis Fuehtes',
        titulo : 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre : 'Luis Fuehtes',
        titulo : 'Curso de Node'
    })
    // res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
        res.render('elements', {
            nombre : 'Luis Fuehtes',
            titulo : 'Curso de Node'
        })
    // res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404/index.html')

})

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
    
})