input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
radio.setGroup(23)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(5000)
})
