import color from 'color'

/**
 * Convert a hex value into RGB
 * @param  {String} hex    Hexidecimal color value to change
 * @return {String}        RGB values
 */

function rgb(hex) {
    return color(hex).rgb().array().join(',')
}

/**
 * Return an rgba string value for CSS
 * @param  {String} hex     Hexidecimal color value
 * @param  {Number} opacity Number value between 0 and 1
 * @return {String}         RGBA string
 */

function rgba(hex, opacity) {
    return color(hex).alpha(opacity).rgb().string()
}

export { rgb, rgba }
