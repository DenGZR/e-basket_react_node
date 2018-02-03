import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import config from './config';
import routes from './routes';
import accessControlAllow from './middlewares/accessContolAllow';

// const db = mongoose.connect(config.db.development);
const app = express();

app.set('views', './server/views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(accessControlAllow);

/* Routes */
app.use('/', routes);

// /* Static */
// app.use(express.static('client/build'));
//
// app.get('/admin/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// TODO add only for test

app.use((err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message
  });
});


app.listen(config.server.port, () => console.log(`server start on port: ${config.server.port}`));
