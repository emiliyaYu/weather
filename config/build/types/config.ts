export type BuildMode = 'production' | 'development';
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    app: string;
    appStyles: string;
    pages: string;
    widgets: string;
    shared: string;
    features: string;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths,
    port: number,
    isDevelopmentMode: boolean,
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
}