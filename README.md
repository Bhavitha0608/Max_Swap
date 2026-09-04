# Maximum Swap – Node.js
Given a non-negative integer `num`, return the maximum value you can get by swapping **at most two digits** of the number.
If no swap can increase the number, return the original number.

### Example
Input:
2736

Output:

7236


By swapping `2` and `7`, we get the maximum possible number:

2736 → 7236

## Approach

We use a Greedy Approach with a lookup object to find the last occurrence of each digit.

### How it works

1. Convert the number into an array of digits.
2. Store the last index of every digit (`0` to `9`) in an object.
3. Traverse the digits from left to right.
4. For each digit, check if there is a larger digit (`9` down to the current digit + 1) that appears later in the number.
5. If such a digit exists, swap the current digit with the largest possible digit
6. Return the number immediately after the first beneficial swap.
7. If no beneficial swap is possible, return the original number.


## Code

function maximumSwap(num) {
    let a = String(num).split('');
    let last = {};

    for (let i = 0; i < a.length; i++) {
        last[a[i]] = i;
    }

    for (let i = 0; i < a.length; i++) {
        for (let d = 9; d > a[i]; d--) {
            if (last[d] > i) {
                [a[i], a[last[d]]] = [a[last[d]], a[i]];
                return Number(a.join(''));
            }
        }
    }

    return num;
}

console.log(maximumSwap(2736));

## Execution Process

For:

num = 2736


### Step 1: Convert to digits

['2', '7', '3', '6']

### Step 2: Store last positions
2 → 0
7 → 1
3 → 2
6 → 3
### Step 3: Find the best swap

Start from the left:

Current digit = 2

Check larger digits from `9` down:
9 -> not available
8 ->not available
7 -> available at index 1

So swap:
2 is swapped with 7

The array becomes:

['7', '2', '3', '6']

Convert it back to a number:

7236

### Output
7236


## Complexity Analysis

### Time Complexity: O(n)

* The first loop takes `O(n)` to store the last positions.
* The second loop checks at most 9 digits (`9` to `0`) for each position.
* Since there are only 10 possible digits, this is effectively `O(10n)`, which simplifies to:
  O(n)

### Space Complexity: O(n)

The digit array requires `O(n)` space.

The `last` object stores at most 10 digits, which is `O(1)`.

Therefore, overall:

O(n)
---

## Technologies Used

* JavaScript
* Node.js
* Greedy Algorithm

---

## How to Run

Make sure Node.js is installed.

Run:
node maximumSwap.js

### Expected Output

7236

## Conclusion

The Greedy Approach efficiently finds the maximum number by making the best possible swap at the earliest position.

Time Complexity: `O(n)`
Space Complexity: `O(n)`
 
