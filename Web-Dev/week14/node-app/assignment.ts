//interface and type
//  create two types User and Admin 
// Create a function that takes either user or admin as arguments , and returns a string like 'Welcome, [name]'


type User ={
    name: string;
    age: number;
}

type Admin = {
    name: string;
    age: number ;
    role: string;
}

// union 

type UserorAdmin = User | Admin

function greetNew (u: UserorAdmin)  {
return console.log(`Welcome, ${u.name}`)
}

let newUser :User= {
    name: 'John Doe',
    age: 30,
}


let result = greetNew(newUser)


// Note : interface can be implemented by classes but type can be implemented
// types let you do union and intersection but interface don't , the internal properties can do this in the interface but at the root lavel it dont allows