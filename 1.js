const celcius = Number.parseFloat(prompt("Введите температуру по Цельсию:"))
alert(`по Цельсию:=>${celcius},по Фарингейту:=>${converToF(celcius).toFixed(1)}`);
function converToF(number) {
    const f = (9 / 5) * number + 32;
    return f;
}