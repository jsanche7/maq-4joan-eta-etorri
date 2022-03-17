input.onButtonPressed(Button.A, function () {
    let abiadura = 0
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
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
