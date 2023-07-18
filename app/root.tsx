import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import clsx from 'clsx';
import tailwindStylesheetUrl from "~/tailwind.css";
import SideNavPage from "./components/side-nav";
import React from "react";
import type { Theme} from "./utils/theme-provider";
import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from "./utils/theme-provider";

import type { LoaderFunction } from '@remix-run/cloudflare';
import type { Language } from "./utils/lang-provider";
import { LangProvider } from "./utils/lang-provider";
import { getInfosSession } from "./utils/cookies.server";

export type LoaderData = {
  theme: Theme | null;
  lang: Language | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const cookieSession = await getInfosSession(request);
  const data: LoaderData = {
    theme: cookieSession.getTheme(),
    lang: cookieSession.getLang(),
  };

  return data;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sunnee Chevalier's Website",
  viewport: "width=device-width,initial-scale=1",
});


export function App() {
  const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();
  return (
  <html lang="en" className={clsx(theme, "h-full") } >
    <head>
      <Meta />
      <Links />
      <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)}/>
    </head>
    <body className="h-full dark:bg-gray-900 bg-gray-50">
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      <SideNavPage>
        <Outlet />
      </SideNavPage>
    </body> 
  </html>);
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <LangProvider specifiedLang={data.lang}>
      <ThemeProvider specifiedTheme={data.theme}>
        <App />
      </ThemeProvider>
    </LangProvider>
  );
}
