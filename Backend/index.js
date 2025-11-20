console.log("Ana are mere")
const express=require("express")
let app=express()
app.get("/", function(req, res){
    res.send("ana are mere")
})
app.listen(4000)