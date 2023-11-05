class Person{
    name;
    age;
    isAdult;
    hobbies;
    address;

    constructor(Uname,Uage,Uhobbies,Uaddress){
        this.name=Uname;
        this.age=Uage;
        this.hobbies=Uhobbies;
        this.address=Uaddress;
            }
getDetails(){
    return `my name is ${this.name}
            my age is  ${this.age}
            I have  ${this.hobbies.length} hobbies
            my home location is ${this.address.home}
            my office location is ${this.address["offc"]}`
}
getStatus(){
    let status=this.age>18?"Adult":"not a Adult";
    this.isAdult=status;
    return  `I am ${this.isAdult}`;
}

}
let member1=new Person("vidhya",21,["cooking","reading Books"],{home:"vellore",offc:"chennai"});
console.log(member1.getDetails());
console.log(member1.getStatus());
let member2=new Person("priya",17,["cooking","reading Books"],{home:"vellore",offc:"chennai"});
console.log(member2.getDetails());
console.log(member2.getStatus());
console.log(member1.getDetails());
console.log(member1.getStatus());