input.onButtonPressed(Button.A, function () {
    setting(0)
})
function setting (patternNo: number) {
    if (patternNo == 0) {
        for (let webNo = 0; webNo <= 7; webNo++) {
            webs[webNo].showRainbow(1, 360)
        }
    } else {
        for (let webNo = 0; webNo <= 7; webNo++) {
            webs[webNo].showColor(colors[webNo])
        }
        colorNo = 0
    }
}
input.onButtonPressed(Button.B, function () {
    setting(1)
})
let colorNo = 0
let colors: number[] = []
let webs: neopixel.Strip[] = []
let web0 = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
let web1 = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
let web2 = neopixel.create(DigitalPin.P12, 12, NeoPixelMode.RGB)
let web3 = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
let web4 = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB)
let web5 = neopixel.create(DigitalPin.P14, 12, NeoPixelMode.RGB)
let web6 = neopixel.create(DigitalPin.P15, 12, NeoPixelMode.RGB)
let web7 = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
webs = [
web0,
web1,
web2,
web3,
web4,
web5,
web6,
web7
]
colors = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White),
neopixel.colors(NeoPixelColors.Black)
]
let patternNo = 0
colorNo = 0
setting(patternNo)
basic.forever(function () {
    if (patternNo == 0) {
        for (let webNo = 0; webNo <= 7; webNo++) {
            webs[webNo].rotate(1)
            webs[webNo].show()
        }
    } else {
        for (let webNo = 0; webNo <= 7; webNo++) {
            webs[webNo].showColor(colors[(webNo + colorNo) % 8])
            colorNo = (colorNo + 1) % 8
            webs[webNo].show()
        }
    }
})
control.inBackground(function () {
    while (true) {
        basic.showString("SpiderWeb")
    }
})
