import { Outlet, useNavigate } from "@remix-run/react";
import SideNavPage from "../components/side-nav"
import { ProjectDesc, projectsDesc } from "~/components/projects-desc";
import { Routes } from "~/constants/routes";
export default function Projects() {
  const nav = useNavigate();
  return (
    SideNavPage(
      <Outlet />
    )
  );
}