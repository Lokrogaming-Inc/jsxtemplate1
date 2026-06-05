import {
  Rocket,
  Flame,
  Zap,
  TrendingUp,
  Trophy,
  Handshake
} from "lucide-react";

export default function Ticker() {
  const items = [
    {
      icon: Rocket,
      text: "High Quality",
    },
    {
      icon: Flame,
      text: "React 19",
    },
    {
      icon: Zap,
      text: "Tailwind",
    },
    {
      icon: TrendingUp,
      text: "JSX",
    },
    {
      icon: Trophy,
      text: "JSX Template",
    },
  ];

  return (
    <div className="overflow-hidden bg-slate-900 border-y border-slate-800 py-4">
      <div className="flex w-max animate-ticker">

        {[...items, ...items, ...items].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center mx-10 min-w-[100px]"
            >
              <Icon
                size={32}
                className="text-blue-700"
              />

              <span className="mt-2 text-slate-200 text-sm">
                {item.text}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}
