class Cat{
    constructor(tag, color, personality){
        this.tag = tag
        this.color = color
        this.personality = personality 
    }
}
const cat1 = new Cat('Buster', 'cream', 'batshitcrazy')
console.log(cat1)

const cat2 = new Cat('Mittens', 'black', 'calm & collected')
console.log(cat2)

function alter(){
}

const catArr = ['Buster', 'Mittens', 'Violet', 'Zeus', 'Miya', 'Pickle']
function getCat(arr){
    for(let i = 0; i < arr[i].length; i++)
        return arr[3]
}
console.log(getCat(catArr))

var catPerson = {
    cats:[]
}












// class CatOne extends Cat{
//     constructor(tag, color, personality){
//         this.tag = Buster;
//         this.color = cream;
//         this.personality = batshitcrazy;
//         this.canSit = true;
//     }
// }
// class CatTwo extends Cat{
//     constructor(tag, color, personality){
//         this.tag = Mittens;
//         this.color = black;
//         this.personality = collected;
//     }
// }