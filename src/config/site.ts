import type { FooterItem, MainNavItem } from "@/types";

import { slugify } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

// const links = {
//   twitter: "https://twitter.com/sadmann17",
//   github: "https://github.com/sadmann7/skateshop",
//   githubAccount: "https://github.com/sadmann7",
//   discord: "https://discord.com/users/sadmann7",
//   calDotCom: "https://cal.com/sadmann7",
// };

export const siteConfig = {
  name: "Accelerator e commerce",
  description: "Internal accelerated ecoomerce",
  url: "http://localhost:3000",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
    {
      title: "Product",
      items: [
        {
          title: "Products",
          href: "/",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
    {
      title: "About",
      href: "/",
    },
  ] satisfies MainNavItem[],
  //   links,
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "/",
          // href: "https://onestopshop.jackblatch.com",
          external: false,
        },
        {
          title: "Acme Corp",
          href: "/",
          // href: "https://acme-corp.jumr.dev",
          external: false,
        },
        {
          title: "craft.mxkaske.dev",
          href: "/",
          // href: "https://craft.mxkaske.dev",
          external: false,
        },
        {
          title: "Taxonomy",
          href: "/",
          // href: "https://tx.shadcn.com/",
          external: false,
        },
        {
          title: "shadcn/ui",
          href: "/",
          // href: "https://ui.shadcn.com",
          external: false,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/",
          external: false,
        },
        {
          title: "Contact",
          href: "/",
          external: false,
        },
        {
          title: "Terms",
          href: "/",
          external: false,
        },
        {
          title: "Privacy",
          href: "/",
          external: false,
        },
      ],
    },
    // {
    //   title: "Social",
    //   items: [
    //     {
    //       title: "Twitter",
    //       href: links.twitter,
    //       external: true,
    //     },
    //     {
    //       title: "GitHub",
    //       href: links.githubAccount,
    //       external: true,
    //     },
    //     {
    //       title: "Discord",
    //       href: links.discord,
    //       external: true,
    //     },
    //     {
    //       title: "cal.com",
    //       href: links.calDotCom,
    //       external: true,
    //     },
    //   ],
    // },
    {
      title: "Lofi",
      items: [
        {
          title: "beats to study to",
          href: "/",
          // href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: false,
        },
        {
          title: "beats to chill to",
          href: "/",
          // href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: false,
        },
        {
          title: "a fresh start",
          href: "/",
          // href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: false,
        },
        {
          title: "coffee to go",
          href: "/",
          // href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
};
