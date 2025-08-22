import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderComponent, e as renderHead, m as maybeRenderHead } from '../chunks/astro/server_CP8oAVE-.mjs';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { FaMapMarkerAlt, FaUniversity, FaGithub, FaYoutube, FaTwitterSquare, FaRss, FaExternalLinkAlt } from 'react-icons/fa';
import * as React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BsSubstack } from 'react-icons/bs';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import Parser from 'rss-parser';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const darkMode = document.documentElement.classList.contains("dark");
    setIsDark(darkMode);
  }, []);
  React.useEffect(() => {
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [isDark]);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return /* @__PURE__ */ jsxs(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: toggleTheme,
      className: "w-fit h-fit",
      children: [
        /* @__PURE__ */ jsx(Sun, { className: "scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
        /* @__PURE__ */ jsx(Moon, { className: "absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
      ]
    }
  );
}

function Header() {
  return /* @__PURE__ */ jsx("div", { className: "w-fit", children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col items-center  p-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-full rounded-2xl ", children: [
      /* @__PURE__ */ jsx("img", { src: "bg.jpg", alt: "Header", className: "w-full h-full object-cover rounded-xl " }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 left-2 md:left-6 rounded-2xl ", children: /* @__PURE__ */ jsx("img", { src: "/img.png", alt: "Profile Icon", className: "w-1/3 md:w-1/2  border-4 md:border-8  border-background rounded-2xl" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex-col justify-center md:px-6 px-2 mt-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Karppa" }),
      /* @__PURE__ */ jsxs("div", { className: " text-left w-full text-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(FaMapMarkerAlt, {}),
          /* @__PURE__ */ jsx("h1", { children: "Dallas, TX" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center  space-x-2 mt-2", children: [
          /* @__PURE__ */ jsx(FaUniversity, {}),
          /* @__PURE__ */ jsx("h1", { children: "UTD" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-6 mt-4 text-sm", children: [
        /* @__PURE__ */ jsx("a", { href: "https://github.com/karppa404", className: "hover:text-primary  transition-transform duration-100  hover:scale-300", "aria-label": "social Link", children: /* @__PURE__ */ jsx(FaGithub, {}) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@Karpppa", className: "hover:text-primary  transition-transform duration-100  hover:scale-300", "aria-label": "social Link", children: /* @__PURE__ */ jsx(FaYoutube, {}) }),
        /* @__PURE__ */ jsx("a", { href: "https://substack.com/@jottingannon", className: "hover:text-primary  transition-transform duration-100  hover:scale-300", "aria-label": "social Link", children: /* @__PURE__ */ jsx(BsSubstack, {}) }),
        /* @__PURE__ */ jsx("a", { href: "https://x.com/OmniKarp", className: "hover:text-primary  transition-transform duration-100  hover:scale-300", "aria-label": "rss feed", children: /* @__PURE__ */ jsx(FaTwitterSquare, {}) }),
        /* @__PURE__ */ jsx("a", { href: "/feed.xml", className: "hover:text-primary  transition-transform duration-100  hover:scale-300", "aria-label": "rss feed", children: /* @__PURE__ */ jsx(FaRss, {}) }),
        /* @__PURE__ */ jsx(ModeToggle, {})
      ] })
    ] })
  ] }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://karppa.dev");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { content } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script>\n	const getThemePreference = () => {\n		if (\n			typeof localStorage !== "undefined" &&\n			localStorage.getItem("theme")\n		) {\n			return localStorage.getItem("theme");\n		}\n		return window.matchMedia("(prefers-color-scheme: dark)").matches\n			? "dark"\n			: "light";\n	};\n	const isDark = getThemePreference() === "dark";\n	document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n\n	if (typeof localStorage !== "undefined") {\n		const observer = new MutationObserver(() => {\n			const isDark = document.documentElement.classList.contains("dark");\n			localStorage.setItem("theme", isDark ? "dark" : "light");\n		});\n		observer.observe(document.documentElement, {\n			attributes: true,\n			attributeFilter: ["class"],\n		});\n	}\n<\/script> <html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/img.png"><title>Karppa</title>', '</head> <body class="w-full h-full flex flex-col items-center justify-center"> <main class="w-full md:max-w-2xl h-full"> ', " ", " </main> </body></html>"])), renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/header", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]));
}, "/Users/spro/Desktop/code/karppa/src/layouts/layout.astro", void 0);

function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}

function TextCard$2({ title, desc }) {
  return /* @__PURE__ */ jsx("a", { href: title, children: /* @__PURE__ */ jsxs("div", { className: "w-full h-fit flex flex-col p-4 border border-dashed gap-4 rounded-xl hover:border-primary/40  shadow-2xl transition-transform duration-300 hover:scale-110", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-xl md:text-4xl font-black inline-flex items-center gap-5 justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center line-clamp-0 text-ellipsis", children: [
        /* @__PURE__ */ jsxs(Avatar, { children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: "https://avatars.githubusercontent.com/u/67647083?v=4" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: "K" })
        ] }),
        title.replace("https://github.com/", "")
      ] }),
      /* @__PURE__ */ jsx(FaExternalLinkAlt, { className: "size-5 text-current/30" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-primary/30 font-semibold text-justify", children: desc })
  ] }) });
}

