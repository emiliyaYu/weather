import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDevelopmentMode } = options;
    return {
        mode,
        entry: {
            ghothelon: paths.entry,
        },
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins({ path: paths.html }),
        module: {
            rules: buildLoaders(isDevelopmentMode)
        },
        resolve: buildResolvers(paths),
        devtool: isDevelopmentMode ? "inline-source-map" : undefined,
        devServer: isDevelopmentMode ? buildDevServer(options) : undefined,

    }
}