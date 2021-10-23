class HashTable {
  constructor(size) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.dataMap.length;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.dataMap[index];

    // if there is index collision
    if (bucket) {
      // find if the key is already in the bucket
      // reset its value
      for (let i = 0; i < bucket.length; i++) {
        if (key === bucket[i][0]) {
          bucket[i][1] = value;
          return this;
        }
      }

      // if key is not in the bucket
      // push key/value pair into the bucket
      bucket.push([key, value]);
      return this;
    }

    // if there is no index collision
    this.dataMap[index] = [];
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    let bucket = this.dataMap[index];

    if (bucket) {
      // if there is index collision, we loop the bucket to get it
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let allKeys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      const bucket = this.dataMap[i];

      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          allKeys.push(bucket[j][0]);
        }
      }
    }

    return allKeys;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.dataMap[index];

    if (bucket) {
      for (let j = 0; j < bucket.length; j++) {
        if (key === bucket[j][0]) {
          bucket.splice(j, 1);
        }
      }
    }
  }
}

module.exports = HashTable;
