# VP Modal

Accessible modal that accepts child props. The following criteria have been considered. User should be able to:

- Close modal with icon (top right)
- Close modal by clicking outer (black/opaque) background
- Close modal by pressing escape button (accessibilty)
- Add no-scroll styles to body of document when modal visible to prevent document scoll
- Remove focus from all other tabbable elements (accessibilty)
- Restrict focus to just the modal when it's open (accessibilty)
- When modal open set focus straight away to the modal element

Considerations taken from https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html
