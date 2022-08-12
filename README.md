# Handling of multiple select not working as expected

Maybe my expectations are wrong, but I'm not sure how to handle this.  Please help me understand :)

## Running the example

    git clone git@github.com:npup/rhf-multiple-select-problem.git
    cd rhf-multiple-select-problem
    npm i
    npm start   # then open browser at http://localhost:3003/


## Expectation

I expect the items in an (uncontrolled) multiple select to be selectable in both cases shown in the example app.


### First case

In the first case, a simple multiple-select (`months`) is wired up via `register()`.  This works fine, and the expected form values are shown as an alert on form submit.


### Second case

In the second case (`months2`), a `FormControl` wrapper is used, that in turn renders the `<select>`.  This pattern (using `useController()`) works for various other form controls I have done, like buttons, inputs (text, radios/groups, checkboxes/groups etc), and even non-multiple selects.

**However, when one tries to select items in this one, they are immediately deselected in the GUI somehow, and only one of them is persisted to the form's values** (as a string, not as an array of strings).  In the `render()` callback, the value passed on to the actual `<select>` is just a string (the last "touched" item in the attempt to select multiple items).

It seems the `onChange` event is (expectedly) triggered, but I don't know if it's a place to start digging into this. Anyway, I can't understand how to prevent the "deselecting" and instead make the GUI (and the form values) accept selecting multiple items in this way.

### What I tried

First of all, I stripped down my use case to what you see in the example app.  Originally it involved a (thin) wrapper around the native `<select>`, with some extra functionality (including validation etc).  But I got rid of all that to narrow down the issue, hopefully understanding something in the process.. but alas..

As the problem still is showing up, I tried hooking into the `onChange` (and even the `onBlur`) handlers (see above) - inspecting and even stopping + preventing the events, but it seems to be the wrong idea.
