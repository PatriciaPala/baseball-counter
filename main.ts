input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    count = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
})
let count = 0
basic.showNumber(0)
count = 0
