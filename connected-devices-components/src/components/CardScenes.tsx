interface CardScenesProps {
  scene: string;
  devices: string;
  img: JSX.Element;
  bgColor?: string;
}

export default function CardScenes({
  scene,
  devices,
  img,
  bgColor = 'bg-white',
}: CardScenesProps) {
  return (
    <div className={`w-full rounded-xl p-3 ${bgColor}`}>
      <div className="flex justify-between">
        {img}
        <img
          src="/dots.svg"
          className="w-3 h-3 rotate-90 cursor-pointer hover:opacity-75"
        />
      </div>
      <p className="font-bold text-sm pt-7">{scene}</p>
      <p className="text-xs text-slate-600">{devices}</p>
    </div>
  );
}
