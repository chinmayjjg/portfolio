"use client";
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "../../lib/utils";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "group rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img src={card.src} alt={card.title} className="h-full w-full object-cover absolute inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/15 flex items-end p-5 transition-opacity duration-300 opacity-100 md:opacity-0",
        hovered === index && "md:opacity-100"
      )}>
      <div className="w-full">
        <div className="text-xl md:text-2xl font-semibold text-white">
          {card.title}
        </div>
        {card.description && (
          <p className="mt-2 text-sm leading-6 text-neutral-200">
            {card.description}
          </p>
        )}
        {card.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-neutral-100 backdrop-blur">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
          {card.githubLink && (
            <a
              href={card.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {card.liveLink && (
            <a
              href={card.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
  );
}
