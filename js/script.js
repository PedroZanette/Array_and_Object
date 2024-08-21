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

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    { title: "Primeiro post", category: "PHP"},
    { title: "Segundo post", category: "JavaScript"},
    { title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW")
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// Métodos de String

// 18 - trim
const trimTest = " testando \n ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 19 - padstart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, "0");

console.log(testPadEnd);

// 20 - split
const frase = "O rato comeu a roupa do rie de Roma"

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra =  `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "testando ";

console.log(palavra.repeat(5))

// Back to Array and Object

// 23 - rest operator

const somaInfinita = (...args) => {

    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(15354, 253435543, 3534554, 3535354, 9988821));

// 24 - for of
const  somaInfinita2 = (...args) => {

    let total = 0

    for(num of args) {
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 4));

console.log(somaInfinita2(1, 99, 31, 56));

// 25 - destructuring em objetos
const userDatails = {
    fistName: "Pedro",
    lastName: "Zanette",
    job: "Garçom", 
}

// const firstName = userDetails.fistName;

const { fistName, lastName, job } = userDatails;

console.log(fistName, lastName, job);

// renomear variaveis
const { fistName: primeiroNome } = userDatails;

console.log(fistName);

console.log(primeiroNome);

// 26 - destructuring com arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson = '{"name": "Pedro", "age": 32, "skills": ["PHP", "JavaScript", "Pyhton"]}';

console.log(myJson);

console.log(typeof myJson);

// 28 - JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

// JSON invalido
const badJson = '{"name": Pedro , "age": 17}';

// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true;

console.log(myObject)

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);