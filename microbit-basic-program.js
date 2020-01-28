let iconHeart = true
input.onButtonPressed(Button.A, function () {
    if (iconHeart) {
        iconHeart = false
    }
    else {
        iconHeart = true
    }
})
basic.forever(function () {
    if (iconHeart) {
        basic.showIcon(IconNames.Heart)

    }
    else {
        basic.showIcon(IconNames.Butterfly)
    }
    basic.pause(100)
    basic.clearScreen()
})
