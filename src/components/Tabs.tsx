"use client";

import { useState, useCallback, useRef, type ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface Props {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: Props) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id ?? "");
  const tablistRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const currentIndex = tabs.findIndex((t) => t.id === activeTab);
      let nextIndex = currentIndex;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
          break;
        case "ArrowRight":
          e.preventDefault();
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
          break;
        case "Home":
          e.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          e.preventDefault();
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      const nextTab = tabs[nextIndex];
      if (nextTab) {
        setActiveTab(nextTab.id);
        const tabEl = document.getElementById(`tab-${nextTab.id}`);
        tabEl?.focus();
      }
    },
    [activeTab, tabs]
  );

  if (tabs.length === 0) return null;

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div>
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Secciones del programa"
        className="flex gap-0 border-b border-slate-200 overflow-x-auto"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={handleKeyDown}
              className={`relative flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:outline-none whitespace-nowrap ${
                isActive
                  ? "text-brand-700"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-700" />
              )}
            </button>
          );
        })}
      </div>

      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        className="mt-6 focus-visible:outline-none"
      >
        {activeContent}
      </div>
    </div>
  );
}
