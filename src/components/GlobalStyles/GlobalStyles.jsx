import { createGlobalStyle } from 'styled-components'
import { vSpacing } from '../../utils'

export const GlobalStyles = createGlobalStyle`
    :root {
        html {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        /*
        * Basic reset to get these elements back on a level playing field.
        */
        h1,h2,h3,h4,h5,h6,
        p,blockquote,pre,
        dl,dd,ol,ul,
        form,fieldset,legend,
        table,th,td,caption,
        hr {
            margin: 0;
            padding: 0;
        }
        /*
        * Basic cursor interactions for form elements.
        */
        label,
        input,
        textarea,
        button,
        select,
        option {
            cursor: pointer;
        }
        .text-input:active,
        .text-input:focus,
        textarea:active,
        textarea:focus {
            cursor: text;
            outline: none;
        }
        svg {
            vertical-align: middle;
        }
        .visually-hidden {
            border: 0;
            clip: rect(0,0,0,0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            white-space: nowrap;
            width: 1px;
        }
        body {
            font-family: 'PT Sans', sans-serif;
        }
        p {
            ${vSpacing};
        }
        ul, ol {
            margin-left: 20px
        }
    }
`
