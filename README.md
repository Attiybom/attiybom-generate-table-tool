# vxe-grid表格配置项生成工具
## 1.  使用说明
* 本工具是基于vxe-table生成的vxe-grid的相关配置项

### 1.1 配置项
#### 1.1.1  列配置
```js
/**
 * columnsConfig 定义表格的列配置
 * @property {string} title - 列标题，显示在表格头部。
 * @property {string} field - 对应数据中的字段名称，用于从数据对象中取值显示。
 * @property {boolean} visible - 控制该列是否显示。
 * @property {number} width - 列宽度，单位为像素。
 * @property {number} minWidth - 列的最小宽度，保证列的显示不会过于紧凑，单位为像素。
 * @property {string} align - 列内容的水平对齐方式：left、center、right。
 * @property {string} headerAlign - 列头的水平对齐方式：left、center、right。
 * @property {string} footerAlign - 列脚的水平对齐方式：left、center、right。
 * @property {boolean} sortable - 该列是否可以排序。
 * @property {string} fixed - 列固定的位置，可以是'left'或'right'。
 * @property {string} type - 列类型，'index'表示序号列，'selection'表示选择框列。
 * @property {Array<{text: string, value: string}>} filters - 列的过滤选项。
 * @property {boolean} filterMultiple - 是否支持多选过滤。
 */

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
  ];
```
#### 1.1.2  表格本身的配置项
```js
/**
 * @property {number} minHeight - 表格最小高度。
 * @property {number} maxHeight - 表格最大高度。
 * @property {string} height - 表格高度，'auto' 表示自适应高度。
 * @property {boolean} border - 是否显示表格边框。
 * @property {boolean} stripe - 是否显示斑马线（条纹）。
 * @property {boolean} showOverflow - 当内容过长被隐藏时显示tooltip。
 * @property {boolean} showHeaderOverflow - 当表头内容过长被隐藏时显示tooltip。
 * @property {boolean} showHeader - 是否显示表格的头部。
 * @property {boolean} resizable - 列的宽度是否可以拖动改变。
 * @property {boolean} highlightCurrentRow - 是否高亮当前行。
 * @property {string} rowKey - 设置row-key为每行绑定的唯一标识符，用于优化性能。
 * @property {boolean} round - 表格边角的圆角设置，true为圆角边框。
 * @property {string} size - 表格的尺寸，可选值为 'medium'、'small'、'mini'。
 * @property {boolean} loading - 是否显示表格加载中状态。
 * @property {string} align - 表格内容的默认对齐方式。
 * @property {string} headerAlign - 表格表头的对齐方式。
 * @property {string} footerAlign - 表格表尾（如有汇总行时）的对齐方式。
 * @property {Object} sortConfig - 排序配置，包含是否允许多列排序和是否为远程排序。
 * @property {Object} filterConfig - 过滤配置，包含是否为远程过滤。
 * @property {Object} tooltipConfig - 工具提示配置，包含主题设置。
 * @property {Object} pagerConfig - 分页配置，包含是否启用分页、页面大小、页面大小选项和布局设置。
 * @property {Object} contextMenu - 快捷菜单配置，包含体部的选项设置。
 * @property {Object} exportConfig - 导出配置，包含导出文件名、是否导出原始数据、是否包含表头等。
 * @property {Object} importConfig - 导入配置，包含导入时是否包含表头等。
 */
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

```


## 1.2  使用方式

### 1.2.1 全局安装
```
npm install -g attiybom-generate-table-tool
```


### 1.2.2 生成命令
```
attiybom-generate <jsonName> <filePath>
```
#### 1.2.2.1  示例
* 以下命令将会在当前目录的src/views/demo路径下生成table.json文件
* 请注意路径需要用单引号包裹
```
attiybom-generate table 'src/views/demo'
```
