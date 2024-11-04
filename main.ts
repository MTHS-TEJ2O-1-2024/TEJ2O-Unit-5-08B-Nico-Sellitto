/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Oct 2024
 * This program make a car move and turn away from an object
*/

// setup
let distance: number = 0
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    // drives the car if its over 10 cm away from something
    while (distance > 10) {
        distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    // turns car if its 10 cm away from something
    robotbit.StpCarMove(1, 48)
    } if (distance < 10) {
        robotbit.StpCarTurn(90, 48, 125)
    }
}  
