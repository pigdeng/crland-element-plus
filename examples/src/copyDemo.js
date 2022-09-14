// node 更换文件扩展名
const will = ".vue"; // 要修改的扩展名
const instead = ".txt"; // 要改成的扩展名

const fs = require("fs");
const path = require("path");
const nowPath = path.resolve("examples/public/code/");
reName(nowPath);
function reName(nowPath) {
  fs.readdir(nowPath, function (err, files) {
    for (const i in files) {
      const file = files[i];
      const fildir = path.join(nowPath, file);
      fs.stat(fildir, function (eror, stats) {
        if (eror) {
          console.warn(eror);
        } else {
          if (stats.isFile()) {
            // 判断是不是文件
            if (path.extname(fildir) === will) {
              const fileName = path
                .basename(fildir)
                .split(path.extname(fildir))[0]; // 获取文件名称 不带扩展名
              const fileNames = path.basename(fildir); // 获取文件名称 带扩展名
              const filePath = fildir.split(path.basename(fildir))[0]; // 文件路径不带文件名
              const expand = path.extname(fildir); // 文件扩展名
              console.log(fildir); // 获取文件路径+文件名称
              fs.rename(
                fildir,
                `${filePath}${fileName}${instead}`,
                function (err) {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(`${filePath}${fileName}${instead}------已完成`);
                  }
                }
              );
            }
          }
          if (stats.isDirectory()) {
            // 判断是不是文件夹，如果是文件夹则返回进入文件夹获取文件
            reName(fildir);
          }
        }
      });
    }
  });
}
