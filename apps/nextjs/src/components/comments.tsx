import { cn } from "@saasfly/ui";
import Marquee from "@saasfly/ui/marquee";

const reviews = [
  {
    name: "React",
    body: "Biblioteca JavaScript para criar interfaces de usuário.",
    img: "https://www.shareicon.net/download/2016/07/10/119874_apps_512x512.png",
  },
  {
    name: "React Native",
    body: " Framework para construir aplicativos móveis com React.",
    img: "https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png",
  },
  {
    name: "Ruby on Rails",
    body: "Framework web em Ruby para desenvolvimento ágil.",
    img: "https://www.svgrepo.com/show/376345/rails.svg",
  },
  {
    name: "Next",
    body: "Framework React para renderização do lado do servidor.",
    img: "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png",
  },
  {
    name: "Node",
    body: "Ambiente JavaScript para executar código no servidor.",
    img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    name: "Typescript",
    body: "JavaScript com tipagem estática para maior segurança.",
    img: "https://cdn-icons-png.freepik.com/512/919/919832.png",
  },
  {
    name: "PostgreSQL",
    body: "Banco de dados relacional robusto e open-source.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJjG0Rd9ia0jsGl6DMe1DqenQCiCuI0t61Q&s",
  },
  {
    name: "AWS",
    body: "Plataforma de computação em nuvem da Amazon.",
    img: "https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png",
  },
  {
    name: "Digital Ocean",
    body: "Provedor de infraestrutura em nuvem fácil de usar.",
    img: "https://static-00.iconduck.com/assets.00/digitalocean-icon-2048x2048-3xbgy582.png",
  },
  {
    name: "Figma",
    body: "Ferramenta de design colaborativo baseada na web.  ",
    img: "https://static-00.iconduck.com/assets.00/figma-icon-2048x2048-lvgft610.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export { Comments };
