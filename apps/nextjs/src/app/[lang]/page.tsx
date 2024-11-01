import Link from "next/link";
import * as Icons from "@saasfly/ui/icons";
import { Tools } from "~/components/tools";
import { FeaturesCard } from "~/components/features-card";
import { Meteorss } from "~/components/meteors-card";
import { Questions } from "~/components/questions";
import ShimmerButton from "~/components/shimmer-button";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import { WobbleCardShow } from "~/components/wobble";
import { WordReveal } from "~/components/word-reveal";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { Meteor } from "~/types/meteors";
import CardCarousel from "~/components/cardCarousel";
import { FaWhatsapp } from "react-icons/fa";

const meteors_data: Meteor = {
  name: "Tem dúvidas ou quer um orçamento? Fale com a gente no WhatsApp! 🚀📲",
  description:
    "Clique no link abaixo para entrar em contato diretamente pelo WhatsApp e conversarmos sobre como podemos atender suas necessidades.",
  button_content: "Entrar em contato",
  url: "https://wa.me/seu-numero-aqui",
};

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
        <a
          href="https://wa.me/seunumerodetelefone"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 ">
              <div className="mt-6">
                <h1 className="relative mb-6 max-w-4xl text-left text-4xl font-bold dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-8xl">
                  {dict.marketing.title ||
                    "BitBee"}
                </h1>
              </div>

              <div>
                <span className="relative mb-6 max-w-3xl text-left text-3xl font-bold dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-6xl">
                  {dict.marketing.sub_title ||
                    "A sua boutique de software."}
                </span>
                <TypewriterEffectSmooths />
              </div>

              <div className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
                <Link href={`${lang}/login`}>
                  <ShimmerButton className="mx-auto flex justify-center">
                    <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                      {dict.marketing.get_started}
                    </span>
                  </ShimmerButton>
                </Link>

                <Link href="https://github.com/saasfly/saasfly" target="_blank">
                  <div className="flex h-full items-center justify-center">
                    <Icons.GitHub className="mr-2 h-6 w-6" />
                    <span className="text-base font-semibold">
                      {dict.marketing.view_on_github || "View on GitHub"}
                    </span>
                  </div>
                </Link>
              </div>
              <Meteorss meteor={meteors_data} />
            </div>
          </div>

          <div className="hidden h-full w-full xl:flex flex-col">
            <h1 className=" max-w-4xl text-left mt-16 text-4xl font-bold dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-6xl ml-5">
              Nossos Produtos
            </h1>
            <div className="-mt-28">
              <FeaturesCard />
            </div>

          </div>
        </div>
      </section>

      <section className="hidden h-[100vh] w-full xl:block -ml-36 mt-24">
        <div className="flex h-full w-full justify-between px-[320px]">
          <div className="flex w-[60%] flex-col pr-4 pt-0 justify-start">
            <WobbleCardShow />
          </div>
          <div className="h-full w-[40%]">
            <div className="flex flex-col pl-[320px] -mt-5">
              <WordReveal />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden h-[100vh] w-full xl:block">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-64">
            <div className="px-[120px] pt-5">
              <CardCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 xl:hidden">
        <Questions />
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-11">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              Tecnologias que utilizamos
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
            Trabalhamos com tecnologias {" "}
            <span className="font-bold">mais atuais</span> do mercado.
          </div>

          <div className="w-full overflow-x-hidden">
            <Tools />
          </div>
        </div>
      </section>
    </>
  );
}
