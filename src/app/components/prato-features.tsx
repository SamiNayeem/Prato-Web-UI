import React from "react";

const features = [
  {
    title: "AI Generated Plan",
    description:
      "Our AI-generated health plan is tailored to your specific needs and goals. Whether you're aiming to lose weight, gain muscle, or maintain a healthy lifestyle, the app analyzes your input data to create a personalized roadmap. This includes recommended calorie intake, exercise routines, and lifestyle tips.",
    image: "/eating.gif", // Replace with actual image path
  },
  {
    title: "Track Daily Progress",
    description:
      "Stay on top of your daily health goals with our intuitive dashboard. Monitor your calorie consumption, track nutritional information, and keep an eye on your wellness tasks. Real-time progress bars help you adjust your habits for a healthier lifestyle.",
    image: "/running.gif", // Replace with actual image path
  },
  {
    title: "Add Meals with Ease",
    description:
      "Log your meals effortlessly with our user-friendly meal tracking feature. Upload images of your meals, input serving sizes, and add nutritional information to help you maintain a balanced diet and stay on track with your goals.",
    image: "/capture.gif",
  },
  {
    title: "Mindfulness and Stress Management",
    description:
      "A healthy lifestyle isn't just about physical fitness; mental well-being matters too. Access guided meditation sessions, breathing exercises, and stress management techniques to help you stay calm and balanced.",
    image: "/workout.gif",
  },
];

const PratoFeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Features PRATO AI
      </h2>
      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center md:items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 md:px-8 mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PratoFeaturesSection;
