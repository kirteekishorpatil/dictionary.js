// var a=["dog","dog","cat","elephent","pearot","pearot","perot","perot","perot"]
// i=0
// b={}
// v=[]
// count=0
// while (i<a.length){
//     if (a[i].includes(v)){
//         v.push(a[i])
//         count=count+v
//     }
//     i=i+1


// }
// console.log(v)
// console.log(count)

// const quetions=(name)=>{
//     var a=["dog","dog","cat","elephent","pearot","pearot","perot","perot","perot"]
//     if (a[i]==="dog"){
//         return function()
//     }
// }

var c="Aabirurashid"
var u={}
var l=[]
for (i of c){
    if (l.includes(i)){
        u[i]=u[i]+1
    }
    else{
        l.push(i)
        u[i]=1
    }
}
console.log(l)