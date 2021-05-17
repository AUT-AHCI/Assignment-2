const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
var cors = require('cors');
const path = require('path');
const { notFound, errorHandler } = require('./middleware/error');

dotenv.config();

const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//ROUTES
// app.use('/api/articles', bookRoutes);
//app.use('/api/users', userRoutes);

//Check production or dev
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(path.resolve(), '/frontend/build')));

	app.get('*', (req, res) => res.sendFile(path.resolve('frontend', 'build', 'index.html')));
} else {
	app.get('/', (req, res) => {
		res.send('is this thing on');
	});
}

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is running on the port ${port}`));
