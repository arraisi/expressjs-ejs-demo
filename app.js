const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
	const mahasiswa = [
		{
			nama: 'Abdul R. Arraisi',
			email: 'abdul@mail.com'
		},
		{
			nama: 'Erik',
			email: 'erim@mail.com'
		},
		{
			nama: 'Dodi',
			email: 'dodi@mail.com'
		}]
	res.render('index', {
		nama: 'Abdul R. Arraisi',
		title: 'Home',
		mahasiswa,
		layout: 'layouts/main'
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		layout: 'layouts/main'
	})
})

app.get('/contact', (req, res) => {
	res.render('contact', {
		title: 'Contact',
		layout: 'layouts/main'
	})
})

app.use('/', (req, res) => {
	res.status(404)
	res.send('<h1>404</h1>')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})