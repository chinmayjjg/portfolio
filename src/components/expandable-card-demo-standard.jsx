"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Github, X } from "lucide-react";
import { useOutsideClick } from "../hooks/use-outside-click";

const ProjectImage = ({ project, className }) => (
  <img
    src={project.src}
    alt={`${project.title} project preview`}
    loading="lazy"
    className={className}
    onError={(event) => {
      if (project.fallbackSrc && !event.currentTarget.dataset.fallbackApplied) {
        event.currentTarget.dataset.fallbackApplied = "true";
        event.currentTarget.src = project.fallbackSrc;
      }
    }}
  />
);

export default function ExpandableProjectCards({ projects }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1200] bg-black/75 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[1201] grid place-items-center p-3 md:p-6">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-title-${id}`}
              className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-950 shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition-colors hover:bg-black"
              >
                <X size={18} />
              </button>

              <motion.div layoutId={`image-${active.title}-${id}`} className="shrink-0">
                <ProjectImage
                  project={active}
                  className="h-56 w-full object-cover object-top sm:h-72"
                />
              </motion.div>

              <div className="overflow-y-auto p-5 sm:p-6">
                <motion.h3
                  id={`project-title-${id}`}
                  layoutId={`title-${active.title}-${id}`}
                  className="text-xl font-semibold text-white sm:text-2xl"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.title}-${id}`}
                  className="mt-2 text-sm leading-6 text-neutral-400"
                >
                  {active.description}
                </motion.p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {active.liveLink && (
                    <a
                      href={active.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={active.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-3">
        {projects.map((project) => (
          <motion.button
            type="button"
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            className="group grid min-h-28 w-full grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-white/10 bg-neutral-950/70 p-3 text-left transition-colors hover:border-white/20 hover:bg-neutral-900 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:p-4"
          >
            <motion.div layoutId={`image-${project.title}-${id}`} className="overflow-hidden rounded-md">
              <ProjectImage
                project={project}
                className="h-20 w-full object-cover object-top sm:h-24"
              />
            </motion.div>

            <div className="min-w-0">
              <motion.h3
                layoutId={`title-${project.title}-${id}`}
                className="truncate text-base font-semibold text-white sm:text-lg"
              >
                {project.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${project.title}-${id}`}
                className="mt-1 line-clamp-2 text-sm text-neutral-400"
              >
                {project.description}
              </motion.p>
              <div className="mt-3 hidden flex-wrap gap-2 sm:flex">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-neutral-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="hidden rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-950 transition-colors group-hover:bg-neutral-200 sm:inline-flex">
              View
            </span>
          </motion.button>
        ))}
      </div>
    </>
  );
}
