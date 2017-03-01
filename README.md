# My solution

I came to this solution after around **2 hours and a half**. It was an incredibly pleasant and refreshing experience : I did not realize how long it had been since I had written some vanilla JS, interacting directly with the dom.

As all the validation tests are quite simple, and all are required before the data can be posted, I chose to do it with simple `if` statements inside a single function called `validate()`.

`validate()` is called when the form is submitted via the 'Create account' button. But to ensure that the data is not POSTed , I use `onsubmit='return validate()'` and not just `onsubmit='validate()'`. `validate()` returns `false` if one of the validation tests fail, therefore blocking the POST, and highlighting the failing parts of the form.

Here is a rough view of how I used my time :
* 15 minutes to go through the code and the validations criteria
* 30 minutes to remember how integrating vanilla JavaScript in a static HTML page works
* 30 minutes to remember how vanilla HTML forms work, and the right way to interact with them with vanilla JavaScript
* The rest of the time spent in gleeful code-writing

If I had more time, I'd probably make it so that the `error` class goes away as soon as the form is corrected. I'd also make the email and password validation more strict (filter for disposable email, special characters / caps / numbers required for the password).

# Form validation problem

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [Springload](https://www.springload.co.nz/) feel free to submit it too. We might not have anything available but we're always on the lookout for skilled developers.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class='error'>
    <label for='field'></label>
    <input id='field' type='text' value='foo'>
</p>
```

## Submission

Please email us a link to your fork of this repository, or a zip or tar.gz of your solution to 1337h4x0r@springload.co.nz.
