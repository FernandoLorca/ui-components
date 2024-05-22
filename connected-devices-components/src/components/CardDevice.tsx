import Icons from './Icons';

interface CardDeviceProps {
  icon: JSX.Element;
  deviceName: string;
  deviceUnit: string;
  deviceUsage: string;
}

export default function CardDevice({
  icon,
  deviceName,
  deviceUnit,
  deviceUsage,
}: CardDeviceProps) {
  return (
    <div className="flex justify-between items-center bg-slate-100 p-3 rounded-full">
      <div className="flex gap-4 items-center">
        {icon}
        <div>
          <p className="font-bold">{deviceName}</p>
          <p className="text-xs text-slate-600">
            {deviceUnit}
            <span className="px-3">|</span>
            {deviceUsage}
          </p>
        </div>
      </div>
      <div className="cursor-pointer hover:opacity-75 hover:translate-x-1 transition-all ease-in-out duration-200">
        <Icons
          img={
            <img
              src="/chevron.svg"
              className="w-3 h-3"
            />
          }
          bgColor="transparent"
        />
      </div>
    </div>
  );
}
