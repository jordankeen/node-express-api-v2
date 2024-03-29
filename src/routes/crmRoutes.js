import { addNewContact } from '../controllers/crmController';

const routes = (app) => {
	app.route('/contact')
	.get((req, res, next) => {
		// middleware
		console.log(`Request from: ${req.originalUrl}`)
		console.log(`Request type: ${req.method}`)
		// next gets us out of middleware, and on to next function
		next()
	}, (req, res, next) => {
		res.send('GET request successfull');
	})

	// POST endpoint
	.post(addNewContact);

	app.route('/contact/:contactId')
	.put((req, res) =>
	res.send('PUT request successfull'))

	.delete((req, res) =>
	res.send('DELETE request successfull'));


}

export default routes;