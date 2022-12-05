const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
const obj = JSON.parse(data);
obj.id = 157;
obj.type = 'Change general';
obj.joke = 'Joke text';
console.log(obj)
const newData = JSON.stringify(obj);
console.log(newData)