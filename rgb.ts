/**
 * Custom functions for RGB LED control.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

//% weight=100 color=#b80672 icon=""
namespace rgb {
    /**
     * Enumeration for RGB colors
     */
    export enum RGBColor {
        //% block="RED"
        RED,
        //% block="GREEN"
        GREEN,
        //% block="BLUE"
        BLUE
    }

    /**
     * Turn RGB LED on/off
     * @param color RGB color, eg: RGBColor.RED
     * @param state LED state (0 for off, 1 for on), eg: 1
     */
    //% block="set %color to %state"
    //% state.min=0 state.max=1
    //% weight=100
    export function rgb_set(color: RGBColor, state: number): void {
        switch (color) {
            case RGBColor.RED:
                pins.digitalWritePin(DigitalPin.P14, state);
                break;
            case RGBColor.GREEN:
                pins.digitalWritePin(DigitalPin.P15, state);
                break;
            case RGBColor.BLUE:
                pins.digitalWritePin(DigitalPin.P16, state);
                break;
        }
    }

    /**
     * Set brightness for RGB LED
     * @param color RGB color, eg: RGBColor.RED
     * @param p brightness (0 to 1023), eg: 512
     */
    //% block="set %color brightness to %p"
    //% p.min=0 p.max=1023
    //% weight=99
    export function rgb_set_brightness(color: RGBColor, p: number): void {
        switch (color) {
            case RGBColor.RED:
                pins.analogWritePin(AnalogPin.P14, p);
                break;
            case RGBColor.GREEN:
                pins.analogWritePin(AnalogPin.P15, p);
                break;
            case RGBColor.BLUE:
                pins.analogWritePin(AnalogPin.P16, p);
                break;
        }
    }
}
