ues persons 

db.persons.insertOne({
    name: "John",
    age: 32
})

db.person.find()
db.person.find().pretty() //formatted in a better way

db.person.insertOne({
    name: "Jane",
    age: 28,
    spouse: ObjectId("5f4f3aeea0770c3a87f3609d") 
})

db.persons.insertOne({
    name: "Jack",
    age: 4,
    numTeeth: {
        milk : 4,
        molar : 2
    }
})

db.person.insertOne({
    name: "Bran",
    age: 10,
    favoriteToys: [
        {name: "bat", likes: 9}, 
        {name: "ball", likes: 7}, 
        {name: "train", likes: 10}]
})

db.person.findOne(
    {name: "John"}

)


const filterDoc = {name: "John"}
const updateDoc = {name: "Jonathan"}

db.person.updateOne(filterDoc, updateDoc)

for(let i = 0; i < 1000; i++){
    db.testData.insertOne({
        name: 'company' + i,
        price: parseInt(Math.random()*1000)
    })
}