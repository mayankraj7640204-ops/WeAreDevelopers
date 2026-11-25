# Track filter PR checklist

- [ ] Tab to the **Track** select. Verify focus is visible and the label is associated with it.
- [ ] On first load, **All tracks** shows six sessions in time order.
- [ ] Save the 09:00 Community talk. Select **Engineering**: only the 09:30 and 10:30 talks appear, and the status reads `2 shown · 1 saved`.
- [ ] Select **All tracks** again: `6 shown · 1 saved`, and the first Save button is still pressed.
- [ ] At narrow viewport widths the cards stack without horizontal scrolling.
- [ ] Run `npm ci`, `npm test` and `npm run build`. In a practice fork PR, check **Planner checks** and describe any verification you couldn't run.
- [ ] The feature diff does not include unrelated onboarding documentation changes.
