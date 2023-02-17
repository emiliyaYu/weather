import webpack from "webpack";
import path from "path";
import { BuildPaths } from "./types/config";

export function buildResolvers (paths: BuildPaths): webpack.ResolveOptions {
    const { app, appStyles, pages, widgets, shared, features } = paths;
    return {
        mainFiles: ['index'],
        alias: {
            app: path.resolve(__dirname, app),
            appStyles: path.resolve(__dirname, appStyles),
            pages: path.resolve(__dirname, pages),
            widgets: path.resolve(__dirname, widgets),
            shared: path.resolve(__dirname, shared),
            features: path.resolve(__dirname, features)

        },
        extensions: ['.tsx', '.ts', '.js', 'css', 'scss']
    }
}