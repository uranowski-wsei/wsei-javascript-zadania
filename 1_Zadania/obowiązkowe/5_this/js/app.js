//Task 0
let car = {
    brand: "Renault",
    color: "Red",
    numberOfKilometers: 0,
    printCarinfo() {
        return this.color+" "+this.brand+", "+this.numberOfKilometers+" km";
    },
    drive(distance) {
        this.numberOfKilometers = this.numberOfKilometers + distance;
    }
}

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

//Task 1
car.overview = ["01.02.2012", "03.04.2018"];

car.overviewUpdate = function(date) {
    this.overview.push(date)
}
    
car.overviewUpdate("05.06.2020");

car.printOverview = function() {
    for(let i=0; i<this.overview.length; i++)
        console.log(this.overview[i]);
}

car.printOverview();
    
  
//Task 3
var stairs={
    step:0,
    up:function(){
        this.step+=1;
    },
    down:function(){
        this.step-=1;
    },
    printStep:function(){
        console.log(this.step)
    }
};
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();
