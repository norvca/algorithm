## Intro
- Helper function: merge
  - Set a result array as empty
  - Compare two array
    - If they both have element
      - Loop from index of both
        - Push the smaller one into the result array first, then the bigger one
    - If only one array has element, push the elements into the result array


- Merge sort function:
  - Slipt the array into half parts
    - Recursively slipt the remain parts
    - Use merge function to merge them


## Complexity
O(n²)