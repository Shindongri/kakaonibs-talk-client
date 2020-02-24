const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#FFDF0A',
      '@danger-color': '#212121'
    }
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
)
