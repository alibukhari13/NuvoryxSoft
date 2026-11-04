import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { parseDocument } from "htmlparser2";

const root = process.cwd();
const manifestPath = path.join(root, ".agency-import/manifest.json");
const sourceDirectory = path.join(root, ".agency-import");
const componentsRoot = path.join(root, "components");
const pagesRoot = path.join(root, "pages");
const appRoot = path.join(root, "app");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const assetDirectory = path.join(root, "public/agency-assets");
fs.mkdirSync(assetDirectory, { recursive: true });
const writtenAssets = new Set();

function externalizeEmbeddedImages(content) {
  return content.replace(
    /data:(image\/[a-zA-Z0-9.+-]+);base64,([a-zA-Z0-9+/=]+)/g,
    (_match, mime, encoded) => {
      const bytes = Buffer.from(encoded, "base64");
      const extension = mime
        .split("/")[1]
        .replace("jpeg", "jpg")
        .replace("svg+xml", "svg");
      const name = `${crypto.createHash("sha256").update(bytes).digest("hex")}.${extension}`;
      const output = path.join(assetDirectory, name);
      if (!fs.existsSync(output)) fs.writeFileSync(output, bytes);
      writtenAssets.add(name);
      return `/agency-assets/${name}`;
    },
  );
}

const attributeNames = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  autofocus: "autoFocus",
  autocomplete: "autoComplete",
  novalidate: "noValidate",
  maxlength: "maxLength",
  minlength: "minLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  rowspan: "rowSpan",
  "accept-charset": "acceptCharset",
  "http-equiv": "httpEquiv",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-opacity": "strokeOpacity",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "fill-opacity": "fillOpacity",
  "font-size": "fontSize",
  "font-family": "fontFamily",
  "enable-background": "enableBackground",
  "clip-path-units": "clipPathUnits",
  "mask-units": "maskUnits",
  "base-frequency": "baseFrequency",
  "num-octaves": "numOctaves",
  "std-deviation": "stdDeviation",
  "color-interpolation-filters": "colorInterpolationFilters",
  "x-channel-selector": "xChannelSelector",
  "y-channel-selector": "yChannelSelector",
};
const booleanAttributes = new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "readonly",
  "required",
  "reversed",
  "selected",
]);
const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function jsxText(value) {
  return value.replaceAll("{", "{'{'}").replaceAll("}", "{'}'}");
}

function styleToJs(value) {
  const entries = [];
  for (const declaration of value.split(";")) {
    const split = declaration.indexOf(":");
    if (split < 1) continue;
    const rawName = declaration.slice(0, split).trim();
    const rawValue = declaration.slice(split + 1).trim();
    if (!rawName || !rawValue) continue;
    const name = rawName.startsWith("--")
      ? rawName
      : rawName.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    entries.push(`${JSON.stringify(name)}: ${JSON.stringify(rawValue)}`);
  }
  return `{{ ${entries.join(", ")} }}`;
}

function convertAttribute(name, value, tag) {
  const lower = name.toLowerCase();
  if (["xmlns:cc", "xmlns:dc", "xmlns:rdf"].includes(lower)) return "";
  if (lower.startsWith("on")) return "";
  const jsxName = attributeNames[lower] || name;
  if (lower === "style") return `style=${styleToJs(value)}`;
  if (booleanAttributes.has(lower)) {
    const prop =
      lower === "checked"
        ? "defaultChecked"
        : lower === "selected"
          ? "defaultSelected"
          : jsxName;
    return `${prop}={true}`;
  }
  if (tag === "input" && lower === "value")
    return `defaultValue=${JSON.stringify(value)}`;
  if (lower === "value" && tag === "textarea")
    return `defaultValue=${JSON.stringify(value)}`;
  return `${jsxName}=${JSON.stringify(value)}`;
}

function convertNode(node) {
  if (node.type === "text") return jsxText(node.data);
  if (node.type === "comment" || node.type === "directive") return "";
  if (!node.name) return (node.children || []).map(convertNode).join("");
  const tag = node.name;
  const attributes = Object.entries(node.attribs || {})
    .map(([name, value]) => convertAttribute(name, value, tag))
    .filter(Boolean);
  const opening = `<${tag}${attributes.length ? ` ${attributes.join(" ")}` : ""}`;
  if (voidTags.has(tag.toLowerCase())) return `${opening} />`;
  const children = (node.children || []).map(convertNode).join("");
  return `${opening}>${children}</${tag}>`;
}

