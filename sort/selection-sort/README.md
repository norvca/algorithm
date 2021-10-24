## Intro
- Loop the array from first element
  - Keep current element's index as min pointer
  - Loop the array from current element's next element
    - If next element is smaller than current element
      - change min pointer to next element
  - if min pointer has been changed, swap the current element and min element


## Complexity
O(n²)