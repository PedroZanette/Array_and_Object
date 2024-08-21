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

