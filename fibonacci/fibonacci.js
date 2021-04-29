// fibonacci 1
const fibonacci = num => {
    const array = [];

    for (let i = 0; i <= num; i++){
        if(i < 2){
            result = i;
        }else{
            result = array[i - 1] + array[i - 2];
        }
        array.push(result)
    }

    return array.join(',');
}

// fibonacci 2
const fibonacci2 = num => {
    if(num < 2) {
        return num;
    }

    return fibonacci2(num - 1) + fibonacci2(num - 2);
}

console.log(fibonacci(16))
console.log(fibonacci2(16))