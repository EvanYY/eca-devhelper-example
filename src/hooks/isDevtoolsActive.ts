import { useState, useEffect } from "react";

import { checkDevtoolsHeath } from "../chrome";
export const useDevtoolsActive = () => {
  const devtools = checkDevtoolsHeath();
  // panel 面板存活
  const [status, setStatus] = useState(devtools ? devtools.ACTIVE : false);
  const changeActive = (status: any) => {
    console.log(
      "🚀 ~ file: isDevtoolsActive.ts ~ line 9 ~ changeActive ~ status",
      status
    );
    setStatus(status);
  };
  useEffect(() => {
    if (devtools) {
      const { target } = devtools.getStatic();
      console.log(
        "🚀 ~ file: isDevtoolsActive.ts ~ line 18 ~ useEffect ~ target",
        target
      );
      devtools.addEvent(target.active, changeActive);
    }
    return () => {
      if (devtools) {
        const { target } = devtools.getStatic();
        devtools.removeEvent(target.active, changeActive);
      }
    };
  });
  return {
    status,
  };
};
