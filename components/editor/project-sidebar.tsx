"use client";

import * as React from "react";
import { X, Plus, FolderGit2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface ProjectSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  onNewProject?: () => void;
  className?: string;
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-14 left-0 bottom-0 z-40 flex w-80 flex-col border-r border-border-default bg-bg-surface/95 backdrop-blur-md text-text-primary shadow-2xl transition-transform duration-200 ease-in-out select-none",
        isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none",
        className
      )}
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
    >
      {/* Sidebar Header */}
      <div className="flex h-14 items-center justify-between border-b border-border-default px-4">
        <h2 className="text-sm font-semibold tracking-tight text-text-primary">
          Projects
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 text-text-muted hover:bg-bg-subtle hover:text-text-primary rounded-xl"
          aria-label="Close project sidebar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-1 flex-col overflow-hidden p-4">
        <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
          <TabsList className="grid w-full grid-cols-2 bg-bg-subtle border border-border-default rounded-xl p-1">
            <TabsTrigger
              value="my-projects"
              className="rounded-lg text-xs font-medium data-[state=active]:bg-bg-elevated data-[state=active]:text-text-primary text-text-muted transition-colors"
            >
              My Projects
            </TabsTrigger>
            <TabsTrigger
              value="shared"
              className="rounded-lg text-xs font-medium data-[state=active]:bg-bg-elevated data-[state=active]:text-text-primary text-text-muted transition-colors"
            >
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="my-projects"
            className="flex flex-1 flex-col items-center justify-center text-center p-6 mt-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-subtle border border-border-default text-text-muted mb-3">
              <FolderGit2 className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-text-primary">
              No personal projects yet
            </p>
            <p className="text-xs text-text-muted mt-1 max-w-[200px]">
              Create a project to start designing your system architecture.
            </p>
          </TabsContent>

          <TabsContent
            value="shared"
            className="flex flex-1 flex-col items-center justify-center text-center p-6 mt-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-subtle border border-border-default text-text-muted mb-3">
              <Users className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-text-primary">
              No shared projects
            </p>
            <p className="text-xs text-text-muted mt-1 max-w-[200px]">
              Projects shared with you by collaborators will appear here.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer Action */}
      <div className="border-t border-border-default p-4 bg-bg-surface">
        <Button
          onClick={onNewProject}
          className="w-full gap-2 rounded-xl bg-brand text-bg-base font-medium hover:bg-brand/90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
