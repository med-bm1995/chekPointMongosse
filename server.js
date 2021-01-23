const express = require("express");
const connectDB = require("./config/connectDB");
const Person = require("./module/Person");

connectDB();
//Create a person having this prototype:
/*const newperson = new Person({
    name:'mohamed',
    age:25,
    favoriteFoods:["makrona","pizza"]
})
newperson.save((err,data)=>{
    err?console.log(err):console.log(data)
})*/

//Create Many Records with model.create()
//const person =Person.create({name:"test1",age:23,favoriteFoods:["makrona","pizza"]},{name:"test2",age:26,favoriteFoods:["laznia","mhamsa"]})
//console.log(person)

//Use model.find() to Search Your Database

Person.find((err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

//Use model.findOne() to Return a Single Matching Document from Your Database
/*
Person.findOne({name:"test1"},(err,data)=> {
    if (err) {
        console.log(err)
    }
    console.log(data)
})

//Use model.findById() to Search Your Database By _id
/*
Person.findById({_id:"60098017b499bd2c88b7f83f"},(err,data)=> {
    if (err) {
        console.log(err)
    }
    console.log(data)
})*/
//Perform Classic Updates by Running Find, Edit, then Save
//Person.findOneAndUpdate( {_id:"60098017b499bd2c88b7f83f"}, { $set: { favoriteFoods : "homberger"}}, )
