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
  const [isLoading, setIsloading] = useState(false);
  const requestIdRef = useRef<number>(0);

  const getUser = async (currentRequestId: number): Promise<void> => {
    try {
      setIsloading(true);
      const res = await fetch('https://randomuser.me/api/');
      const user = await res.json();

      if (requestIdRef.current === currentRequestId) {
        setUser(user.results[0]);
      }
    } catch (error) {
      if (requestIdRef.current === currentRequestId) {
        console.error(error);
      }
    } finally {
      if (requestIdRef.current === currentRequestId) {
        setIsloading(false);
      }
    }
  };

  useEffect(() => {
    const currentRequestId = ++requestIdRef.current;
    getUser(currentRequestId);
  }, []);

  return (
    <div className="h-[3rem] flex items-center">
      {isLoading ? (
        <div className="w-12 h-10 rounded-full bg-slate-600 animate-pulse" />
      ) : (
        <img
          src={user?.picture?.thumbnail}
          alt={`${user?.name?.first} ${user?.name?.last} thumbnail`}
          className="rounded-full"
        />
      )}
      <div className="w-full h-full flex items-center justify-between bg-[#f2f204] rounded-full px-5 text-sm">
        <div>
          <p className="flex gap-1 font-bold">
            Hi,{' '}
            {isLoading ? (
              <div className="w-36 h-5 rounded-full bg-slate-600 animate-pulse opacity-10" />
            ) : (
              `${user?.name?.first} ${user?.name?.last}`
            )}
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
