import { Outlet } from "@remix-run/react";
import SideNavPage from "~/components/side-nav";

export default function Projects() {

  return (
    SideNavPage(
      <Outlet />
    )
  );
}