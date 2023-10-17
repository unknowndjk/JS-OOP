class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this.color);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
    conclution(){
        return "Testcase done";
    }
}

var train4 = new Train('red', false);

class HighSpeedTrain extends Train{
    constructor(passengers,speed,color,lightsOn){
        super(color,lightsOn);
        this.passengers = passengers;
        this.speed = speed;
    }
    highdetails(){
        // console.log(this.lightsOn);
        console.log("High coloer is " + 
                    this.color + " and speed " + this.speed);
    }
    HighLightStatus(){
        super.toggleLights();
        super.lightsStatus();

    }
    testreturn(){
        var hehe = this.conclution();
        console.log(hehe);
    }
}

class SecondTrain extends HighSpeedTrain{
    constructor(typee,color,speed){
        super(color,speed);
        this.color = color;
        this.typee = typee;
    }
    details(){
        
        console.log("Type is: " + this.typee + " and color is: " + 
        this.color + " speed is: " + this.speed );
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var hightrain = new HighSpeedTrain(34,200, "red", true); 

console.log(train4.toggleLights()); // undefined
console.log(train4.lightsStatus());// Lights on? true
console.log(train4.getSelf()); // Train {color: 'red', lightsOn: true}
console.log(typeof(train4.getPrototype())); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

hightrain.highdetails();
hightrain.HighLightStatus();
hightrain.testreturn();

var sctrain = new SecondTrain("modern","Pink",200);

sctrain.details();

sctrain.getPrototype();

