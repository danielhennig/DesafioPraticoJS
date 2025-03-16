function somaArray(numbers) {
    for (let num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error("Valor inválido detectado");
        }
    }

    return numbers.reduce((soma, num) => soma + num, 0);
}

const array = [1, 2, 3, 4, 5];

try {
    console.log(somaArray(array)); 
} catch (error) {
    console.error(error.message);
}
