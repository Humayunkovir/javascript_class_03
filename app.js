function showGrade(number){
    
    if (number >= 0 && number <33){
        console.log('F Grade');
    }
    else if (number >= 33 && number <40){
        console.log('D Grade');
    } 
    else if (number >= 40 && number <50){
        console.log('C Grade');
    }
    else if (number >= 50 && number <60){
        console.log('B Grade');
    }
    else if (number >= 60 && number <70){
        console.log('-A Grade');
    }
    else if (number >= 70 && number <80){
        console.log('-A Grade');
    }
    else if (number >= 80 && number <90){
        console.log ('A Grade');
    }
    else if (number >= 90 && number <100){
        console.log('+A Grade')
    }
}
showGrade(99);

let x = 100 + 50;
console.log(x);