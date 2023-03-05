class Garage {
    constructor (capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add (newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Vehicles only please!"
        }
        if (this.vehicles >= this.capacity){
            return "No more room in this garage!";
        }
        this.vehicles.push(newVehicle);
        return "Congrats on the new vehicle!";
    }
}

class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk (){
        return "Beepbeep!!"
    }

    toString (){
        return (`The vehicle is a ${this.make} ${this.model} from ${this.year}.`)
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
    super(make,model,year);
    this.numWheels=4;
    } 
}

class MotorCycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOOOOOOOOOMMMMMM!!!!";
    }
}

let myFirstGarage = new Garage(4);

let myFirstMotorcycle = new MotorCycle("Yamaha", "Vstar 600 Classic", 2007);

let myFirstCar = new Car("Honda", "Pilot", 2001);

let myFirstVehicle = new Vehicle("Toyota", "Tacoma", 2011);