import { useState, useEffect, useRef } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
}

export default function AvatarName() {
  const [user, setUser] = useState<User | null>(null);
  const requestIdRef = useRef<number>(0);

  const getUser = async (currentRequestId: number): Promise<void> => {
    try {
      const res = await fetch('https://randomuser.me/api/');
      const user = await res.json();

      if (requestIdRef.current === currentRequestId) {
        setUser(user.results[0]);
      }
    } catch (error) {
      if (requestIdRef.current === currentRequestId) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const currentRequestId = ++requestIdRef.current;
    getUser(currentRequestId);
  }, []);

  return (
    <div className="h-[3rem] flex items-center">
      <img
        src={user?.picture?.thumbnail}
        alt={`${user?.name?.first} ${user?.name?.last} thumbnail`}
        className="rounded-full"
      />
      <div className="w-full h-full flex items-center justify-between bg-[#f2f204] rounded-full px-5 text-sm">
        <div>
          <p className="font-bold">
            Hi, {user?.name?.first} {user?.name?.last}
          </p>
          <p className="text-xs text-slate-600">7 devices active</p>
        </div>
        <div className="w-1 h-1 flex items-center cursor-pointer hover:opacity-75">
          <img src="/dots.svg" />
        </div>
      </div>
    </div>
  );
}
