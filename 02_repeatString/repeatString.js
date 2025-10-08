const repeatString = function(word, num) {

    let wordsContainer = '';

    if(num < 0) {
        return 'ERROR';
    }
    else{
        for(let index = 0; index < num; index++){

        wordsContainer += word;

    }
    return wordsContainer;
    }
};

// Do not edit below this line
module.exports = repeatString;
