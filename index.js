#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const generateJson = (filename, directoryPath) => {
  const content = {
    table: {
      name: filename,
      columns: ["Column 1", "Column 2", "Column 3"],
      rows: [
        { "Column 1": "Data 1", "Column 2": "Data 2", "Column 3": "Data 3" },
        { "Column 1": "Data 4", "Column 2": "Data 5", "Column 3": "Data 6" }
      ]
    }
  };

  // 分割路径，并确保使用系统特定的路径分隔符
  const directoryParts = directoryPath.split(path.sep);
  const fullPath = path.join(...directoryParts, `${filename}.json`);

  // 确保目录存在，如果不存在则创建
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(fullPath, JSON.stringify(content, null, 2));
  console.log(`JSON file has been generated at ${fullPath}`);
};

// 处理命令行参数
const args = process.argv.slice(2);
const [filename, directoryPath] = args;
generateJson(filename, directoryPath);
