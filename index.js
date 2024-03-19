function fizzBuzz(number){
    if (number % 3 == 0 && number % 5 == 0){
        //En el enunciado pone ahora que lo acabo de releer que no es ser multiplo de 15 
        //sino de 3 y de 5 al mismo tiempo (matemáticamente es lo mismo, pero asi queda más bonito)
        return "FizzBuzz"
    }

    if (number % 5 == 0){
        return "Buzz"
    }

    if (number % 3 == 0){
        return "Fizz"
    }
    return number
}
module.exports = fizzBuzz;