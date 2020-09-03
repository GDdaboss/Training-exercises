
//queries on shows.json
//6.1
db.shows.find({runtime:{$lt: 60}})
//6.a.2
db.shows.find({runtime:{$lt: 60, $gt: 30}}, {runtime: true})
//6.a.3
db.shows.find({"rating.average": {$gte: 8}}, {rating: true})
//6.a.4
db.shows.find({"rating.average": {$gt: 8, $lt: 9}}, {rating:true})
//6.a.5
db.shows.find({genres: "Horror"}, {genres: true})
//6.a.6
db.shows.find({genres: ["Horror"]}, {genres: true})

//extra
db.shows.find({genres: {$ne: "Horror"}}, {genres: true})

//6.b.1
db.shows.find({genres: {$in: ["Drama", "Horror"]}}, {genres: true})
//6.b.2
db.shows.find({type: {$in: ["Animation", "Reality"]}}, {type:true})
//6.b.3
db.shows.find({genres: {$nin: ["Drama", "Horror"]}}, {genres: true})
//6.b.4
db.shows.find({type: {$nin: ["Animation", "Reality"]}}, {type:true})
//6.b.5
db.shows.find({"network.name": {$nin: ["HBO", "FOX"]}}, {"network.name": true})

//6.c.1
db.shows.find(
    {
        $or: [
            {genres: "Drama"},
            {genres: "Horror"}
        ]
    }
)

//6.c.2
db.shows.find(
    {
        genres:
        {
            $not: {
                $in: ["Drama", "Horror"]
            }
        }
    }
)

//6.c.3
db.shows.find(
    {
        $and: [
            {genres: "Drama"},
            {genres: "Horror"}
        ]
    },
    {genres:true}
)

//6.c.4
db.shows.find(
    {
        $and: [
            {genres: "Drama"},
            {genres: {$ne: "Horror"}}
        ]
    },
    {genres:true}
)

//6.c.5
db.shows.find(
    {
        $or: [
            {genres: {$ne: "Drama"}},
            {genres: {$ne: "Horror"}}
        ]
    },
    {genres:true}
)

// 6.d.1
db.shows.find({
    webchannel: {
        $exists: true,
        $ne: null
    }
})

// 6.d.2
db.shows.find(
    {
    "webChannel.country": {
        $exists: true,
        $ne: null
    }},
    {"webChannel.country": true}
)

//6.d.3
db.shows.find(
    {
        webChannel: null
    },
    {webChannel: true}
)

// 6.e.1
db.shows.find(
    {
        name:{
            $regex: /Last/i
        }
    },
    {name: true}
)

//6.e.2
db.shows.find(
    {
        $expr:{
            $gt:[
                "$weight",
                {
                    $multiply: ["$rating.average", 10]
                }
            ]
        }
    },
    {weight: true, "rating.average": true}
)

//6.f.1
db.shows.find(
    {
        genres:{
            $all: ["Drama", "Horror"]
        }
    },
    {genres: true}
)

//6.f.2
db.shows.find(
    {
        "schedule.days": {
            $all: ["Monday", "Tuesday"]
        }
    },
    {"schedule.days": true}
)

//students collection

db.students.insertMany(
    [
        {
            name: "Ram",
            scores: [
                {subject: "History", score: 100},
                {subject: "Geography", score: 90}
            ]
        },
        {
            name: "Shyam",
            scores:[
                {subject: "History", score: 92},
                {subject: "Geography", score: 100},
                {subject: "English", score: 80}
            ]
        },
        {
            name: "Sita",
            scores:[
                {subject: "Commerce", score: 99},
                {subject: "Maths", score: 85},
                {subject: "English", score: 85}
            ]
        }
    ]
)

db.students.find(
    {
        "scores.subject": "History",
        "scores.score": {$gt: 90}
    }
)

db.students.find(
    {
        scores: {
            $elemMatch: {
                subject: "History",
                score: {$gt: 95}
            }
        }
    }
)

db.students.find(
    {
        scores:{
            $size: 2
        }
    }
)

db.shows.updateOne(
    {
        weight: {$lt: 40}
    },
    {
        $inc: {
            weight: -10
        },
        $set: {
            criticsChoice: true
        }
    }
)

db.shows.updateMany(
    {
        "schedule.days": "Monday"
    },
    {
        $set:{
            "schedule.days.$": 'monday'
        }
    }
)