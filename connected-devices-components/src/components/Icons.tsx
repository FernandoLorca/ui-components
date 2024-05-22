interface IconsProps {
  img: React.ReactElement<'img'>;
  bgColor?: string;
}

export default function Icons({ img, bgColor = 'bg-white' }: IconsProps) {
  return (
    <div
      className={`w-8 h-8 flex items-center justify-center rounded-full ${bgColor}`}
    >
      {img}
    </div>
  );
}
