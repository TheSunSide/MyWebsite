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
import { NonFlashOfWrongThemeEls, ThemeProvider } from "./utils/theme-provider";

import type { LoaderFunction } from '@remix-run/cloudflare';
import { getThemeSession } from './utils/theme.server';

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function App() {
  const data = useLoaderData<LoaderData>();
  return (
  <html lang="en" className={"h-full " } >
    <head>
      <Meta />
      <Links />
      <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)}/>
    </head>
    <body className="h-full bg-slate-50">
      {SideNavPage(<Outlet />)}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body> 
  </html>);
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
