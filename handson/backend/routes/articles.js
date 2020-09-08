const express = require( 'express' );
const path = require( 'path' );

const mongoose = require( 'mongoose' );
const Article = mongoose.model( 'Article' );

const router = express.Router();

router.get('/', (req, res, next) => {
    Article
        .find()
        .exec((err, results) => {
            if(err){
                err.status = 500
                return next(err)
            }
            console.log(results)
            res.status(200).json(results)
        })
})

router.get('/:id', (req, res, next) => {
    var id = req.params.id
    Article
    .find({_id: id})
    .exec((err, results) => {
        if(err){
            err.status = 500
            return next(err)
        }

        res.status(200).json(results)
    })
})

router.post('/', (req, res, next) => {
    const product = req.body;

    if( !product ) {
        const err = new Error( 'Product should be included in request body' );
        err.status = 403;
        return next( err );
    }

    Product
        .create( product, ( err, productWithId ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status(201).json( productWithId );
        });
})

router.patch( '/:id', ( req, res, next ) => {
    const id = req.params.id;
    const product = req.body;

    if( !product ) {
        const err = new Error( 'Product should be included in request body' );
        err.status = 403;
        return next( err );
    }

    Product
        .findByIdAndUpdate( id, { $set: product } )
        .exec(( err, oldProduct, productWithUpdates ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 200 ).json( productWithUpdates );
        });
});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id;

    Product
        .findByIdAndRemove( id )
        .exec(( err, results ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 204 ).send( '' );
        });
});


module.exports = router