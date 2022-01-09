module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'off' }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
};