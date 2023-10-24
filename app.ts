function add(n1:number, n2:number, showResult:boolean) {
    // if(typeof n1 !== "nubmer" || typeof n2 !== "number"){
    //     throw new Error("Incorrect input")
    // }
    return n1+n2
}
const number1 = "5"
const nubmer2 = 2.8
const printResult = true

const result = add(+number1, nubmer2, printResult)
console.log(result)

// const person: {
//   name: string;
//   age: number;
// } = {
    const person1 = {
        name: 'Maximilian',
        age: 30
      };
      
      console.log(person1.name);

      
    // const person: {
//   name: string;
//   age: number;
// } = {
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
  };
  
  let favoriteActivities: string[];
  favoriteActivities = ['Sports'];
  
  console.log(person.name);
  
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
  }
  
  // const person: {
//   name: string;
//   age: number;
// } = {
const person3: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
  };
  
  // person.role.push('admin');
  // person.role[1] = 10;
  
  // person.role = [0, 'admin', 'user'];
  
  let favoriteActivities1: string[];
  favoriteActivities = ['Sports'];
  
  console.log(person.name);
  
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
  }
  