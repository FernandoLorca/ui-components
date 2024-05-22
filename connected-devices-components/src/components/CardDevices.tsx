import CardDevice from './CardDevice';
import Icons from './Icons';

export default function CardDevices() {
  return (
    <div className="bg-white rounded-3xl p-5">
      <div className="flex justify-between items-center pb-5">
        <div className="flex items-center gap-4">
          <Icons
            img={
              <img
                src="/bolt.svg"
                className="w-5 h-5"
              />
            }
          />
          <div className="flex flex-col">
            <p className="font-bold">AI Power Analytics</p>
            <p className="text-xs text-slate-600">Daily usage</p>
          </div>
        </div>
        <div className="cursor-pointer hover:opacity-75">
          <Icons
            img={
              <img
                src="/arrow.svg"
                className="w-3 h-3 m-auto -rotate-45"
              />
            }
            bgColor="bg-black"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <CardDevice
          icon={
            <Icons
              img={
                <img
                  src="/air-conditioner.svg"
                  className="w-5 h-5"
                />
              }
            />
          }
          deviceName="Air Conditioner"
          deviceUnit="2 unit"
          deviceUsage="18kWh"
        />
        <CardDevice
          icon={
            <Icons
              img={
                <img
                  src="/router.svg"
                  className="w-5 h-5"
                />
              }
            />
          }
          deviceName="Wi-Fi Router"
          deviceUnit="1 unit"
          deviceUsage="9kWh"
        />
        <CardDevice
          icon={
            <Icons
              img={
                <img
                  src="/tv.svg"
                  className="w-5 h-5"
                />
              }
            />
          }
          deviceName="Smart TV"
          deviceUnit="2 unit"
          deviceUsage="12kWh"
        />
        <CardDevice
          icon={
            <Icons
              img={
                <img
                  src="/droplet.svg"
                  className="w-5 h-5"
                />
              }
            />
          }
          deviceName="Humidifier"
          deviceUnit="1 unit"
          deviceUsage="2kWh"
        />
      </div>
    </div>
  );
}
