function fizzbuzz() {
    for(let i=1; i<120; i++) {
        if(i % 3 == 0) {
            console.log('Fizz');
        } else if(i % 5 == 0) {
            console.log('Buzz');
        } else if(i % 7 == 0) {
            console.log('Whizz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();