const devEnv = {
    plugins: [require("tailwindcss"), require("autoprefixer")]
};

devEnv.plugins.push(require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: [
        "./public/index.html",
        "./src/app/**/*.{js,jsx,ts,tsx}"
    ],

    // defaultExtractor: (content) => {
    //     console.log('content : ', content);
    //     if (process.env.NODE_ENV === 'development') return [];

    //     return content.match(/[A-Za-z0-9-_:/]+/g) || [];
    // }
}));

module.exports = devEnv;
