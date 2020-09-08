require( './data/init' );

const path = require( 'path' );
const express = require( 'express' );
const articlesRouter = require( './routes/articles' );

// Express Application object
const app = express();

app.use( '/', ( req, res, next ) => {
    console.log( 'Received req at', (new Date()).toTimeString() );
    
    next();

    console.log( 'Response sent at', (new Date()).toTimeString() );
});

app.use( express.urlencoded() );
app.use( express.json() );
app.use( '/articles', articlesRouter );

app.use(( req, res, next ) => {
    const error = new Error( 'Page not found' );
    error.status = 404;

    next( error );
});

app.use(( error, req, res, next ) => {
    res.status( error.status || 500 ).send( error.message );
});

const PORT = 4201;

app.listen( PORT, ( err ) => {
    if( err ) {
        return console.error( err.message );
    }

    return console.log( `server started at http://localhost:${PORT}/` );
});