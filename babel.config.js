const presets = [
  [
    '@babel/env',
    {
      targets: [
        'last 2 Chrome versions',
        'last 2 ChromeAndroid versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'Edge >= 15',
      ],
      useBuiltIns: 'usage',
      corejs: '3.6.5',
    },
  ],
];

module.exports = { presets };
