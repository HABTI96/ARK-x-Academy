
function factorial(n){
    let fct = 1
    for (let i = 1; i <= n; i++)
    {
        fct = fct * i
    }
    return fct
}

function combinator(n, p){
    let c = factorial(n)/(factorial(p) * factorial(n-p))
    // console.log(c)
    return c
}

// combinator(5, 2)

//=======Task3============
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
        
        console.log(combinator(a,b))
    }
}
calculator(5,'c', 2)