import { useEffect } from "react";

export const useNonceRemoval = (tokens) => {
  useEffect(() => {
    if (tokens) {
      sessionStorage.removeItem("nonce");
    }
  }, [tokens]);
};
