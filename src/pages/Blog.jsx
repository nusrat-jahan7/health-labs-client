import food from "/images/food.jpg";
import exercise from "/images/exercise.jpg";
import sleep from "/images/sleep.jpg";

const Blog = () => {
  return (
    <div>
      <div className="banner h-auto aspect-auto ">
        <div className="overlay">
          <div className="flex justify-center items-center h-96 max-w-7xl mx-auto px-5 text-center">
            <h1 className="text-7xl font-bold text-blue-600 uppercase">
              Health Blog
            </h1>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center max-w-7xl mx-auto my-10 px-5 ">
        <div>
          <img className="w-3/5" src={exercise} alt="" />
          <img className="w-3/5" src={food} alt="" />
          <img className="w-3/5" src={sleep} alt="" />
        </div>

        <div>
          <div className="space-y-3 pb-4">
            <h1 className="text-4xl text-blue-600 font-semibold">
              The Importance of Regular Exercise
            </h1>
            <ul className="text-lg border-y py-4">
              <li>
                Explore how exercise improves cardiovascular health, helps
                maintain a healthy weight, and supports muscle and joint health.
              </li>
              <li>
                Discuss the role of exercise in reducing stress, anxiety, and
                depression.
              </li>
            </ul>
          </div>
          <div className="space-y-3 pb-4">
            <h1 className="text-4xl text-blue-600 font-semibold">
              Healthy Eating Habits
            </h1>
            <ul className="text-lg border-y py-4">
              <li>
                Break down popular diets like the Mediterranean diet,
                vegetarianism, and plant-based diets.
              </li>
              <li>
                Share nutritious and easy-to-make recipes. Provide cooking tips
                for preserving the nutritional value of foods.
              </li>
            </ul>
          </div>
          <div className="space-y-3 pb-4">
            <h1 className="text-4xl text-blue-600 font-semibold">
              Digital Health Trends
            </h1>
            <ul className="text-lg border-y py-4 text-gray-600">
              <li>
                Explore the variety of health apps available for fitness
                tracking, mental health support, and medical information.
              </li>
              <li>
                {" "}
                Discuss how wearables like fitness trackers and smartwatches
                contribute to health monitoring.
              </li>
            </ul>
          </div>
          <div className="space-y-3 pb-4">
            <h1 className="text-4xl text-blue-600 font-semibold">
              Sleep Hygiene
            </h1>
            <ul className="text-lg border-y py-4 text-gray-600">
              <li>
                Share tips for creating a healthy sleep routine. Discuss the
                impact of screens, caffeine, and environment on sleep quality.
              </li>
              <li>Explore common sleep disorders and their management.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
