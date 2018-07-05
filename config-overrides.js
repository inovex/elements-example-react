module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.plugins = [...config.plugins, require('@inovex/elements/webpack-plugin')('static/js')];
    return config;
}