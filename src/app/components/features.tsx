import Image from "next/image";
export default function FeaturesSection() {
  return (
    <div className="bg-white py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Built Around <span className="text-orange-500">Your Health</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Image 
          src="/workout.gif" 
          alt="Personalized Plans" 
          height={300}
          width={200}
          className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Personalized Meal Plans</h3>
          <p className="mt-2 text-gray-600">Custom nutrition plans tailored to your goals and preferences.</p>
        </div>
        <div className="text-center">
          <Image src="/eating.gif"
           alt="Nutrition Tracking" 
           height={300}
           width={200}
           className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Detailed Nutrition Tracking</h3>
          <p className="mt-2 text-gray-600">Track your daily intake and monitor your progress toward your health goals.</p>
        </div>
        <div className="text-center">
          <Image
           src="/capture.gif" 
           alt="Expert Guidance"
           height={300}
           width={200}
           className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Expert Guidance</h3>
          <p className="mt-2 text-gray-600">Access insights and tips from nutrition experts to optimize your diet.</p>
        </div>
      </div>
    </div>
  );
}
