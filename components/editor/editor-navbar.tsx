"use client";

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface EditorNavbarProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  toggleButtonRef?: React.Ref<HTMLButtonElement>;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function EditorNavbar({
  isSidebarOpen = false,
  onToggleSidebar,
  toggleButtonRef,
  title = "Ghost AI",
  children,
  className,
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "relative z-30 flex h-14 w-full items-center justify-between border-b border-border-default bg-bg-surface px-4 text-text-primary select-none",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Button
          ref={toggleButtonRef}
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="h-9 w-9 text-text-secondary hover:bg-bg-subtle hover:text-text-primary rounded-xl"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
        <span className="font-semibold text-sm tracking-tight text-text-primary">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">{children}</div>
    </header>
  );
}
