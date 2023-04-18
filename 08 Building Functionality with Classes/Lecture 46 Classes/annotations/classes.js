// Classes are blueprint or a model of sorts that we're going to use to create an object that has some different fields and methods
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('driving now!');
    };
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
