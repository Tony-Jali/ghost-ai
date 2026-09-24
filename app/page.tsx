"use client";

import { EditorLayout } from "@/components/editor/editor-layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <EditorLayout>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-text-primary">
            Ghost AI Canvas Workspace
          </h1>
          <p className="text-sm text-text-muted max-w-sm">
            Toggle the project sidebar in the top left or begin designing your architecture.
          </p>
          <Button className="rounded-xl bg-brand text-bg-base font-medium hover:bg-brand/90">
            Get Started
          </Button>
        </div>
      </div>
    </EditorLayout>
  );
}