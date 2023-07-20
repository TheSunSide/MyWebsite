import { createCookieSessionStorage } from "@remix-run/cloudflare";
import { env } from "process";
import type { Language } from "./lang-provider";
import { isLang } from "./lang-provider";

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

const langStorage = createCookieSessionStorage({
  cookie: {
    name: "my_remix_lang",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getLangSession(request: Request) {
  const session = await langStorage.getSession(request.headers.get("Cookie"));
  return {
    getLang: () => {
      const langValue = session.get("lang");
      return isLang(langValue) ? langValue : null;
    },
    setLang: (theme: Language) => session.set("lang", theme),
    commit: () => langStorage.commitSession(session),
  };
}

export { getLangSession };
