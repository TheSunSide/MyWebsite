import { createCookieSessionStorage } from "@remix-run/cloudflare";

import type { Theme } from "./theme-provider";
import { isTheme } from "./theme-provider";
import { env } from "process";

// TODO set ENV variables
const sessionSecret = env.SESSION_SECRET || "temp";
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

if (sessionSecret === "temp") {
  console.warn(
    "SESSION_SECRET is set to default value, please set it to a random string"
  );
}

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "my_remix_theme",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
