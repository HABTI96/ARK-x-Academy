let n = 5

function factorial(n){
    let p = 1
    for (let i = 1; i <= n; i++)
    {
        p = p * i
    }
    console.log(p)
}

factorial(5)
//-----------------------------------


function nDigits(Number){  
    if (Number < 10){
        console.log("1")
    }
    else{
        let cnt = 1
        while(cnt){
            Number = Number/10
            cnt++
            if (Number < 10)
            {
                break
            }
        }
        console.log(cnt)
    }
}

nDigits(5656)
//-----------------------------------


function numberToDay(number){
    switch (number){
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednsday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default:
            console.log("Unvalid Day")
    }    
}
numberToDay(6)
//-----------------------------------


function myGrade(score){
    if (score < 0 || score > 100){
        console.log("the note should be less than 100 and great than 0")
    }
    else if (score > 85){
        console.log("grade is A.")
    }
    else if (score <= 85 && score > 70){
        console.log("grade is B.")
    }
    else if (score <= 70 && score > 50){
        console.log("grade is C.")
    }
    else if (score <= 55 && score > 40){
        console.log("grade is D.")
    }
    else if (score <= 40 && score > 15){
        console.log("grade is E.")
    }
    else{
        console.log("grade is F.")
    }
}

myGrade(8)
//-----------------------------------

function max(a, b, c){

if (a > b && a > c){
    console.log(a)
}
else if (b > a && b > c)
{
    console.log(b)
}
else {
    console.log(c)
}
}

max(5,6,19)