function normalizeProcessTimelines(node) {
  if (!node || node.type !== "tag") return;
  const visit = (current) => {
    if (current.type !== "tag") return;
    const classTokens = (current.attribs?.class || "").split(/\s+/);
    if (
      current.name === "div" &&
      classTokens.includes("relative") &&
      classTokens.includes("grid") &&
      classTokens.includes("gap-4")
    ) {
      const children = (current.children || []).filter(
        (child) => child.type === "tag",
      );
      const buttons = children.filter((child) => child.name === "button");
      const progress = children.find((child) => {
        const tokens = (child.attribs?.class || "").split(/\s+/);
        return (
          child.name === "div" &&
          tokens.includes("absolute") &&
          tokens.includes("left-0") &&
          tokens.includes("top-6") &&
          tokens.includes("bg-brand")
        );
      });

      if (buttons.length > 1 && progress) {
        progress.attribs.style = "width: 0%;";
        buttons.forEach((button, index) => {
          const buttonChildren = (button.children || []).filter(
            (child) => child.type === "tag",
          );
          const number = buttonChildren.find((child) => child.name === "span");
          const card = buttonChildren.find((child) => {
            const tokens = (child.attribs?.class || "").split(/\s+/);
            return tokens.includes("mt-6") && tokens.includes("border");
          });
          if (number) {
            const tokens = (number.attribs.class || "")
              .split(/\s+/)
              .filter(Boolean)
              .filter(
                (token) =>
                  !/^border-(brand|line|forest\/20|transparent)$/.test(token) &&
                  !["bg-brand", "bg-white", "text-ink"].includes(token),
              );
            tokens.push(
              ...(index === 0
                ? ["border-brand", "bg-brand", "text-ink"]
                : ["border-line", "bg-white", "text-ink"]),
            );
            number.attribs.class = tokens.join(" ");
          }
          if (card) {
            const tokens = (card.attribs.class || "")
              .split(/\s+/)
              .filter(Boolean)
              .filter(
                (token) =>
                  !/^border-(brand|line|forest\/20|transparent)$/.test(token) &&
                  !["bg-white", "shadow-lift"].includes(token),
              );
            tokens.push(index === 0 ? "border-brand" : "border-transparent");
            card.attribs.class = tokens.join(" ");
          }
        });
      }
    }
    for (const child of current.children || []) visit(child);
  };
  visit(node);
}

function safeName(route) {
  return route
    .replaceAll("?", "__")
    .replaceAll("=", "_")
    .replace(/[^a-zA-Z0-9/_-]/g, "_");
}

