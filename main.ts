input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("Outdoor")
})
radio.setGroup(23)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(5000)
})
