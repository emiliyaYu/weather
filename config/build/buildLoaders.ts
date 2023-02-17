import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders (isDevelopmentMode: boolean): webpack.RuleSetRule[] {
    // Важен порядок лоадеров, поэтому выносим их в переменные, чтобы было легче отслеживать их в общем [];
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('module')),
                        localIdentName: isDevelopmentMode
                            ? '[local]__[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                },
            },
            // Compiles Sass to CSS
            "sass-loader"

        ],
    }

    return [
        typeScriptLoader,
        stylesLoader
    ]
}