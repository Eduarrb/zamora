import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import expressEjsLayouts from 'express-ejs-layouts';

import landingRoute from './routes/landingRoute.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRETO,
        key: process.env.KEY,
        resave: false,
        saveUninitialized: false,
    })
);

app.use(csurf({ cookie: true }));


app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use('/', landingRoute);

app.listen(process.env.PORT, () => {
    process.env.TZ = 'Etc/Universal'
    console.log(`corriendo en ${process.env.PORT}`);
});