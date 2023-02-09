export const Card = ({ accessToken }) => {
  const [header, payload, signature] = accessToken.split(".");

  return (
    <div className="max-w-xl w-full bg-neutral-900 text-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row m-auto p-8 break-words text-lg">
      <pre className="w-full whitespace-normal">
        <h2 className="mb-2">Access Token</h2>
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
