import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calendar Ortodox",
    short_name: "Calendar Ortodox",
    description: "Calendarul ortodox zilnic, lunar și anual.",
    start_url: "/zilnic",
    display: "standalone",
    background_color: "#eae8e3",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
