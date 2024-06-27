const prompt = require(`prompt-sync`)();

console.log(`Um triângulo possui 3 lados, ou seja, 3 medidas. 
Sabendo dessa informação, adicione 3 medidas para saber se o triângulo é:
Equilátero, Isóceles ou Escaleno.`);

    let lado1 = prompt(`Lado 1: `);
    let lado2 = prompt(`Lado 2: `);
    let lado3 = prompt(`Lado 3: `);
    
    if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
        console.log("Equilátero, pois todos os lados são iguais!");
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3 ) {
        console.log("Escaleno, todos os lados são diferentes!");
    } else if(lado1 === lado2 && lado1 !== lado3) {
        console.log("Isóceles, o lado 1 e o lado2 são iguais!");
    } else if (lado1 === lado3 && lado1 !== lado2) {
        console.log("Isóceles, pois apenas dois lados são iguais! O lado 1 e o lado 3!");
    } else if(lado2 === lado3 && lado2 !== lado1) {
        console.log("Isóceles, pode ver que só dois lados são iguais, o lado 2 e o lado 3!");
    }