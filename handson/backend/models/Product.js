const mongoose = require( 'mongoose' );

const imageSchema = new mongoose.Schema({
    url: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true
    }
})

const commentSchema = new mongoose.Schema({
    commenter:{
        type: String,
        required: true
    },
    title:{
        type: String
    },
    comment:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true
    },
})

const articleSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    abstract:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    imageUrl:{
        type: imageSchema,
        required: true
    },
})


mongoose.model( 'Article', articleSchema );