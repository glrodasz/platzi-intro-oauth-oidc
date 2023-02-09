import { useState, useEffect } from "react";
import { obtainSession } from "../utils/obtainSession";

export const useSession = (key, isCryptographically) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(obtainSession(key, isCryptographically));
  }, []);

  return value;
};
