import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import clsx from 'clsx';

import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from '~/utils/theme-provider';
import tailwindStylesheetUrl from "~/tailwind.css";

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
  <html lang="en" className={clsx(theme) + "h-full"} >
    <head>
      <Meta />
      <Links />
      <NonFlashOfWrongThemeEls />
    </head>
    <body className="h-full bg-slate-50">
      <Outlet />
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
