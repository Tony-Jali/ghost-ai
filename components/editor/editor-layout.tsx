"use client";

import * as React from "react";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { cn } from "@/lib/utils";

export interface EditorLayoutProps {
  children?: React.ReactNode;
  navbarTitle?: string;
  navbarActions?: React.ReactNode;
  className?: string;
}

export function EditorLayout({
  children,
  navbarTitle = "Ghost AI",
  navbarActions,
  className,
}: EditorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-screen w-screen flex-col overflow-hidden bg-bg-base text-text-primary",
        className
      )}
    >
      {/* Top Navbar */}
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        title={navbarTitle}
      >
        {navbarActions}
      </EditorNavbar>

      {/* Main Workspace Area with Floating Sidebar Overlay */}
      <div className="relative flex flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          onNewProject={() => {
            // Placeholder action for creating a new project
          }}
        />

        {/* Center Canvas / Content Surface */}
        <main className="relative flex flex-1 flex-col overflow-hidden bg-bg-base">
          {children}
        </main>
      </div>
    </div>
  );
}
