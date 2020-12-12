const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage", // 垫片使用
      corejs: 3,
    },
  ]
];
const plugins = [];

module.exports = {
  presets,
  plugins,
  // Cannot assign to read only property 'exports' of object '#<Object>'
  // sourceType: 'unambiguous'
};
