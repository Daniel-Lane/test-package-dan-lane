export const useGetKeyboardFocusableElements = (element = document) =>
    [
        ...element.querySelectorAll(
            'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        ),
    ].filter(el => !el.hasAttribute('disabled'))
