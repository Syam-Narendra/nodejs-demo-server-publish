const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.get("/",(req,res)=>{
    res.send("Work")
})

app.listen(3000,()=>
    console.log("3000 Running")
)
