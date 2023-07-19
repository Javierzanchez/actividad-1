basic.showString("Javier david sanchez valencia 704")
basic.forever(function () {
    basic.pause(2)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Chessboard)
})
