const person = {name: 'Jack Willam', age:17, job:'facebooker', gfName:'ema watson', address:'kochu khet', phone:'01712211221', friends:['tom hancks', 'tom cure', 'tomas boy']}; 

const { phone, gfName, address, salary } = person; 
// const gfName = person.gfName; 
// const phone = person.phoen; 

// console.log(gfName, phone, salary, address); 
// console.log(gfName, salary, phone); 


const complexObject = {
    name:'abc', 
    info: {
        address: 'kola bangan', 
        leader:'tiger leader'
    }
}

const {leader} = complexObject.info; 
console.log(leader); 

const friends = ['sakib khan', 'arman khan', 'amir khan', 'salman khan', 'sharukh khan']; 
const [ chotoFriend, ...older ] = friends; 
console.log(chotoFriend); 
console.log(older); 
