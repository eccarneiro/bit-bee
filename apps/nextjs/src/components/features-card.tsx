"use client";
import { cn } from "@saasfly/ui";
import { AnimatedList } from "@saasfly/ui/animated-list";
import Link from "next/link";

interface Item {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

let notifications = [
  {
    id: "beespot",
    name: "BeeSpot",
    description: "Wi-Fi como uma ferramenta de marketing.",
    icon: "🛜",
    color: "#FFB800",
  },
  {
    id: "magazine",
    name: "Magazine",
    description: "A Modernização da Publicação Digital.",
    icon: "🧾",
    color: "#FFB800",
  },
  {
    id: "e-agc",
    name: "E-AGC",
    description: "Assembleias virtuais.",
    icon: "💻",
    color: "#FFB800",
  },
  {
    id: "semear",
    name: "Semear",
    description: "Semeando oportunidades.",
    icon: "🔄",
    color: "#FFB800",
  },
  {
    id: "cubii",
    name: "Cubii",
    description: "Administrador de serviços de condomínio.",
    icon: "🧊",
    color: "#FFB800",
  },
];

notifications = Array.from({ length: 30 }, () => notifications).flat();

const Notification = ({ id, name, description, icon, color }: Item) => {
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
        <div className="flex flex-1 items-center justify-between overflow-hidden">
          <div>
            <figcaption className="text-lg font-semibold tracking-tight text-gray-800 dark:text-white">
              {name}
            </figcaption>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <Link
            href={`/products/${id}`}
            className="ml-4 rounded-lg dark:bg-transparent  text-white px-3 py-2 dark:hover:bg-gray-400"
          >
            +
          </Link>
        </div>
      </div>
    </figure>
  );
};

export function FeaturesCard() {
  return (
    <div className="relative  max-h-[450px] min-h-[450px] overflow-hidden rounded-lg  p-6 mt-[25%]">

      <AnimatedList className="bg-transparent shadow-inner">
        {notifications.map((item, id) => (
          <Notification {...item} key={id} />
        ))}
      </AnimatedList>
    </div >
  );
}
