// Generics

// A generic class to implement queue data structure?
class Queue<T>{
    private elements:T[]=[];
    enqueue(element:T):void{
        this.elements.push(element);
    }
    dequeue():T|undefined{
        return this.elements.shift();
    }
    peek():T|undefined{
        return this.elements[0];
    }
    isEmpty():boolean{
        return this.elements.length===0;
    }
    size():number{
        return this.elements.length;
    }
}

const users = new Queue<string>();
users.enqueue("Harshit Arora");
users.enqueue("Amandeep Singh");
users.enqueue("Hargun Singh");

// console.log(users.size());
// console.log(users.peek());
// console.log(users.dequeue());
// console.log(users.peek());
// console.log(users.isEmpty());



// A generic function to work only with that types that have charAtMethod in it?
type charAtMethod={
    charAt(index:number):string;
}

const isCharAtMethod = <T extends charAtMethod>(str:T):void=>{
    console.log(typeof str.charAt(0));
}

isCharAtMethod("Amandeep Singh");

// Decorators
// Implement  all decorators types

function MyDecorator(msg:string){
    return function(classCons:Function)
    {
        console.log(msg);
    }
}

function MyDecorator2(constructor:any,propertyName:string,description:PropertyDescriptor)
{
    console.log({constructor,propertyName,description});
}

function MyDecorator3(constructor:any,propertyName:string,positionOfParameter:number)
{
    console.log({constructor,propertyName,positionOfParameter});
}

@MyDecorator("User Class is Creating")
class User{
    name:string;
    private _email:string;
    constructor(n:string,e:string){
        this.name = n;
        this._email = e;
    }
    @MyDecorator2
    getDetails(this:User)
    {
        console.log(this)
    }
    @MyDecorator2
    set setEmail(s:string)
    {
        this._email = s;
    }
    logUser(@MyDecorator3 msg:string)
    {
        console.log("User is created successfully "+msg)
    }
}

// const user = new User("Amandeep","amandeep27803@gmail.com")
// user.logUser("Enjoy");

