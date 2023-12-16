function studentGrade(score) {
    if (score>=79 && score <=100){
        return "A";
    }else if (score >=60 && score <79){
        return "B";
    }else if (score >=49 && score <60){
        return "C";    
    }else if (score >=40 && score <49){
        return "D";
    }else{
        return "E";
    }        
}

console.log(studentGrade(97));
console.log(studentGrade(65));
console.log(studentGrade(53));
console.log(studentGrade(45));
console.log(studentGrade(30));
