import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
// below is where you would be cloud base server or external server
mongoose.connect('mongodb://localhost/CRMdb', {
	useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
	res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`Your server is running on port ${PORT}`)
);