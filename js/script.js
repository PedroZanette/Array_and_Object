// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Pedro", true, 2, 4.125, [], "Frango do G"];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b","c","d","d"]

console.log(arr[0]);

console.log(arr[3]);

console.log(arr[89]);

// 3 - propriedades / props
const numbers = [5, 6, 2];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Pedro";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumber = numbers.concat(otherNumbers);

console.log(allNumber)

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"))


// 5 - objetos / object
const person = {
    name: "Pedro",
    age: 17,
    job: "Programador"
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);


// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object);


const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação
const a = {
    name: "Pedro",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 17;

console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array
const users = ["Pedro","João","Vitor","Gabriel"]

for(let i = 0; i < users.length; i++){
    console.log(`Listabdo o usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a","b","c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z","x","y");

console.log(array);


// 12 - shift e unshift

const letters = ["a","b","c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p","q","r");

letters.unshift("z");

console.log(letters);


// 13 - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate","Pera","Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);

console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));

// 14 - slice
const testeSlice = ["a","b","c","d","f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10,20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);