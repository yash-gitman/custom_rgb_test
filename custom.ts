/**
 * Custom functions for RGB LED control.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

//% weight=100 color=#b80672 icon=""
namespace rgb {
    /**
     * Turn RED LED on/off
     * @param state RED state (0 for off, 1 for on), eg: 1
     */
    //% block="set RED to %state"
    //% state.min=0 state.max=1
    //% weight=100
    export function rgb_red(state: number): void {
        pins.digitalWritePin(DigitalPin.P14, state);
    }

    /**
     * Turn GREEN LED on/off
     * @param state GREEN state (0 for off, 1 for on), eg: 1
     */
    //% block="set GREEN to %state"
    //% state.min=0 state.max=1
    //% weight=99
    export function rgb_green(state: number): void {
        pins.digitalWritePin(DigitalPin.P15, state);
    }

    /**
     * Turn BLUE LED on/off
     * @param state BLUE state (0 for off, 1 for on), eg: 1
     */
    //% block="set BLUE to %state"
    //% state.min=0 state.max=1
    //% weight=98
    export function rgb_blue(state: number): void {
        pins.digitalWritePin(DigitalPin.P16, state);
    }

    /**
     * Set brightness for RED LED
     * @param p RED brightness (0 to 1023), eg: 512
     */
    //% block="set RED brightness to %p"
    //% weight=97
    //% p.min=0 p.max=1023
    export function rgb_red_brightness(p: number): void {
        pins.analogWritePin(AnalogPin.P14, p);
    }

    /**
     * Set brightness for GREEN LED
     * @param p GREEN brightness (0 to 1023), eg: 512
     */
    //% block="set GREEN brightness to %p"
    //% weight=96
    //% p.min=0 p.max=1023
    export function rgb_green_brightness(p: number): void {
        pins.analogWritePin(AnalogPin.P15, p);
    }

    /**
     * Set brightness for BLUE LED
     * @param p BLUE brightness (0 to 1023), eg: 512
     */
    //% block="set BLUE brightness to %p"
    //% weight=95
    //% p.min=0 p.max=1023
    export function rgb_blue_brightness(p: number): void {
        pins.analogWritePin(AnalogPin.P16, p);
    }
}
