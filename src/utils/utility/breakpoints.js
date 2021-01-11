/**
 * Basic breakpoint variables & breakpoint
 * function to create responsive components
 */

export const size = {
    phone: '480px',
    tablet: '768px',
    desktop: '960px',
}

/**
 * How to use
 */
/*
*
@media ${breakpoint(400)} {
    background: green;
}

@media ${device.tablet} {
    background: orange;
}
*/

export const device = {
    phone: `(min-width: ${size.phone})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
}

/**
 * Set specific breakpoints
 * @param  {Number} value   Breakpoint value to target within media query
 */
export const breakpoint = value => `(min-width: ${value}px)`
