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

#### Deep copy array without objects in it
```javascript
const oldArray = [1,2,3,[4,5]]
const newArray1 = Array.from(oldArray) // newArray1 is now [1,2,3,[4,5]]
const newArray2 = Array(oldArray) // newArray2 is now [1,2,3,[4,5]]
```

#### Destructure array in function params
```javascript
[[1,2], [3,4]].forEach(([a, b]) => { console.log(a, b) })
```

#### Check if something is in an array
```javascript
const elementToFind = 3
const numbers = [1,2,3]
numbers.includes(elementToFind) // true
```

### Declarative Array Tasks

### Remove elements that don't match condition
```javascript
const numbers = [0,1,2,3,4]
const evenNumbers = numbers.filter(el => el % 2 == 1) // [0,2,4]
```

### Apply function to every element
```javascript
const numbers = [0,1,2,3,4]
const squaredNumbers = numbers.map(el => el**2) // [0,1,4,9,16]
```

### Reduce all elements into one value
```javascript
const numbers = [0,1,2,3,4]
const sum = numbers.reduce((el, acc) => acc + el) // 10
```

#### Check if some condition occurs at least once in an array
```javascript
const twoEvenOneOdd = [2,4,5]
const threeOdd = [1,3,5]
twoEvenOneOdd.some(el => el % 2 == 0) === true
threeOdd.some(el => el % 2 == 0) === false
```

#### Check if some condition occurs for every element
```javascript
const threeEven = [2,4,6]
const twoEvenOneOdd = [2,4,5]
threeEven.every(el => el % 2 == 0) === true
twoEvenOneOdd.every(el => el % 2 == 0) === false
```

### 
```javascript
```

### 
```javascript
```
