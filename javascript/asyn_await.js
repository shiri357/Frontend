?/*function fetchdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve("user data received"), 1000);
        
    });
}
function fetchpost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve("postdata received"), 500);
        
    });
}*/
fetchdata()
  .then((userdata)=>{
    console.log(userdata);
    return fetchpost();
  })
  .then((postdatamess)=>{
    console.log(postdatamess);
  })
  .catch((error)=>{
    console.log(error);
  })
 async function myasync() {
  try{
    let userdata=await fetchpost()
    console.log(data);
  }catch (error){
    console.log(error);
  }
    
  }