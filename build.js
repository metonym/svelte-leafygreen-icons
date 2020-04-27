const fs = require("fs");
const pkg = require("./package.json");
const { cleanDir, generateFromFolder } = require("svg-to-svelte");

function build() {
  const { moduleNames } = generateFromFolder(
    "node_modules/@leafygreen-ui/icon/src/glyphs",
    "lib",
    {
      clean: true,
    }
  );

  cleanDir("docs");

  const docs = [
    "# docs",
    `> ${moduleNames.length} icons from @leafygreen-ui/icon@${pkg.devDependencies["@leafygreen-ui/icon"]}.`,
    "## Usage",
    "```html",
    `<script>
       import Icon from "svelte-leafygreen-icons/lib/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "## List of icons by `ModuleName`",
    moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ];

  fs.writeFileSync("docs/README.md", docs.join("\n"));
}

build();
