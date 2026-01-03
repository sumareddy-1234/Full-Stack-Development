import student from "../models/studentsModels.js";

const getStudentsDetails = (req, res) => {
    const mydata = {name: "thub", roll: "1234"}; //db
    res.send(mydata);
};
const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    // const addeddata = await student.create(data);
    const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
const getStudentById = async (req, res) => {
    try{
        const id = req.params.userid;
        console.log("id :", id)
        const data = await student.findById({_id: id});
        console.log(data);
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
// This is for testing 👀⁉️
const getStudentsDetailsWithFilters = async(req, res) => {
    try{
        const {stdBranch, stdCollege, stdCgpa} = req.query;
        console.log("stdBranch :", stdBranch);
        console.log("stdCollege :", stdCollege);
        console.log("stdCgpa :", stdCgpa);
        res.status(200).json("success");
    }catch(error){
        res.status(500).json({error: error.message})
    }

};
const updateStudents=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=req.body;
        const updatedData=await student.findOneAndUpdate({stdRoll:id},data);
        //const updatedData=await student.findByIdAndUpdate({_id:id},data,{new:true})
        if(!updatedData){
            return res.status(404).json({message:"user not existed"});
        }
        
        res.status(200).json({student: updatedData,message:"student Updated"})
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

};
export {getStudentsDetails, addStudents,getStudentById, getStudentsDetailsWithFilters,updateStudents};