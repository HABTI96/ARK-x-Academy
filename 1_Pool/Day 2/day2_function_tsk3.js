function calculator(a,op,b){
    if (op == '+'){
        add = a + b
        console.log(add) 
    }
    else if (op == '-'){
        sub = a - b
        console.log(sub)
    }
    else if (op == '*'){
        mult = a * b
        console.log(mult)
    }
    else if (op == '/'){
        div = a / b
        console.log(div)
    }
    else if (op == '%'){
        mod = a % b
        console.log(mod)
    }
    else if (op == 'c'){
        
        console.log(combinator)
    }
}
calculator(2,'-', 5)