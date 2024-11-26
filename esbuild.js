const esbuild = require("esbuild");

const entryPoints = ["frontend/App.tsx"];
const outdir = "frontend/build";

async function buildAndServe() {
    try {
        await esbuild.build({
            entryPoints: entryPoints,
            outdir: outdir,
            bundle: true,
            minify: true,
            plugins: [],
        });
        console.log("⚡ Build complete! ⚡");

        let ctx = await esbuild.context({
            entryPoints: entryPoints,
            bundle: true,
            outdir: outdir,
        });

        await ctx.watch();

        let { host, port } = await ctx.serve({
            servedir: outdir,
        });

        console.log(`Server running at http://${host}:${port}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

buildAndServe();