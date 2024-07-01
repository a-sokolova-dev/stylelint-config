module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'property-no-vendor-prefix': null,
    'function-disallowed-list': ['rgba', 'hsla'],
    'color-function-notation': 'modern',
    'no-irregular-whitespace': null,
    'selector-class-pattern': null,
    'alpha-value-notation': 'number',
    'function-url-quotes': null,
    'hue-degree-notation': 'number',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin']
      }
    ],
    'color-no-hex': true
  }
}
