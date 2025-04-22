const sayNum = +prompt('Введите первое число')
const sayNumTwo = +prompt('Введите второе число')
alert(`Сумма: ${sayNum + sayNumTwo}`)
alert(`Разность: ${sayNum - sayNumTwo}`)
alert(`Деление: ${sayNum / sayNumTwo}`)
alert(`Умножение: ${sayNum * sayNumTwo}`)
if (sayNum % 2 == 0) {
    alert('первое число четное')
} else {'первое число нечетное'}
if (sayNumTwo % 2 == 0) {
    alert('второе число четное')
} else {'второе число нечетное'}
if (sayNum > sayNumTwo) {
    alert('первое число больше второго') 
} else {alert('второе число больше первого')}
    