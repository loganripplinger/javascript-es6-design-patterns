# Idioms

## General
Use _ for variables you won't reference

To check if something is even, n % 2 == 0
To check if something is odd, n % 2 == 1
To get the last number of an integer, n % 10
To drop the last number of an integer, Math.floor(n / 10)

## Array operations

### Regular Array Tasks

#### Initalize sized array

```javascript
const array = new Array(5)
```

#### Initalize nested array
```javascript
const nestedArray = Array.from(Array(N), _ => [])
```

#### Destructure array in function params
```javascript
[[1,2], [3,4]].forEach(([a, b]) => { console.log(a, b) })
```

#### Check if something is in an array
```javascript
const element = 3
[1,2,3].includes(element)
```

### Declarative Array Tasks

### Remove elements that don't match condition
```javascript
[1,2,3,4].filter(el => el % 2 == 1) //== [2,4]
```

### Apply function to every element
```javascript
[1,2,3,4].map(el => el**2) // [1,4,9,16]
```

### Reduce all elements into one value
```javascript
[1,2,3,4].reduce((el, acc) => acc + el) === 10
```

#### Check if some condition occurs at least once in an array
```javascript
[2,4,5].some(el => el % 2 == 0) === true
[1,3,5].some(el => el % 2 == 0) === false
```

#### Check if some condition occurs for every element
```javascript
[2,4,6].every(el => el % 2 == 0) === true
[2,4,5].every(el => el % 2 == 0) === false
```

### 
```javascript
```
