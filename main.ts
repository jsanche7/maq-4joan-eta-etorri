let abiadura = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        abiadura = 40
    }
    if (input.buttonIsPressed(Button.B)) {
        abiadura = 70
    }
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, abiadura)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, abiadura)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, abiadura)
    basic.pause(910)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, abiadura)
    basic.pause(2000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
