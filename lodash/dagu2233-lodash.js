var dagu2233 = {

  chunk: function (arry, size) {
    let n = Math.floor(arry.length / size);
    let sul = []
    let index = 0
    for (let i = 0; i < n; i++){
      sul[i] = []
      for (let j = 0; j < size; j++){
        if (!arry[index]) {
          return sul;
        }
        sul[i][j] = arry[index];
        index++;
      }
    }
    return sul;
  },

  compact: function (arry) {
    let sult = []
    let index = 0;
    for (let i = 0; i < arry.length; i++){
      if (arry[i] === Number) {
        sult[index] = arry[i];
        index++
      }
    }
    return sult;

  },

  fill: function (array, value, start, end) {
    while(start != end) {
      array[start] = value;
      start++;
    }
    return array;
  },

  concat: function (array, ...other) {
    let res = array;
    for (let i = 0; i <other.length; i++){
      if (Array.isArray(other[i])) {
        let temp = other[i];
        for (let j = 0; j < temp.length; j++) {
          res.push(temp[j])
        }
      } else {
        res.push(other[j])
      }
    }
    return res;
  },

  difference: function (array, value) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < value.length; j++) {
        if (array[i] !== value[j]) {
          res.push(array[i])
        }
      }
    }
    return res;

  },

  drop: function (array, n) {
    let ns = [];
    let number = n;
    for (let i = 0; i < array.length - n; i++){
      ns[i] = array[number - 1]
      number++;
    }
    return ns;
  },

  dropRight: function (array, n) {
    let ns = [];
    let number = n;
    if (n > array.length) return ns;
    for (let i = 0; i < array.length - n; i++){
      ns[i] = array[i]
    }
    return ns;
  },

  findIndex: function (users, predicate, fromIndex = 0) {
    for (let fromIndex = 0; i < array.length; i++) {
      if (typeof predicate === 'function') {
        if(predicate(array[i])) return i
      } else if (Array.isArray(predicate)) {
          if (array[i][predicate[0]] === predicate[1]) return i;
      } else if (typeof predicate === Object) {
          var judge = 1
          for (var key in predicate) {
            if (array[i][key] != predicate[key]) {
              judge = 0
              break
            }
          }
          if (judge) {
            return i
          }
      } else if (typeof predicate === String) {
          if(array[i][predicate]) return i
      }
    }
    return -1;
  },

  flattenDeep: function (array) {
    let res = [];
    if (deep = 1) return res;
    let temp = array;
    while (temp != null) {
      res.push(temp)
    }
    if(!temp){
      deep = 1
    }
    return flattenDeep(array);
  },
  fromPairs : function () {},
  head : function () {},
  indexOf : function () {},
  initial: function () {},
  last : function() {},
  join : function() {},
  flatten: function() {},
}
