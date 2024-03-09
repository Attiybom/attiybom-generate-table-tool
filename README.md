# vxe-grid表格配置项生成工具
## 1.使用说明
* 本工具是基于vxe-table生成的vxe-grid的相关配置项

### 1.1 配置项
#### 1.1.1 列配置
```js
  // 列配置
  const columnsConfig = [
    //  title: 列标题(可国际化)
    //  field: 列字段
    //  visible: 是否显示
    { title: "Column 1", field: "column1", visible: true },
    { title: "Column 2", field: "column2", visible: true },
    { title: "Column 3", field: "column3", visible: false }, // 假设这一列默认不显示
  ];
```
#### 1.1.2表格其他配置项
```js

  const gridOptions = {
    minHeight: "500px", // 表格最小高度
    maxHeight: "800px", //  表格最大高度
    border: true, // 是否显示边框
    stripe: true, // 是否显示斑马线
  };

```


## 1.2 使用方式

### 1.2.1 全局安装
```
npm install -g attiybom-generate-table-tool
```


### 1.2.2 生成命令
```
attiybom-generate <jsonName> <filePath>
```
#### 1.2.2.1 示例
* 以下命令将会在当前目录的src/views/demo路径下生成table.json文件
* 请注意路径需要用单引号包裹
```
attiybom-generate table 'src/views/demo'
```
