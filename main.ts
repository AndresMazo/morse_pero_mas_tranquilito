function get_word (texto: string) {
    if (texto == "\".-\"") {
        words = "" + words + "\"a\""
    } else if (texto == "\"-...\"") {
        words = "" + words + "\"b\""
    } else if (texto == "\".-\"") {
        words = "" + words + "\"a\""
    } else if (texto == "\".-\"") {
        words = "" + words + "\"a\""
    } else if (texto == "\".-\"") {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . # # # .
            # . . # #
            # # # # #
            . # . # #
            . # . # .
            `)
    }
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(0)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    radio.sendNumber(2)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(1)
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # # # .
        # . . # #
        # # # # #
        . # # # #
        . # . # .
        `)
    radio.sendNumber(3)
    basic.pause(200)
    basic.clearScreen()
})
let words = ""
radio.setGroup(7)
radio.setTransmitPower(7)
