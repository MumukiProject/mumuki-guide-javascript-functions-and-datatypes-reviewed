Okay, so... How do we use these functions? How can we do to pass parameters to them and get results?

It's easy! We only have to put the name of the function and, between parentheses, its arguments, just like we've been doing.

```javascript
function doble(number) {
  return 2 * number
}

function successorOfDoble(number) {
   return doble(number) + 1;
}
```

Or even better: 

```javascript
function doble(number) {
  return 2 * number
}

function successor(number) {
  return number + 1
}

function successorOfDoble(number) {
   return successor(doble(number));
}
```

> Let's practice! Write the following functions:
>
> * `predecessor`: takes a number and returns that number minus one.
> * `triple`: returns a number times three.
> * `predecessorOfTriple`: that matches the two previous functions