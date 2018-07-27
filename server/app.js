import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config';
import routes from './routes';

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
