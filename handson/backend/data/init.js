const mongoose = require('mongoose');

// create models
require( '../models/Product' );

mongoose.connect( 'mongodb://localhost/handsonDb', { useNewUrlParser: true } );

const connection = mongoose.connection;

connection.on( 'error', ( err ) => {
    console.error.bind( console, 'connection error:', err.message );
    process.exit( 0 );
});

connection.on('open', function() {
  console.log( 'connected to mongodb database' );
});
