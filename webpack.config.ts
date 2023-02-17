import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        app: path.resolve(__dirname, 'src/app'),
        appStyles: path.resolve(__dirname, 'src/app/styles'),
        pages: path.resolve(__dirname, 'src/pages'),
        widgets: path.resolve(__dirname, 'src/widgets'),
        shared: path.resolve(__dirname, 'src/shared'),
        features: path.resolve(__dirname, 'src/features'),
    }

    const PORT = 3000;
    const MODE = env.mode || 'development'
    const isDevelopmentMode = MODE === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode: MODE,
        paths,
        port: PORT,
        isDevelopmentMode,
    })

    return config;
};