import { css } from 'styled-components'

// Base font size = 16px / 1em
// Magic number = 30px - our base font-size (16px) * 1.5 (line-height)

/*
 * Font Sizes
 * Heading size (em) = heading size (px) / font base (px)
 * Line height = magic number (px) / font size (px)
 *
 */

const xxs = css`
    font-size: 0.75em; // 12px
    line-height: 2.5;
`

const xs = css`
    font-size: 0.875em; // 14px
    line-height: 2.14;
`

const sm = css`
    font-size: 1em; // 16px
    line-height: 1.875;
`

const md = css`
    font-size: 1.125em; // 18px
    line-height: 1.66;
`

const lg = css`
    font-size: 1.25em; // 20px
    line-height: 1.5;
`

const xl = css`
    font-size: 1.375em; // 22px
    line-height: 1.09;
`
const xl2 = css`
    font-size: 1.5em; // 24px
    line-height: 1.25;
`

const xl3 = css`
    font-size: 1.625em; // 26px
    line-height: 1.15;
`

const xl4 = css`
    font-size: 1.75em; // 28px
    line-height: 1.07;
`

const xl5 = css`
    font-size: 1.875em; // 30px
    line-height: 0.8;
`
const xl6 = css`
    font-size: 2em; // 32px
    line-height: 0.94;
`

export default {
    xxs,
    xs,
    sm,
    md,
    lg,
    xl,
    xl2,
    xl3,
    xl4,
    xl5,
    xl6,
}
