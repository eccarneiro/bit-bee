import { Meteors } from "@saasfly/ui/meteors";

import type { Meteor } from "~/types/meteors";

export function Meteorss({ meteor }: { meteor: Meteor }) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl px-4 py-8 shadow-yellow-600/15 shadow-2xl hover:shadow-gray-300 -2xl dark:bg-gray-900 dark:bg-opacity-70 dark:shadow-xl dark:shadow-yellow-300/10 dark:hover:shadow-yellow-300/20  dark:duration-500">
          <h1 className="relative z-50 mb-4 text-2xl font-bold">
            {meteor.name}
          </h1>
          <p className="light:text-slate-600 relative z-50 mb-4 text-base font-normal dark:text-slate-400">
            {meteor.description}
          </p>
          <a href={meteor.url} target="_blank" rel="noopener noreferrer">
            <button className="light:text-gray-400 rounded-lg border border-gray-500 px-4 py-1 dark:text-gray-300">
              {meteor.button_content}
            </button>
            <Meteors number={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
