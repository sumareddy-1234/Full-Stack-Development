function getUserDetails (id,getUserSubjects){
    console.log("function of getting user details from user id",id);
    getUserSubjects({userroll:"123"})
}
function getUserSubjects (userroll,getUserMarks){
    console.log("function of getting user marks from user details",userroll);
    getUserMarks({subid:"en-1"})
}
function getUserMarks (userSubId){
    console.log("function of getting marks from user subject id",userSubId);
}
getUserDetails("123",function(userroll){
    getUserSubjects(userroll,function(userSubId){
        getUserMarks(userSubId);
    })
});