# Tooltip

Generic, non interactive tooltip for giving the user more information where content may be truncated or for better understanding of what an element may do (ie. an icon).

This implementation uses the portal component to insert a parent div and the tooltip. This is useful in cases such as a table that has overflow set to hidden. If a tooltip is being used inside this table and the content of the tooltip is expected to overlap the table bounds, it will not. This is due to the overflow problem, which can be solved with a portal. The portal is inserted before the closing </body> tag and means that any child element within a portal is rendered away from the React app root and therefore any overflow issues will no longer be apparent.

## Considerations

[x] Add aria labels & descriptions

[x] Press esc to close tooltip

[x] OnClick event to show/hide tooltip

[x] Disable mouseEvents in conjunction with the onClick

[x] Show tooltip onFocus and onBlur

[x] Handle tabIndex if disabledTooltip prop is apparent

[x] Build on the arrowPosition props to include top-left, top-center, top-right, bottom-left, bottom-center, bottom-right

[x] Build on the placement props to include top-left, top-center, top-right, bottom-left, bottom-center, bottom-right

[ ] 'Leave' & 'rest' timeouts to negate flashing tooltips
