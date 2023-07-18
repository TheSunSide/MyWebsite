import { createCookieSessionStorage } from "@remix-run/cloudflare";
import { env } from "process";
import type { Language } from "./lang-provider";
import { isLang } from "./lang-provider";
import type { Theme } from "./theme-provider";
import { isTheme } from "./theme-provider";

// TODO set ENV variables
const __temp = "temp";
const sessionSecret = env.SESSION_SECRET || __temp;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

if (sessionSecret === __temp) {
  console.warn(
    "SESSION_SECRET is set to default value, please set it to a random string"
  );
}

console.log("Creating cookie storage");
const cookieStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getInfosSession(request: Request) {
  const session = await cookieStorage.getSession(request.headers.get("Cookie"));
  return {
    getLang: () => {
      const langValue = session.get("lang");
      return isLang(langValue) ? langValue : null;
    },
    setLang: (theme: Language) => session.set("lang", theme),
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => cookieStorage.commitSession(session),
  };
}

export { getInfosSession };
