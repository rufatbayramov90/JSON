const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
const obj = JSON.parse(data);
obj.id = 157;
obj.type = 'Change general';
obj.joke = 'Joke text';
console.log(obj)
const newData = JSON.stringify(obj);
console.log(newData);


const character1 = '{"agility": 15, "intelligence": 15, "strength": 150, "magicPower": 5500, "magicResist": 2000, "armor": true}';
const character2 = '{"agility": 20, "intelligence": 10, "strength": 150, "magicPower": 5000, "magicResist": 2500, "armor": true}';
const objChar1 = JSON.parse(character1);
const objChar2 = JSON.parse(character2);
objChar1.agility +=15 ;
objChar1.intelligence +=15;
objChar2.agility +=30 ;
objChar2.intelligence +=30;
console.log(objChar1);
console.log(objChar2);
const newCharacter1 = JSON.stringify(objChar1);
const newCharacter2 = JSON.stringify(objChar2);
console.log(newCharacter1);
console.log(newCharacter2);