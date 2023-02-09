export const Card = ({ userProfile, userChannels }) => {
  return (
    <div className="max-w-xl w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row m-auto">
      <div className="w-full md:w-2/5">
        <img
          className="object-center object-cover w-full h-full"
          src={userProfile?.profile_image_url}
          alt={userProfile?.display_name}
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
        <p className="text-xl text-gray-700 font-bold">
          {userProfile?.display_name}
        </p>
        <p className="text-base text-gray-400 font-normal">
          {userProfile?.broadcaster_type === "affiliate" ? "Affiliate" : "Partner"}
        </p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          <strong>Followed Channels: </strong>
          {userChannels?.map((channel) => channel.broadcaster_name).join(", ")}.
        </p>
      </div>
    </div>
  );
};
