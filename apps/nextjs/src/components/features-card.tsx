"use client";

import { useEffect, useState } from "react"; // Importando useState e useEffect
import { cn } from "@saasfly/ui";
import { AnimatedList } from "@saasfly/ui/animated-list";
import { Meteors } from "@saasfly/ui/meteors"; // Importando a animação de meteoros
import { useRouter } from "next/navigation";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
}



let notifications = [
  {
    name: "BeeSpot",
    description: "Wi-Fi como uma ferramenta de marketing.",
    icon: "🛜",
    color: "#00C9A7",
  },
  {
    name: "Magazine",
    description: "A Modernização da Publicação Digital.",
    icon: "🧾",
    color: "#FFB800",
  },
  {
    name: "E-AGC",
    description: "Assembleias virtuais.",
    icon: "💻",
    color: "#FF3D71",
  },
  {
    name: "Semear",
    description: "Semeando oportunidades.",
    icon: "🔄",
    color: "#1E86FF",
  },
  {
    name: "Cubii",
    description: "Administrador de serviços de condomínio.",
    icon: "🧊",
    color: "#1E86FF",
  },
];

// Duplicamos os elementos para preenchimento e simulação de rolagem
notifications = Array.from({ length: 30 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[100%] rounded-lg p-5",
        "transition-all duration-300 ease-in-out hover:scale-[104%]",
        "bg-white bg-transparent shadow-lg dark:bg-[#121212] dark:shadow-none dark:backdrop-blur-sm",
        "border border-gray-600 dark:border-gray-700"
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="overflow-hidden">
          <figcaption className="text-lg font-semibold tracking-tight text-gray-800 dark:text-white">
            {name}
          </figcaption>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function FeaturesCard() {
  return (
    <div className="relative  max-h-[450px] min-h-[450px] overflow-hidden rounded-lg  p-6 mt-[25%]">

      <AnimatedList className="bg-transparent">
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div >
  );
}
