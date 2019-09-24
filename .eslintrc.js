module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:flowtype/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      jsx: true,
      impliedStrict: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'flowtype'
  ],
  rules: {
    // annoying rules
    'func-names': 0,
    'no-param-reassign': 0,
    'react/no-unescaped-entities': 0,
    'linebreak-style': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      } 
    ],
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],

    // es6
    'arrow-parens': 0, // require parens in arrow function arguments
    'arrow-spacing': 2, // require space before/after arrow function's arrow
    'constructor-super': 2, // verify calls of super() in constructors
    'generator-star-spacing': [2, 'before'], // enforce spacing around the * in generator functions
    'no-class-assign': 2, // disallow modifying variables of class declarations
    'no-const-assign': 2, // disallow modifying variables that are declared using const
    'no-this-before-super': 2, // disallow use of this/super before calling super() in constructors.
    'no-var': 2, // require let or const instead of var
    'object-shorthand': 0, // require method and property shorthand syntax for object literals
    'prefer-const': 2, // suggest using const declaration for variables that are never modified after declared
    'prefer-spread': 0, // suggest using the spread operator instead of .apply().
    'prefer-reflect': 1, // suggest using Reflect methods where applicable
    'require-yield': 2, // disallow generator functions that do not have yield

    // reactjs
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'react/display-name': 1, // Prevent missing displayName in a React component definition
    'react/jsx-no-undef': 2, // Disallow undeclared variables in JSX
    'react/jsx-sort-props': 0, // Enforce props alphabetical sorting
    'react/jsx-uses-react': 2, // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 2, // Prevent variables used in JSX to be incorrectly marked as unused
    'react/no-multi-comp': 0, // Prevent multiple component definition per file
    'react/no-unknown-property': 2, // Prevent usage of unknown DOM property
    'react/prop-types': 2, // Prevent missing props validation in a React component definition
    'react/self-closing-comp': 2, // Prevent extra closing tags for components without children
    'react/jsx-filename-extension': 0,
    'react/display-name': 0,
    'jsx-a11y/label-has-associated-control': [ 'error', {
      'required': {
        'some': [ 'nesting', 'id'  ]
      }
    }],
    'jsx-a11y/label-has-for': [ 'error', {
      'required': {
        'some': [ 'nesting', 'id'  ]
      }
    }],
    'max-len': ['error', 200, 2, {
      'ignoreRegExpLiterals': true,
      'ignoreTemplateLiterals': true,
      'ignoreStrings': true,
      'ignoreUrls': true,
      'ignoreTrailingComments': true,
      'ignoreComments': true,
      'tabWidth': 2
    }]
  },
};
