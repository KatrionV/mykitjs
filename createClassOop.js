class Animal{
    constructor(){
        age:10;
    }
    eat(){

    }
}

class Cat extends Animal{
    constructor(){
        super();
        this.mustache = true;
    }
    getVoice(){
        return 'mau!';
    }
}
 
class Dog {
    constructor(){
        this.tail = true;
    }
    getVoice(){
        return 'gaf!';
    }
}
var cat= new Cat();
var dog= new Dog();

cat1.__proto__ = animal;