function writeRoute(route, entry, createAppPage = true) {
  const routeName = safeName(route);
  const routeDirectory = path.join(componentsRoot, ...routeName.split("/"));
  const pageDirectory = path.join(pagesRoot, ...routeName.split("/"));
  fs.rmSync(routeDirectory, { recursive: true, force: true });
  fs.mkdirSync(routeDirectory, { recursive: true });
  fs.mkdirSync(pageDirectory, { recursive: true });
  const pageData = JSON.parse(
    fs.readFileSync(path.join(sourceDirectory, entry.file), "utf8"),
  );
  const content = externalizeEmbeddedImages(pageData.content);
  const fragment = parseDocument(content, {
    decodeEntities: false,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
  });
  const body = fragment.children
    .find((node) => node.name === "html")
    ?.children.find((node) => node.name === "body");
  const container = body || fragment;
  const roots = (container.children || []).filter(
    (node) => node.type === "tag",
  );
  const components = [];
  roots.forEach((node, index) => {
    const sectionName = `Section${String(index + 1).padStart(2, "0")}`;
    normalizeProcessTimelines(node);
    const sectionMarkup = convertNode(node);
    fs.writeFileSync(
      path.join(routeDirectory, `${sectionName}.jsx`),
      `export default function ${sectionName}() {\n  return (\n    ${sectionMarkup}\n  );\n}\n`,
    );
    components.push(sectionName);
  });
  const imports = components
    .map((name) => `import ${name} from "@/components/${routeName}/${name}";`)
    .join("\n");
  const calls = components
    .map((name) => `      <${name} key="${name}" />`)
    .join("\n");
  const pageSource = `${imports}\n\nexport default function ${pascal(routeName)}Page() {\n  return (\n    <>\n${calls}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(pageDirectory, "page.jsx"), pageSource);
  if (createAppPage) {
    const routePath = route.split("/").filter(Boolean);
    const appDirectory = path.join(appRoot, ...routePath);
    fs.mkdirSync(appDirectory, { recursive: true });
    fs.writeFileSync(
      path.join(appDirectory, "page.jsx"),
      `import PageShell from "@/components/layout/PageShell";\nimport Page from "@/pages/${routeName}/page";\n\nexport const metadata = { title: ${JSON.stringify(`${pageData.title} · Nuvoryx`)} };\n\nexport default function RoutePage() {\n  return <PageShell><Page /></PageShell>;\n}\n`,
    );
  }
}

function pascal(value) {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

for (const [route, entry] of Object.entries(manifest)) {
  if (route.includes("?")) continue;
  writeRoute(route, entry);
}

const logosEntry = manifest["testimonials?logos=1"];
if (logosEntry) {
  writeRoute("testimonials-logos", logosEntry, false);
  const testimonialPage = path.join(appRoot, "testimonials", "page.jsx");
  fs.writeFileSync(
    testimonialPage,
    `import PageShell from "@/components/layout/PageShell";\nimport Page from "@/pages/testimonials/page";\nimport LogosPage from "@/pages/testimonials-logos/page";\n\nexport const metadata = { title: "Testimonials · Nuvoryx" };\n\nexport default async function TestimonialsRoute({ searchParams }) {\n  const query = await searchParams;\n  return <PageShell>{query?.logos === "1" ? <LogosPage /> : <Page />}</PageShell>;\n}\n`,
  );
}

const validRouteNames = new Set(
  Object.keys(manifest).map((route) => safeName(route)),
);
validRouteNames.add("testimonials-logos");
function pruneGeneratedComponents(directory) {
  for (const name of fs.readdirSync(directory)) {
    const target = path.join(directory, name);
    if (!fs.statSync(target).isDirectory()) continue;
    const route = path
      .relative(componentsRoot, target)
      .split(path.sep)
      .join("/");
    const files = fs.readdirSync(target);
    if (
      route !== "landing" &&
      files.some((file) => /^Section\d+\.jsx$/.test(file)) &&
      !validRouteNames.has(route)
    ) {
      fs.rmSync(target, { recursive: true, force: true });
      continue;
    }
    pruneGeneratedComponents(target);
  }
}
pruneGeneratedComponents(componentsRoot);

function pruneGeneratedPageCompositions(directory) {
  for (const name of fs.readdirSync(directory)) {
    const target = path.join(directory, name);
    if (!fs.statSync(target).isDirectory()) continue;
    pruneGeneratedPageCompositions(target);
    const pageFile = path.join(target, "page.jsx");
    if (!fs.existsSync(pageFile)) continue;
    const route = path
      .relative(pagesRoot, target)
      .split(path.sep)
      .join("/");
    if (route !== "home" && !validRouteNames.has(route)) {
      fs.rmSync(pageFile, { force: true });
    }
  }
}
validRouteNames.add("testimonials-logos");
pruneGeneratedPageCompositions(pagesRoot);

const validAppRoutes = new Set(
  Object.keys(manifest)
    .filter((route) => !route.includes("?"))
    .map((route) => route.split("/").filter(Boolean).join("/")),
);
function pruneAppRoutes(directory) {
  for (const name of fs.readdirSync(directory)) {
    const target = path.join(directory, name);
    if (!fs.statSync(target).isDirectory()) continue;
    pruneAppRoutes(target);
    const pageFile = path.join(target, "page.jsx");
    if (fs.existsSync(pageFile)) {
      const route = path.relative(appRoot, target).split(path.sep).join("/");
      if (!validAppRoutes.has(route)) fs.rmSync(pageFile, { force: true });
    }
  }
}
pruneAppRoutes(appRoot);

console.log(
  `Generated ${Object.keys(manifest).length} route components and ${writtenAssets.size} reusable image assets from the agency page markup.`,
);
