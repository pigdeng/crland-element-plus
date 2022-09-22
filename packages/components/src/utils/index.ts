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

export function getFirstText(value: string) {
  if (value) {
    return value.slice(0, 1);
  } else {
    return value;
  }
}
