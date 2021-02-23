function countdown(num) {
    if(num <= 0) {
        console.log('All done!');
        return;
    } 

        console.log(num);
        num -= 1;
        countdown(num)
};

countdown(5)