function TextCard$1({ title, desc }) {
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-fit flex flex-col p-4 border gap-4 rounded-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "text-4xl font-black", children: title }),
    /* @__PURE__ */ jsx("hr", { className: "border-dashed " }),
    /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-justify", children: desc })
  ] });
}

function TextCard({ title, desc, link }) {
  return /* @__PURE__ */ jsx("a", { href: link, children: /* @__PURE__ */ jsxs("div", { className: "w-full h-fit flex flex-col p-4 border border-dashed gap-4 rounded-xl hover:border-primary/40 shadow-2xl transition-transform duration-300 hover:scale-110 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-xl md:text-4xl font-black inline-flex items-center gap-5 justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center line-clamp-0 text-ellipsis", children: [
        /* @__PURE__ */ jsxs(Avatar, { children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: "https://avatars.githubusercontent.com/u/67647083?v=4" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: "K" })
        ] }),
        title.replace("https://github.com/", "")
      ] }),
      /* @__PURE__ */ jsx(FaExternalLinkAlt, { className: "size-5 text-current/30" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-primary/30 font-semibold text-justify", children: desc })
  ] }) });
}

const parser = new Parser();
async function getFeed() {
  const feed = await parser.parseURL("https://karppa.dev/feed.xml");
  return feed.items.map((item) => ({
    title: item.title ?? "Untitled",
    link: item.link,
    pubDate: item.pubDate ? new Date(item.pubDate) : null,
    description: item.contentSnippet ?? ""
  }));
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getFeed();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-full flex flex-col p-2 gap-5 w-full"> ${renderComponent($$result2, "TextCard", TextCard$1, { "title": "About me", "desc": "At the moment I'm working through my computer science degree at UTD. On the side I like to work on various projects, write about subjects that interest me, and work towards bettering myself in all aspects of life. You can find updates on what I have been up to on this site." })} ${renderComponent($$result2, "TextCard", TextCard$1, { "title": "Projects", "desc": "These are passion projects I have worked on or am currently working on. These range from small one-off projects to larger, ongoing endeavors." })} ${renderComponent($$result2, "RepoCard", TextCard$2, { "client:load": true, "title": "https://github.com/karppa404/Haste", "desc": "A simple paste server I made.", "client:component-hydration": "load", "client:component-path": "@/components/repo-card", "client:component-export": "default" })} ${renderComponent($$result2, "RepoCard", TextCard$2, { "client:load": true, "title": "https://github.com/karppa404/Karppa.dev", "desc": "This is the site you are on right now!", "client:component-hydration": "load", "client:component-path": "@/components/repo-card", "client:component-export": "default" })} ${renderComponent($$result2, "TextCard", TextCard$1, { "title": "Blog", "desc": "Recent posts pulled from my Substack" })} <ul class="flex flex-col gap-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", TextCard, { "client:load": true, "title": post.title, "link": post.link, "desc": post.description, "client:component-hydration": "load", "client:component-path": "@/components/post-card", "client:component-export": "default" })}`)} </ul> </main> ` })}`;
}, "/Users/spro/Desktop/code/karppa/src/pages/index.astro", void 0);

const $$file = "/Users/spro/Desktop/code/karppa/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
