const assets = '.less|.svg|.png|.jpg|.svg|.css|.scss';

module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  // 在对象和数组的最后一个元素添加逗号
  trailingComma: 'all',
  // 大括号中间的空格
  bracketSpacing: true,
  // 每行单个属性
  singleAttributePerLine: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  plugins: [
    'prettier-plugin-css-order',
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    `^@/(.*)(?<!${assets})$`,
    `^[(./|../)](.*)(?<!${assets})$`,
    `${assets}$`,
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    'typescript',
    'classProperties',
    'decorators-legacy',
    'jsx',
  ],
};
