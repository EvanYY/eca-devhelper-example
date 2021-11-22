import { useEffect } from "react";

import { checkDevtoolsHeath } from "../chrome";
export const useAbortRequest = () => {
  const devtools = checkDevtoolsHeath();
  // panel 面板存活
  const change = (status: any) => {
    console.log(
      "🚀 ~ file: abortRequest.ts ~ line 8 ~ change ~ status",
      status
    );
  };
  useEffect(() => {
    if (devtools) {
      const { target } = devtools.getStatic();
      devtools.addEvent(target.abort, change);
    }
    return () => {
      if (devtools) {
        const { target } = devtools.getStatic();
        devtools.removeEvent(target.abort, change);
      }
    };
  });
};
