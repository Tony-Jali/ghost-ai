"use client";

import { EditorLayout } from "@/components/editor/editor-layout";
import { Button } from "@/components/ui/button";
import { Sparkles, Layers, Plus } from "lucide-react";

export default function EditorPage() {
  return (
    <EditorLayout navbarTitle="Ghost AI — Architecture Editor">
      <div className="relative flex flex-1 items-center justify-center bg-bg-base">
        {/* Canvas Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #f0f0f4 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Center Workspace Placeholder / Welcome Hero */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-md px-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-elevated border border-border-default text-brand shadow-lg">
            <Layers className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Architecture Canvas
            </h1>
            <p className="text-sm text-text-muted leading-relaxed">
              Open the project sidebar to manage your system designs or start crafting nodes and AI-generated architectures directly on the canvas.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="gap-2 rounded-xl bg-brand text-bg-base font-medium hover:bg-brand/90 transition-colors">
              <Plus className="h-4 w-4" />
              New Architecture
            </Button>
            <Button
              variant="outline"
              className="gap-2 rounded-xl border-border-default bg-bg-surface text-text-primary hover:bg-bg-subtle hover:text-text-primary transition-colors"
            >
              <Sparkles className="h-4 w-4 text-accent-ai-text" />
              Prompt AI
            </Button>
          </div>
        </div>
      </div>
    </EditorLayout>
  );
}
