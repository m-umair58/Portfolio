"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-headline-md text-secondary" suppressHydrationWarning>
      {time}
    </div>
  );
}
