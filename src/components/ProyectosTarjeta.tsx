import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
}

export default function ProyectosTarjeta({ title, description, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md">
      <div>
        <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors"
          >
            <Globe className="w-4 h-4" />
            Demo
          </a>
        )}

        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border border-neutral-200 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-900 transition-colors"
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        )}
      </div>
    </div>
  );
}