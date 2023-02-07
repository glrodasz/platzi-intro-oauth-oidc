export const Card = ({ userProfile, userTweets }) => {
  return (
    <div className="max-w-xl w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row m-auto">
      <div className="w-full md:w-2/5 h-80">
        <img
          className="object-center object-cover w-full h-full"
          src={userProfile?.profile_image_url.replace("_normal", "")}
          alt={userProfile?.name}
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
        <p className="text-xl text-gray-700 font-bold">
          {userProfile?.name}
        </p>
        <p className="text-base text-gray-400 font-normal">
          @{userProfile?.username}
        </p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          <strong>Tweets: </strong>
          {userTweets?.slice(0,5).map((tweet) => tweet.text).join(", ")}.
        </p>
      </div>
    </div>
  );
};
