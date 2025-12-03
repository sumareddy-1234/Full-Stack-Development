function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        console.log("Function1 Called");
        resolve({userroll:123})
    });
}
function getUserSubjects(useroll){
    return new Promise((resolve,reject)=>{
        console.log("Function2 Called");
        resolve({userSubId:'en-1'}) 
    });
}
function getSubjectDetails(userSubId){
    return new Promise((resolve,reject)=>{
        console.log("Function3 Called");
        resolve("Subject Details are here",userSubId);
    });     
}

getUserDetails(123)
.then((result)=>{
    return getUserSubjects(result.userroll);
})
.then((result)=>{
    return getSubjectDetails(result.userSubId);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log("Error is: ",error);
});