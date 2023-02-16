import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ntlchs.github.io"
  //   base: '/my-repo',
  ,
  integrations: [tailwind()]
});