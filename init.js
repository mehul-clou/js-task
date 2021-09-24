module.exports = {
  sum(a, b) {
    return a + b;
  },
  sortObjects(listsOfObjects, key) {
    return listsOfObjects.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1
      }
      if (a[key] < b[key]) {
        return -1
      }
      return 0;
    });
  },
  intelligentArray(listsOfObjects, operationType, key) {
    if (operationType === 'sum') {
      return listsOfObjects.reduce((prev, currentObj) => {
        return prev += currentObj[key];
      }, 0)
    }
    else if (operationType === 'avg') {
      return listsOfObjects.reduce((prev, currentObj) => {
        return prev += currentObj[key];
      }, 0) / listsOfObjects.length;
    }
    else if (operationType === 'product') {
      return listsOfObjects.reduce((prev, currentObj) => {
        return prev *= currentObj[key];
      }, 1)
    }
    else {
      return "invaid Operation type.";
    }
  }
};
