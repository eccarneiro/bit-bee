"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "Transformamos",
    },
    {
      text: "ideias",
    },
    {
      text: "em",
    },
    {
      text: "soluções",
    },
    {
      text: "personalizadas",
    },
    {
      text: "e",
    },
    {
      text: "inovadoras",
    },
    {
      text: "BitBee.",
      className: "text-yellow-500",
    },
  ];
  return (
    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      <TextGenerateEffect words={words} />
    </p>
  );
}
