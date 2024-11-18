import path from 'path';

export default {
    entry: {
        codigo: './src/js/codigo.js',
        experiencias: './src/js/experiencias.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}