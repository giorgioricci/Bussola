let gradi = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (gradi))
})
basic.forever(function () {
    gradi = input.compassHeading()
    if (gradi < 45) {
        basic.showString("N")
    } else if (gradi < 135) {
        basic.showString("E")
    } else if (gradi < 225) {
        basic.showString("S")
    } else if (gradi < 315) {
        basic.showString("O")
    } else {
        basic.showString("N")
    }
    basic.pause(5000)
    basic.clearScreen()
})
