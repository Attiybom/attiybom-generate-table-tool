#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 生成含有 columnsConfig 和 gridOptions 的 JSON 文件
const generateJson = (filename, directoryPath) => {
  // 列配置
  const columnsConfig = [
    //  title: 列标题(可国际化)
    //  field: 列字段
    //  visible: 是否显示
    { title: "Column 1", field: "column1", visible: true },
    { title: "Column 2", field: "column2", visible: true },
    { title: "Column 3", field: "column3", visible: false }, // 假设这一列默认不显示
  ];

  // 表格其他配置
  const gridOptions = {
    minHeight: "500px", // 表格最小高度
    maxHeight: "800px", //  表格最大高度
    border: true, // 是否显示边框
    stripe: true, // 是否显示斑马线
  };

  const content = {
    table: {
      name: filename,
      columnsConfig,
      gridOptions,
    },
  };

  // 分割路径，并确保使用系统特定的路径分隔符
  const directoryParts = directoryPath.split(path.sep);
  const fullPath = path.join(...directoryParts, `${filename}.json`);

  // 确保目录存在，如果不存在则创建
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 写入JSON文件
  fs.writeFileSync(fullPath, JSON.stringify(content, null, 2));
  console.log(`JSON file has been generated at ${fullPath}`);
};

// 处理命令行参数
const args = process.argv.slice(2);
const [filename, directoryPath] = args;
generateJson(filename, directoryPath);
