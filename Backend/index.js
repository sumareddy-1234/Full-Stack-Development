const express=require("express")
const app=express()
const FirstRoute=require("./routers/FirstRoute")
app.use("/",FirstRoute);
app.listen(9000, () => {
    console.log("server Started at port 9000")
});