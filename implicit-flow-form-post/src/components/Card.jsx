const TokenCard = ({ title, token }) => {
  const [header, payload, signature] = token.split(".");

  return (
    <div className="max-w-2xl w-full bg-neutral-900 text-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row p-8 break-words text-lg">
      <pre className="w-full whitespace-normal">
        <h2 className="mb-2">{title}</h2>
        <p className="text-rose-500">{header}</p>
        <p className="text-sky-400">
          <span className="text-yellow-500 text-3xl">.</span>
          {payload}
        </p>
        <p className="text-teal-300">
          <span className="text-yellow-500 text-3xl">.</span>
          {signature}
        </p>
      </pre>
    </div>
  );
};

export const Card = ({ idToken, accessToken }) => {
  return (
    <div className="flex items-start justify-center w-full gap-8">
      <TokenCard title={"ID Token"} token={idToken} />
      <TokenCard title={"Access Token"} token={accessToken} />
    </div>
  );
};
