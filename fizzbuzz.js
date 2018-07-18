function fizzbuzz() {
    for(let i=1; i<120; i++) {
        let added = "";
        if(i % 3 == 0) {
            added += 'Fizz';
        }
        if(i % 5 == 0) {
            added += 'Buzz';
        }
        if(i % 7 == 0) {
            added += 'Whizz';
        } 
        if(added == "") {
            console.log(i);
        } else {
            console.log(added);
        }
    }
}

fizzbuzz();