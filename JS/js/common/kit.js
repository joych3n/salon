//获取非行间样式的兼容方法（obj是对象，name是属性名）。
function getStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, false)[name];
  }
}

//获取鼠标位置（事件对象）
function getMousePos(event) {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollLeft =
    document.documentElement.scrollLeft || document.body.scrollLeft;
  return { x: event.clientX + scrollTop, y: event.clientY + scrollLeft };
}

//通过class获取元素（oParent是待获取元素的父容器，sClass是类名）。
function getByClass(oParent, sClass) {
  var aEle = oParent.getElementsByTagName("*");
  var aResult = [];
  for (var i = 0; i < aEle.length; i++) {
    if (aEle[i].className == sClass) {
      aResult.push(aEle[i]);
    }
    return aResult;
  }
}

//多物体任意值缓冲运动（obj是对象，attr是属性名，iTarget是目标值,coe是速度缩放系数）。
function move(obj, attr, iTarget, coe) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var cur = 0;
    if (attr == "opacity") {
      cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
    } else {
      cur = parseInt(getStyle(obj, attr));
    }
    var speed = (iTarget - cur) / coe;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    if (cur == iTarget) {
      clearInterval(obj.timer);
    } else {
      if (attr == "opacity") {
        obj.style.filter = "alpha(opacity:" + cur + speed + ")";
        obj.style.opacity = (cur + speed) / 100;
      } else {
        obj.style[attr] = cur + speed + "px";
      }
    }
  }, 30);
}

//获取浏览器窗口的宽度和高度
function getWindowSize() {
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var width =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  return { w: width, h: height };
}

//查看对象是否为日期 (包含字符串 "Date"):
function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}

// 查看对象是否为数组(包含字符串 "Array"):
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

//查看对象是否为对象 (包含字符串 "Object"):
function isObject(myObject) {
  return myObject.constructor.toString().indexOf("Object") > -1;
}

//找到所有数值最大的一个
// x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  var i,
    max = arguments[0];
  if (arguments.length < 2) return max;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

//计算所有数值的和
// x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  var i,
    sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

//destiny是原始URL，param是参数的名称，param_value是参数的值
function changeUrlParam(destiny, param, param_value) {
  var pattern = param + "=([^&]*)";
  var replaceText = param + "=" + param_value;
  if (destiny.match(pattern)) {
    //存在，则替换
    var tmp = "/" + param + "=[^&]*/";
    tmp = destiny.replace(eval(tmp), replaceText);
    return tmp;
  } else {
    //不存在，则添加param
    if (destiny.match("[?]")) {
      return destiny + "&" + replaceText;
    } else {
      return destiny + "?" + replaceText;
    }
  }
}

//paraName URL参数的名称
function getUrlParam(paraName) {
  var url = document.location.toString();
  var arrObj = url.split("?");
  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split("&");
    var arr;
    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");
      if (arr != null && arr[0] == paraName) {
        return arr[1];
      }
    }
    return "";
  } else {
    return "";
  }
}

//设置cookie方法
function setCookie(key, val, time) {
  var date = new Date(); //获取当前时间
  var expiresDays = time; //将date设置为n天以后的时间
  date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
  document.cookie = key + "=" + val + ";expires=" + date.toGMTString(); //设置cookie
}
//获取cookie方法
function getCookie(key) {
  var getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
  var arrCookie = getCookie.split(";"); //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
  var tips; //声明变量tips
  for (var i = 0; i < arrCookie.length; i++) {
    //使用for循环查找cookie中的tips变量
    var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
    if (key == arr[0]) {
      //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
      tips = arr[1]; //将cookie的值赋给变量tips
      break; //终止for循环遍历
    }
  }
  return tips;
}
//删除cookie方法
function deleteCookie(key) {
  var date = new Date(); //获取当前时间
  date.setTime(date.getTime() - 10000); //将date设置为过去的时间
  document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
}

//创建请求对象的兼容写法
var xmlhttp;
if (window.XMLHttpRequest) {
  //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
  xmlhttp = new XMLHttpRequest();
} else {
  // IE6, IE5 浏览器执行代码
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
