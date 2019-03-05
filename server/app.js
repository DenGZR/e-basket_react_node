import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config';
import routes from './routes';

// database
mongoose.Promise = global.Promise;
mongoose.set('debug', config.isProd);
mongoose.connection
  .on('error', error => console.log(error))
  .on('close', () => console.log('Database connection closed.'))
  .once('open', () => {
      const info = mongoose.connections[0];
      console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  });
mongoose
  .connect(
    config.isProd ? config.db.prod : config.db.dev,
    { useMongoClient: true }
  );

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));

app.use(cors());
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
