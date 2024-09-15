const fatorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
};

const valores = [3, 4, 5];

const fatoriais = valores.map(fatorial);

alert("Fatoriais dos elementos: " + fatoriais);
