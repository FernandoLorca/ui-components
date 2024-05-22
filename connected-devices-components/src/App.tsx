import AvatarName from './components/AvatarName';
import CardDevices from './components/CardDevices';
import CardScenesWrapper from './components/CardScenesWrapper';

export default function App() {
  return (
    <div className="flex justify-center bg-slate-300 md:h-screen p-32">
      <div className="w-[20rem] flex flex-col gap-5 md:flex-row md:min-w-[40rem] md:max-w[40rem]">
        <div className="w-full flex flex-col gap-5">
          <AvatarName />
          <CardDevices />
        </div>
        <div className="w-full self-start">
          <CardScenesWrapper />
        </div>
      </div>
    </div>
  );
}
