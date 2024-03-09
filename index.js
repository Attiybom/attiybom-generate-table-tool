#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 生成 JSON 文件
const generateJson = (filename, directoryPath) => {
  // 表格的列配置
  const columnsConfig = [
    {
      title: 'ID', // 列标题
      field: 'id', // 列字段名
      visible: true, // 控制该列是否显示
      width: 100, // 列宽度
      minWidth: 80, // 列的最小宽度，保证列的显示不会过于紧凑
      align: 'center', // 列内容的水平对齐方式：left、center、right
      headerAlign: 'center', // 列头的水平对齐方式：left、center、right
      footerAlign: 'center', // 列脚的水平对齐方式：left、center、right
      sortable: true, // 该列是否可以排序
      fixed: 'left', // 列固定的位置，可以是'left'或'right'
      type: 'index', // 列类型，'index'表示序号列，'selection'表示选择框列
      filters: [
        // 列的过滤选项
        { text: 'Option1', value: 'Option1' },
        { text: 'Option2', value: 'Option2' }
      ],
      filterMultiple: true, // 是否支持多选过滤
    },
    {
      title: 'Name',
      field: 'name',
      visible: true,
      minWidth: 150,
      align: 'left',
      headerAlign: 'center',
      sortable: false,
      fixed: false,
      // 更多配置...
    },
    {
      title: 'Age',
      field: 'age',
      visible: true,
      minWidth: 100,
      align: 'right',
      headerAlign: 'center',
      sortable: true,
      type: 'number',
      // 更多配置...
    },
    {
      title: 'Action',
      field: 'action',
      visible: true,
      minWidth: 200,
      align: 'center',
      headerAlign: 'center',
      // 更多配置...
    },
    // 添加更多列的配置...
  ];


  // 表格本身的配置
  const gridOptions = {
    minHeight: 500, // 表格最小高度
    maxHeight: 800, // 表格最大高度
    height: 'auto', // 表格高度，'auto' 表示自适应高度
    border: true, // 是否显示表格边框
    stripe: true, // 是否显示斑马线（条纹）
    showOverflow: true, // 当内容过长被隐藏时显示tooltip
    showHeaderOverflow: true, // 当表头内容过长被隐藏时显示tooltip
    showHeader: true, // 是否显示表格的头部
    resizable: true, // 列的宽度是否可以拖动改变
    highlightCurrentRow: true, // 是否高亮当前行
    rowKey: 'id', // 设置row-key为每行绑定的唯一标识符，用于优化性能
    round: true, // 表格边角的圆角设置，true为圆角边框
    size: 'medium', // 表格的尺寸，可选值为 'medium'、'small'、'mini'
    loading: false, // 是否显示表格加载中状态
    align: 'center', // 表格内容的默认对齐方式
    headerAlign: 'center', // 表格表头的对齐方式
    footerAlign: 'center', // 表格表尾（如有汇总行时）的对齐方式
    sortConfig: {
      multiple: true, // 是否允许多列排序
      remote: true, // 是否为远程排序
    },
    filterConfig: {
      remote: true, // 是否为远程过滤
    },
    tooltipConfig: {
      theme: 'dark', // 工具提示的主题
    },
    // 启用分页 (启用分页后，需要在服务端实现分页逻辑)
    pagerConfig: {
      enabled: true,
      pageSize: 10,
      pageSizes: [10, 20, 50, 100],
      layout: 'total, sizes, prev, pager, next, jumper',
    },
    // 启用快捷菜单
    contextMenu: {
      body: {
        options: [
          ['copy', 'export'], // 复制和导出选项
        ],
      },
    },
    // 导出配置
    exportConfig: {
      filename: 'table-export', // 导出文件的默认名称
      original: false, // 是否导出源数据
      withHeader: true, // 是否包含表头
    },
    // 导入配置
    importConfig: {
      withHeader: true, // 导入时是否包含表头
    },
  };

  // 生成的 JSON 文件内容
  const content = {
    tableName: filename,
    columnsConfig,
    gridOptions,
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
