import { colors, fonts } from '../variables'

export const lightTheme = {
    name: 'LIGHT',
    primary: colors.primary,
    secondary: colors.secondary,
    // #BACKGROUND
    mainBg: colors.white, // document bg
    secondaryBg: colors.lightGrey, // element bg (e.g modal / info boxes)
    tertiaryBg: '#e4e4e4',
    overlay: '#000000a8',
    // #FONTS
    fontStack: fonts.vpFontFamily,
    buttonFontSize: '16px',
    // #HEADINGS
    heading: colors.bgSecondary,
    // #TEXT
    primaryText: '#000000',
    // #BUTTONS
    primaryButtonBg: colors.vpGreen,
    primaryButtonBorder: colors.vpGreen,
    primaryButtonText: colors.white,
    primaryButtonLoadingBg: colors.vpGreen,
    secondaryButtonBg: 'transparent',
    secondaryButtonBorder: colors.vpGreen,
    secondaryButtonText: colors.vpGreen,
    secondaryButtonHvr: colors.vpGreen,
    secondaryButtonTextHvr: colors.vpWhite,
    secondaryButtonLoadingBg: colors.vpGreen,
    tertiaryButtonBg: colors.vpAquaBlue,
    tertiaryButtonText: colors.white,
    tertiaryButtonLoadingBg: colors.vpAquaBlue,
    buttonLoading: colors.white,
    // #BORDERS
    borderColor: colors.grey.e,
    borderRadius: '5px',
    // #FOCUS
    focus: colors.grey.d,
    // #LABELS
    labelColor: colors.bgSecondary,
    // #INPUT
    inputBg: colors.white,
    inputBorder: colors.grey.d,
    inputText: colors.grey.e,
    // #MODAL
    modalBg: colors.white,
    modalTitle: colors.text,
    modalCloseIcon: '#3f3f3f',
    modalCloseIconHvr: '#3f3f3f',
    modalCloseHvr: 'lightgrey',
    modalCloseAct: '#dedede',
    modalCloseIconAct: colors.grey.e,
    // #DETAILSBOX
    detailsBg: colors.grey.a,
    detailsHeading: colors.grey.e,
    // #TOGGLE
    toggleBg: '#272727',
    toggledBg: '#4f9257',
    toggleCircle: colors.white,
    // #TOOLTIP
    tooltipBg: '#171717',
    tooltipText: colors.white,
    // #OPTIONSMENU
    optionsMenuBg: colors.white,
    optionsMenuBorder: '#dadada',
}
