<style
  type="text/css">
  h1 {color:blue;}
  p {color:yellow;}
</style>

## Human Readable Time

14 Jun 2018:

- Two versions, one using .padStart, the other using .map
- Note that a function for padding with leading 0s could be:

```javascript
pad = num => (num < 10 ? "0" + num : num);
```

[codewars](https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript)
