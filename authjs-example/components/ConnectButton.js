export const ConnectButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full text-center min-w-32 mx-auto my-auto whitespace-nowrap shadow-lg"
    >
      {children}
    </button>
  );
};
