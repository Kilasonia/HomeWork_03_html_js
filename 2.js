fname = prompt("Привет гость как тебя зовут:");
getName(fname);
function getName(name) {
    alert("Hello" + " " + name + ":)");
    return console.log(`Приятно познакомиться ${name}, давайте писать код:)`);
}