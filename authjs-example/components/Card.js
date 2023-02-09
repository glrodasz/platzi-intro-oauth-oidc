import { signOut } from "next-auth/react";
import { ConnectButton } from "@/components/ConnectButton";

export const Card = ({ userProfile }) => {
  return (
    <div className="max-w-xl w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row m-auto">
      <div className="w-full md:w-2/5">
        <img
          className="object-center object-cover w-full h-full"
          src={userProfile?.image}
          alt={userProfile?.name}
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
        <p className="text-xl text-gray-700 font-bold">{userProfile?.name}</p>
        <p className="text-base text-gray-400 font-normal">GitHub</p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          You can see a great developer here.
        </p>
        <ConnectButton onClick={() => signOut()}>Logout</ConnectButton>
      </div>
    </div>
  );
};
