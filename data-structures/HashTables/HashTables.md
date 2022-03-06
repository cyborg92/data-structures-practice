## What is a Hash Table?

- It is used to store key value pairs.
- They are like arrays but keys are not ordered.
- Hash tables are faster than array for finding values, adding new values and removing values.
- Python has Dictionaries, JS has Objects and Maps (ES6), Java Go and Scala have Maps, Ruby has Hashes.

#### Note: In JS Object, only strings are allowed as keys.

#### The Hash part

- If implementing a hash table via an array, then in order to look up values by key, we need a way to convert key into valid
  array indices i.e "a hash function" which performs this task.

#### What makes a good hash function ?

- Fast i.e. constant time
- Doesn't cluster outputs at specific indices but distributes uniformly
- Deterministic (same input yields same output)

#### Usage of Prime Numbers in hash functions

- It helps in spreading out the keys uniformly.
- It's also helpful if the array you are putting values into has prime length.

#### Collisions

- when different values return the same value when passed as input to hash function.
- There are multiple strategies for dealing with collisions but the two being focused here are

  - Seperate chaining : At each index in our array, we store values using more sophisticated data structure(eg.array/linkedlist). This allows us to store multiple key-value pairs at same index.

  - Linear probing - In this, when we find a collision, we search through the array to find next empty slot.This allows us to store a single key-value at each index.

#### Big O of Hash Tables

Average Case

- Insertion,Deletion and Access :O(1)
