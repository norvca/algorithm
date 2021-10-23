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

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

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
