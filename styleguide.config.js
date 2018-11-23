const { version } = require('./package');

module.exports = {
    components: 'src/lib/components/**/[A-Z]*.js',
    defaultExample: true,
    ribbon: {
        url: 'https://github.com/styleguidist/react-styleguidist',
    },
    // theme: {
    //     color: {
    //         baseBackground: '#2B2B2D',
    //         base: 'white',
    //         sidebarBackground: '#313234',
    //         link: '#228CDD',
    //         codeBackground: '#313234',
    //         error: '#FF4958',
    //         linkHover: 'deepskyblue',
    //         ribbonBackground: '#228CDD',
    //         ribbonText: 'white'
    //     },
    //     fontFamily: {
    //         base: 'Helvetica, Arial'
    //     }
    // },
    version,
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader',
                },
            ],
        },
    },
};
