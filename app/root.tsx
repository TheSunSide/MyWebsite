import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import clsx from 'clsx';

import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/theme-provider';
import tailwindStylesheetUrl from "~/tailwind.css";
import SideNavPage from "./components/side-nav";

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

  return (
  <html lang="en" className={"h-full " + clsx(theme) } >
    <head>
      <Meta />
      <Links />
      <NonFlashOfWrongThemeEls />
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
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
