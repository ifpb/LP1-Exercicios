function areaOfCircle(radius) {
    return Math.PI * radius ** 2;
}

const areaOfCircleWithAnonymous = function(radius) {
    return Math.PI * radius ** 2;
};

const areaOfCircleWithArrow = radius => Math.PI * radius ** 2;
console.log(`Área do circulo ${areaOfCircleWithArrow(5.0)}`);