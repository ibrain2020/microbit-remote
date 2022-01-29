input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("C")
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("0")
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("D")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("A")
    basic.showArrow(ArrowNames.North)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendString("F")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendString("G")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendString("E")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendString("H")
    }
})
