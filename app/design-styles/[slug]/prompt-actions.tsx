"use client";

import { useState } from "react";
import {
  OpenIn,
  OpenInTrigger,
  OpenInContent,
  OpenInLabel,
  OpenInSeparator,
  OpenInChatGPT,
  OpenInClaude,
  OpenInv0,
  OpenInCursor,
} from "@/components/ai-elements/open-in-chat";

export function PromptActions({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCopy}
        className="text-xs px-3 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <OpenIn query={prompt}>
        <OpenInTrigger className="h-7 text-xs text-neutral-300 hover:text-white px-3" />
        <OpenInContent>
          <OpenInLabel>Open prompt in</OpenInLabel>
          <OpenInSeparator />
          <OpenInClaude />
          <OpenInChatGPT />
          <OpenInv0 />
          <OpenInCursor />
        </OpenInContent>
      </OpenIn>
    </div>
  );
}
