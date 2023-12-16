function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    //right speed below 70//
    if(speed <= speedLimit){
        return "OK";
    //overspeeding more than 70//    
    }else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if  (demeritPoints <= 12) {
            return ("Points:" + demeritPoints)
        }else{
            return ("License suspended");
        }
    }
}
console.log(speedDetector(50))
console.log(speedDetector(80))
console.log(speedDetector(140))