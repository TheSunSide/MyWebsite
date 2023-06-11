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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import tailwindStylesheetUrl from "~/tailwind.css";
import SideNavPage from "./components/side-nav";
import React from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";

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
  return (
  <html lang="en" className={"h-full " } >
    <head>
      <Meta />
      <Links />
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
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
