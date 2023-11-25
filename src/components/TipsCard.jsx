import doctor from "/images/doctors.jpg";
import quoteUp from "/images/quote-up.png";
import quoteDown from "/images/quote-down.png";

const TipsCard = () => {
  return (
    <div>
      <div className="lg:flex max-w-7xl lg:mx-auto mt-8 shadow-xl mx-5 rounded-2xl">
        <figure className="flex-1">
          <img
            className="w-full h-[400px] rounded-t-2xl lg:rounded-l-2xl"
            src={doctor}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-1">
          <div>
            <img className="w-20" src={quoteUp} alt="" />
            <h2 className="card-title">New movie is released!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              commodi cumque omnis error at corrupti quas. Deleniti fugit
              reiciendis perferendis, ducimus accusantium ipsum fugiat quod
              officia dolorem alias. Quis, veritatis.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ad commodi cumque omnis error at
              corrupti quas. Deleniti fugit reiciendis perferendis, ducimus
              accusantium ipsum fugiat quod officia dolorem alias. Quis,
              veritatis.
            </p>
            <div className="flex justify-end">
              <img className="w-20 " src={quoteDown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
