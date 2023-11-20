/* global hexo */

// Modified by Xecades - 2020 / 02 / 22
// <link href="https://fonts.googleapis.com/css?family=Noto+Serif+SC:400,500,700&display=swap&subset=chinese-simplified" rel="stylesheet"></link>
// <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,500,700,800|Noto+Serif+SC:300,400,500,700&display=swap&subset=chinese-simplified" rel="stylesheet">
'use strict';

hexo.extend.helper.register('next_font', () => {
  var config = hexo.theme.config.font;

  if (!config || !config.enable) return '';

  var fontDisplay = '&display=swap';
  // var fontSubset = '&subset=latin,latin-ext';
  var fontSubset = '&subset=chinese-simplified';
  // var fontStyles = ':300,300italic,400,400italic,700,700italic';
  var fontStyles = ':400,500,700,800|Noto+Serif+SC:300,400,500,700';
  // var fontHost = config.host || '//fonts.googleapis.com';
  var fontHost = config.host || '//fonts.loli.net';

  //Get a font list from config
  var fontFamilies = ['global', 'title', 'headings', 'posts', 'codes'].map(item => {
    if (config[item] && config[item].family && config[item].external) {
      return config[item].family + fontStyles;
    }
    return '';
  });
  fontFamilies = fontFamilies.filter(item => item !== '');
  fontFamilies = [...new Set(fontFamilies)];
  fontFamilies = fontFamilies.join('|');

  // Merge extra parameters to the final processed font string
  return fontFamilies ? `<link rel="stylesheet" href="${fontHost}/css?family=${fontFamilies.concat(fontDisplay, fontSubset)}">` : '';
});
