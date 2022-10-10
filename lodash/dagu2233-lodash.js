var dagu2233 = {
  //将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
  chunk: function (arry, size) {
    let n = Math.ceil(arry.length / size);
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
//创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
  compact: function (arry) {
    let sult = []
    let index = 0;
    for (let i = 0; i < arry.length; i++){
      if (tupeof(arry[i]) === Number && arry[i] != 0 && !Number.isNaN(arry[i])) {
        sult[index] = arry[i];
        index++
      }
    }
    return sult;

  },
  //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  fill: function (array, value, start, end) {
    while(start != end) {
      array[start] = value;
      start++;
    }
    return array;
  },
  //创建一个新数组，将array与任何数组 或 值连接在一起。
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
  /*创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。 */
  difference: function (ary, ...ans) {
    var result = []
    var map = {}
    for (var i = 0; i < ans.length; i++) {
        for (var j = 0; j < ans[i].length; j++) {
            var num = ans[i][j]
            if (!map[num]) {
                map[num] = 0
            }
            map[num]++
        }
    }
    for (var i = 0; i < ary.length; i++) {
        var a = ary[i]
        if (!(a in map)) {
            result.push(a)
        }
    }
    return result
  },
//创建一个切片数组，去除array前面的n个元素。
  drop: function (array, n) {
    let ns = [];
    for (let i = n; i < array.length; i++){
      ns.push(array[i])
    }
    return ns;
  },
  //创建一个切片数组，去除array后面的n个元素。
  dropRight: function (array, n) {
    if (n > array.length) {
      return []
    }
    var result = []
    var key = array.length - n - 1
    for (var i = 0; i < array.length; i++) {
        if (i <= key) {
            result.push(array[i])
        }
    }
    return result
  },
  //该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
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
  //将array递归为一维数组。
  flattenDeep: function (array) {
    if (array.length === 0) {
      return []
    }
    var result = []
    for (var i = 0; i < array.length; i++) {
        var item = array[i]
        if (Array.isArray(item)) {
            result = result.concat(flattenDeep(item))
        } else {
            result = result.concat(item)
        }
    }
    return result;
  },
  //获取数组 array 的第一个元素。
  head : function(array) {
    if (!array) {
      return ;
    } else {
      return array[0];
    }
  },
  //与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
  fromPairs: function (array) {
    let map = {}
    for (let i = 0; i < array.length; i++) {
        map[array[i][0]] = array[i][1]
    }
    return map
  },
  //使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
  indexOf: function (array, value, fromIndex = 0) {
    var ary = array.slice()
    var idx = (fromIndex >= 0) ? fromIndex : (fromIndex + ary.length)
    for (var i = idx; i < ary.length; i++) {
        if (ary[i] === value) {
            return i
        }
    }
    return -1
  },
  //取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
  initial: function (array) {
    var newAry = []
    for (var i = 0; i < array.length - 1; i++) {
      newAry.push(array[i])
    }
    return newAry
  },
  //获取array中的最后一个元素。
  last: function (array) {
    return array[array.length - 1]
  },
  //将 array 中的所有元素转换为由 separator 分隔的字符串。
  join: function (array, seperator = ',') {
    var newStr = '';
    for (let i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        newStr += array[i]
      } else {
        newStr += array[i] + seperator;
      }
    }
    return newStr;
  },
  //减少一级array嵌套深度。
  flatten: function (array) {
    var num = []
    for (var i = 0; i < array.length; i++) {
        var item = array[i]
        if (Array.isArray(item)) {
            num.push(...item)
        } else {
            num.push(item)
        }
    }
    return num;
  },
}
