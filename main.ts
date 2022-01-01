let gradi = 0
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
})
