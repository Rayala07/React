const Card = (props) => {
  return (
    <div
      id="card"
      className="text-white bg-cover bg-center w-76 h-125 relative overflow-hidden
      rounded-4xl
      border-solid
      border-[#ebebebb5]
      border-6
      "
      style={{ backgroundImage: `url(${props.display})` }}
    >
      <div
        id="card-content"
        className="absolute bottom-0 left-0 right-0 flex flex-col gap-7
        px-4 pt-12 pb-6 

        bg-black/30
        backdrop-blur-lg
        backdrop-saturate-150

        mask-[linear-gradient(to_top,black_70%,transparent)]
        "
      >
        <div>
          <p className="text-[1.5rem] font-semibold mb-2">
            {props.userName} <i class="ri-verified-badge-fill"></i>
          </p>
          <p className="max-w-70">{props.userRole}</p>
        </div>
        <div className="flex justify-between items-center text-[1.2rem]">
          <div className="flex gap-6">
            <p>
              <i class="ri-user-line"></i> {props.fCount}
            </p>
            <p>
              <i class="ri-threads-line"></i> {props.interaction}
            </p>
          </div>
          <div>
            <button
              className="bg-white 
          text-black 
          px-3 py-2
          rounded-3xl
          flex items-center gap-1
          text-[0.8rem]
          "
            >
              {props.followState ? (
                "Following"
              ) : (
                <>
                  Follow
                  <i class="ri-add-fill"></i>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
