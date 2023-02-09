export const getHashParams = (queryKey) => {
  const hashParams = window.location.hash.replace("#", "")?.split("&");

  if (queryKey) {
    return hashParams
      ?.find((param) => param.startsWith(queryKey))
      ?.split("=")[1];
  }

  return hashParams;
};
