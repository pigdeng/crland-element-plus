// 清除所有缓存
export function removeLocalStorage() {
  localStorage.clear();
}

// 自适应尺寸单位
export function computedSize(value: any) {
  const size = value + "";
  if (size.indexOf("%") !== -1) {
    return size;
  } else if (size.indexOf("px") !== -1) {
    return size;
  } else {
    return size + "px";
  }
}

// 获取第一个字符串
export function getFirstText(value: string) {
  if (value) {
    return value.slice(0, 1);
  } else {
    return value;
  }
}

// 深拷贝
export function deepClone(target: any) {
  // 定义一个变量
  let result: any;
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === "object") {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = []; // 将result赋值为一个数组，并且执行遍历
      for (const i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]));
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (const i in target) {
        result[i] = deepClone(target[i]);
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target;
  }
  // 返回最终结果
  return result;
}

// 随机字符串
export function randomString(length: number) {
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i)
    result += str[Math.floor(Math.random() * str.length)];
  return result;
}

// 千位数加分隔符号
export function numFormat(num: any) {
  num = parseFloat(num);
  if (isNaN(num)) {
    return;
  }

  num = num.toFixed(2);
  const res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  });
  return res;
}
