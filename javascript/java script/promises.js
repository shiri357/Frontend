// const newpromise = new Promise ((reslove,reject)=>{
    // setTimeout (()=>{
        // reslove("hello world")
    // },2)
// })
// newpromise
// .then((value)=>{console.log(value)})
// .catch((error)=>{console.log(error)})

const mypromise = new Promise((reslove,reject)=>{
    const randomNum=Math.random();
    if (randomNum>0.5){
        reslove("number is greater")
    }else{
        reject("smaller")
    }
})
mypromise
.then((value)=>{console.log(value)
    return "hello this siri"
})
.then(mess=>{console.log(mess)})
.catch((error)=>{console.log(error)})
