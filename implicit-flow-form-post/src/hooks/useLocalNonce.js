import { useState, useEffect } from "react";
import { getOrGenerateLocalNonce } from "../utils/getOrGenerateLocalNonce";

export const useLocalNonce = () => {
  const [nonce, setNonce] = useState(null);

  useEffect(() => {
    setNonce(getOrGenerateLocalNonce());
  }, []);

  return nonce;
};
