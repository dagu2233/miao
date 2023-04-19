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
    var result = [];
    for (let i = 0; i < arry.length; i++) {
        if (arry[i]) {
            result.push(ary[i]);
        }
    }
    return result;
  },
  //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value;
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
    var num = []
    var m = array.length - n
    if (m <= 0) {
        return []
    } else {
        for (var i = n; i < array.length; i++) {
            num.push(array[i])
        }
    }
    return num;
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
  flattenDeep: function (array, depth = 1) {
    var ary = []
    for (var i = 0; i < array.length; i++) {
      var ary1 = array[i]
      if (Array.isArray(ary1)) {
        var flattenary1 = flattenDeep(ary1)
        for (var j = 0; j < flattenary1.length; j++) {
          ary.push(flattenary1[j])
        }
      } else {
        ary.push(ary1)
      }
    }
    return ary
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
  //这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
  lastIndexOf: function (arr, val, lastIndex = arr.length - 1) {
    for (var i = lastIndex; i >= 0; i--) {
      if (arr[i] === val) {
        return i
      }
    }
    return -1;
  },
  //移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
  pull: function (arr) {
    for (var i = 1; i < arguments.length; i++) {
      var item = arguments[i]
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] === item) {
          arr.splice(j, 1)
        }
      }
    }
    return arr;
  },
  //反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
  reverse: function (array) {
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
      var temp = array[left]
      array[left] = array[right]
      array[right] = temp;
      left++;
      right--;
    }
    return array;
  },
  //使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
  sortedIndex: function (array, value) {
    var left = 0;
    var right = array.length;
    while (left < right) {
        var mid = Math.floor(left + (right - left) / 2)
        if (array[mid] === value) {
          right = mid;
        } else if (array[mid] > value) {
          right = mid;
        } else if (array[mid] < value) {
          left = mid + 1;
        }
    }
    return left;
  },
  //创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
  union: function (...ary) {
    let arr = ary.flat();
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) == -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
  },
  //
  11: function () {},
}
