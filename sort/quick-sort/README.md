## Intro
- Quick sort:
  - If array.length = 1, return array
  - Chose the first element as pivot, loop the array
    - If next element is small than pivot, put it left than pivot
    - If next element is small than pivot, put it right than pivot
  - Repeat step 2 with the left part
  - Repeat step 2 with the right part



## Complexity
Common case: O(n logn)
Worst case: n²
  -  When the original array is already sorted perfectly.
