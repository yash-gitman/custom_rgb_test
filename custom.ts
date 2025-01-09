/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

//% weight=100 color=#FF5733 icon=""
namespace rgb {

    // Enum for LED states (on/off)
    enum LEDState {
        //% block="off"
        Off = 0,
        //% block="on"
        On = 1
    }

    /**
     * Turn RED LED on/off
     * @param state RED state (on or off), eg: LEDState.On
     */
    //% block="set RED to %state"
    export function rgb_red(state: LEDState): void {
        pins.digitalWritePin(DigitalPin.P14, state);
    }

    /**
     * Turn GREEN LED on/off
     * @param state GREEN state (on or off), eg: LEDState.On
     */
    //% block="set GREEN to %state"
    export function rgb_green(state: LEDState): void {
        pins.digitalWritePin(DigitalPin.P15, state);
    }

    /**
     * Turn BLUE LED on/off
     * @param state BLUE state (on or off), eg: LEDState.On
     */
    //% block="set BLUE to %state"
    export function rgb_blue(state: LEDState): void {
        pins.digitalWritePin(DigitalPin.P16, state);
    }

    /**
     * Set brightness for RED LED
     * @param p RED brightness (0 to 1023), eg: 512
     */
    //% block="set RED brightness to %p"
    export function rgb_red_brightness(p: number): void {
        pins.analogWritePin(AnalogPin.P14, p);
    }

    /**
     * Set brightness for GREEN LED
     * @param p GREEN brightness (0 to 1023), eg: 512
     */
    //% block="set GREEN brightness to %p"
    export function rgb_green_brightness(p: number): void {
        pins.analogWritePin(AnalogPin.P15, p);
    }

    /**
     * Set brightness for BLUE LED
     * @param p BLUE brightness (0 to 1023), eg: 512
     */
    //% block="set BLUE brightness to %p"
    export function rgb_blue_brightness(p: number): void {
        pins.analogWritePin(AnalogPin.P16, p);
    }
}