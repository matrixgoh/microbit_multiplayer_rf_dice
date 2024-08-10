radio.onReceivedNumber(function (receivedNumber) {
    FriendNumber = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    Reset = 1
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(FriendNumber)
    if (DiceNumber > FriendNumber) {
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    } else if (DiceNumber == FriendNumber) {
        basic.showIcon(IconNames.Yes)
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
    }
    Reset = 1
})
input.onGesture(Gesture.Shake, function () {
    if (Reset) {
        Reset = 0
        DiceNumber = randint(1, 6)
        radio.sendNumber(DiceNumber)
        basic.showNumber(DiceNumber)
    }
})
let FriendNumber = 0
let DiceNumber = 0
let Reset = 0
radio.setGroup(255)
basic.showIcon(IconNames.Heart)
Reset = 1
DiceNumber = 0
FriendNumber = 0
basic.forever(function () {
	
})
