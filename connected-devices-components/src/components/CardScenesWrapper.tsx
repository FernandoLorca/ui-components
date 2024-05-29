import CardScenes from './CardScenes';
import Icons from './Icons';

export default function CardScenesWrapper() {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-3xl bg-gray-100">
      <div className="flex gap-3">
        <CardScenes
          scene="Morning Scene"
          devices="7 Devices"
          img={
            <Icons
              img={
                <img
                  src="/sun.svg"
                  className="w-3 h-3 m-auto -rotate-45"
                />
              }
            />
          }
          bgColor="bg-[#a0bbff]"
        />
        <CardScenes
          scene="Night Scene"
          devices="2 Devices"
          img={
            <Icons
              img={
                <img
                  src="/moon.svg"
                  className="w-3 h-3 m-auto -rotate-12"
                />
              }
              bgColor="bg-[#f2f204]"
            />
          }
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Icons
            img={
              <img
                src="/plus.svg"
                className="w-3 h-3"
              />
            }
            bgColor="bg-slate-200"
          />
          <div>
            <p className="font-bold text-sm">You created 8 scenes</p>
            <p className="text-xs text-slate-600">24 devices in use</p>
          </div>
        </div>
        <div className="rounded-full bg-black text-white inline-block px-5 py-2 text-xs cursor-pointer hover:opacity-75">
          <p className="pt-[1px]">See All</p>
        </div>
      </div>
    </div>
  );
}
