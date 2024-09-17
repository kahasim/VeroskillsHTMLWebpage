for(let i = 0; i <= 100; i++){

    if(i % 2 == 0){
    console.log(i)
    }
}

function isNumberValid(input){
    const number = Number(input);

    if(!isNaN(number) && typeof number === 'number'){
        return true;
    }
    else{
        return false;
    }
}