//**********************************************01******************************************************************
//IE < 9 不支持Array的如下方法：map,forEach,filter,every,some,reduce,lastIndexOf,indexOf,reduceRight
//polyfill for them as :
if (typeof Array.prototype.map != "function") {
  Array.prototype.map = function (fn, context) {
    var arr = [];
    if (typeof fn === "function") {
      for (var k = 0, length = this.length; k < length; k++) {      
         arr.push(fn.call(context, this[k], k, this));
      }
    }
    return arr;
  };
}
if (typeof Array.prototype.forEach != "function") {
  Array.prototype.forEach = function (fn, context) {
    for (var k = 0, length = this.length; k < length; k++) {
      if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
        fn.call(context, this[k], k, this);
      }
    }
  };
}
if (typeof Array.prototype.filter != "function") {
  Array.prototype.filter = function (fn, context) {
    var arr = [];
    if (typeof fn === "function") {
       for (var k = 0, length = this.length; k < length; k++) {
          fn.call(context, this[k], k, this) && arr.push(this[k]);
       }
    }
    return arr;
  };
}
if (typeof Array.prototype.every != "function") {
  Array.prototype.every = function (fn, context) {
    var passed = true;
    if (typeof fn === "function") {
       for (var k = 0, length = this.length; k < length; k++) {
          if (passed === false) break;
          passed = !!fn.call(context, this[k], k, this);
      }
    }
    return passed;
  };
}
if (typeof Array.prototype.some != "function") {
  Array.prototype.some = function (fn, context) {
	var passed = false;
	if (typeof fn === "function") {
   	  for (var k = 0, length = this.length; k < length; k++) {
		  if (passed === true) break;
		  passed = !!fn.call(context, this[k], k, this);
	  }
    }
	return passed;
  };
}
if (typeof Array.prototype.reduce != "function") {
  Array.prototype.reduce = function (callback, initialValue ) {
     var previous = initialValue, k = 0, length = this.length;
     if (typeof initialValue === "undefined") {
        previous = this[0];
        k = 1;
     }
     
    if (typeof callback === "function") {
      for (k; k < length; k++) {
         this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
      }
    }
    return previous;
  };
}
if (typeof Array.prototype.reduceRight != "function") {
  Array.prototype.reduceRight = function (callback, initialValue ) {
    var length = this.length, k = length - 1, previous = initialValue;
    if (typeof initialValue === "undefined") {
        previous = this[length - 1];
        k--;
    }
    if (typeof callback === "function") {
       for (k; k > -1; k-=1) {          
          this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
       }
    }
    return previous;
  };
}
if (typeof Array.prototype.lastIndexOf != "function") {
  Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
    var index = -1, length = this.length;
    fromIndex = fromIndex * 1 || length - 1;

    for (var k = length - 1; k > -1; k-=1) {
        if (k <= fromIndex && this[k] === searchElement) {
            index = k;
            break;
        }
    }
    return index;
  };
}
if (typeof Array.prototype.indexOf != "function") {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var index = -1;
    fromIndex = fromIndex * 1 || 0;

    for (var k = 0, length = this.length; k < length; k++) {
      if (k >= fromIndex && this[k] === searchElement) {
          index = k;
          break;
      }
    }
    return index;
  };
}
//**********************************************02******************************************************************
//IE < 9 不支持String的trim方法
//polyfill for trim as :
if (!String.prototype.trim){
	String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "");
    };
}

//substr(start,length)在IE8浏览器中，start取负数不起作用，会被当做为0
//解决方法为：substr(stringObject.length + start,length)
var str = 'abcd';
str.substr(-2,3);//正确应该是"cd"，IE8输出"abc"，因为-2无效，直接当做0处理
str.substr(str.length-2,3);//IE8输出"cd"
//但是，ECMAscript 没有对该方法进行标准化，因此反对使用它，建议使用 substring(start,end) 和 slice(start,end)
//substring()不接受负的参数，slice()可以。


