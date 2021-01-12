import { useCallback } from 'react'
import { useGetKeyboardFocusableElements } from './getFocusableElements'

export const useTrapFocus = currentRef => {
    const getFocusableElements = useGetKeyboardFocusableElements

    const trapFocus = useCallback(() => {
        const { current } = currentRef
        // 1. Return all focusable elements
        const allFocusableElements = getFocusableElements()

        // 2. Return current focusable elements
        // & add class of focusable
        const currentFocusableElements = getFocusableElements(current)
        currentFocusableElements.forEach(x => x.classList.add('focusable'))

        const firstTabElement = currentFocusableElements[0]
        const lastTabElement =
            currentFocusableElements[currentFocusableElements.length - 1]

        // 3. Filter current elements from all array
        const filteredElements = allFocusableElements.filter(
            el => !el.classList.contains('focusable')
        )

        // 4. Add tabIndex -1 to filtered elements
        filteredElements.forEach(x => {
            x.tabIndex = -1
        })

        // 5. Focus first element
        firstTabElement.focus()

        // 6. Handle last element tab to first element
        lastTabElement.addEventListener('keydown', e => {
            if (!e.shiftKey && e.keyCode === 9) {
                e.preventDefault()
                firstTabElement.focus()
            }
        })

        // 7. Handle first element back to last
        firstTabElement.addEventListener('keydown', e => {
            if (e.shiftKey && e.keyCode === 9) {
                e.preventDefault()
                lastTabElement.focus()
            }
        })
    }, [currentRef])

    return trapFocus
}
