## Intro
A data structure that allow you  to create a list of paired values.

We can retrieve a value by using a key.

A `hash function` to help us to transform the `key` to the `index` which points to the key-value pairs.

If the `hash function` is designed perfectly, the complexity `set`, `get`, and `remove` methods will be O(1), the worst case is O(n).