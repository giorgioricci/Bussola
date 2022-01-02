let varGradi = 0
input.onButtonPressed(Button.A, function () {
    varGradi = input.compassHeading()
    if (varGradi < 45) {
        basic.showString("N")
    } else if (varGradi < 135) {
        basic.showString("E")
    } else if (varGradi < 225) {
        basic.showString("S")
    } else if (varGradi < 315) {
        basic.showString("O")
    } else {
        basic.showString("N")
    }
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (varGradi))
    }
})
