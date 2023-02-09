export const cleanUrlHash = () => {
  history.replaceState({}, document.title, window.location.href.split('#')[0]);
}