import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import routes from './routes';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
