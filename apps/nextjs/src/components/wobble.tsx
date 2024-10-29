"use client";

import React from "react";

import { WobbleCard } from "@saasfly/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]"

      >
        <div className="max-w-xs">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-yellow-400 md:text-xl lg:text-3xl">
            Crie, inove e desenvolva conosco.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-yellow-400">
            A BitBee é uma fábrica de software brasileira que transforma ideias em soluções digitais de alto desempenho. Criamos produtos personalizados com tecnologias de ponta, garantindo eficiência e escalabilidade.
            Nossa equipe trabalha em parceria com os clientes para superar expectativas em cada projeto.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
        <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-yellow-400 md:text-xl lg:text-3xl">
          Sua Visão, Nossa Missão
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-yellow-400">
          Na BitBee, acreditamos que cada ideia pode se tornar uma solução digital inovadora.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm text-balance  text-left text-base font-semibold tracking-[-0.015em] text-yellow-400 md:max-w-lg md:text-xl lg:text-3xl">
            Soluções Eficientes
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-yellow-400">
            Na BitBee, somos especialistas em desenvolver software sob medida.
            Nossa abordagem inovadora garante que cada projeto atenda às suas expectativas.
          </p>
        </div>
        <img
          width={600}
          height={600}
          alt="linear demo"
          className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[60%] lg:-right-[20%]"
        />
      </WobbleCard>
    </div>
  );
}