// console.log(Math.floor(Math.random() * 4) )
let array = []
while(array.length!==4){
    let random = Math.floor(Math.random() * 4) 
    if(!array.includes(random)){
        array.push(random)
    }
}
export default array;