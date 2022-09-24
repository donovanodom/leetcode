const ParkingSystem = function(big, medium, small) {
   this.spaces = [big, medium, small] 
}

ParkingSystem.prototype.addCar = function(carType) {
    if(this.spaces[carType - 1]){
       this.spaces[carType - 1]--
        return true
    }else{
        return false
    }
}