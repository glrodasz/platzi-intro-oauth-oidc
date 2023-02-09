export const ConnectButton = ({ children, href }) => {
  return (
    <a
      href={href}
      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-center min-w-32 mx-auto my-auto whitespace-nowrap shadow-lg"
    >
      {children}
    </a>
  );
};
