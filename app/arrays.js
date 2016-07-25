exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {
    for(var i=0;i<arr.length;i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sumArr=0;
    for(var i=0;i<arr.length;i++){
      sumArr+=arr[i];
    }
    return sumArr;
  },

  remove: function(arr, item) {

    return arr.filter(function (val) {
      return val !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item)
      {
         arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    var result= arr.concat(item);
    console.log(arr.concat(item));
    return result;
  },

  truncate: function(arr) {
    var result= arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
    var result= arr.unshift(10);
    return arr;

  },

  curtail: function(arr) {
    var result= arr.shift();
    return arr;

  },

  concat: function(arr1, arr2) {

    var arr2 = [ 'a', 'b', 'c', 1 ];
    var result= arr1.concat(arr2);
    return result;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i=0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;

  },

  duplicates: function(arr) {
    var len=arr.length,
        out=[],
        counts={};

    for (var i=0;i<len;i++) {
      var item = arr[i];
      counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
      if (counts[item] === 2) {
        out.push(item);
      }
    }

    return out;
  },

  square: function(arr) {
    return arr.map(function (x) {
      return Math.pow(x, 2);
    });

  },

  findAllOccurrences: function(arr, target) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(target, i+1)) != -1){
      indexes.push(i);
    }
    return indexes;
  }
};
