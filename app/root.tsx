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
import tailwindStylesheetUrl from "~/tailwind.css";
import SideNavPage from "./components/side-nav";
import React from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sunnee Chevalier's Website",
  viewport: "width=device-width,initial-scale=1",
});


export function App() {
  return (
  <html lang="en" className={"h-full " } >
    <head>
      <Meta />
      <Links />
    </head>
    <body className="h-full bg-slate-50">
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
  return (
    <App />
  );
}
