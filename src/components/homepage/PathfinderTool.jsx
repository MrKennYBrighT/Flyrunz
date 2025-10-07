import { useState } from 'react';

const PathfinderTool = () => {
  const [selectedGoal, setSelectedGoal] = useState('');

  const goals = [
    {
      label: 'Study Abroad',
      icon: '🌍',
      programs: ['Canada', 'Germany', 'UK'],
    },
    {
      label: 'Vocational Training',
      icon: '🛠️',
      programs: ['Welding', 'Healthcare', 'IT'],
    },
    {
      label: 'Career Mobility',
      icon: '💼',
      programs: ['Tech Jobs in Germany', 'Remote Work'],
    },
    {
      label: 'Language Immersion',
      icon: '🗣️',
      programs: ['French in Quebec', 'German in Berlin'],
    },
    {
      label: 'Internship Placement',
      icon: '🎓',
      programs: ['NGOs in Kenya', 'Startups in Lagos'],
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Find Your Perfect Travel or Study Opportunity
        </h2>
        <p className="text-gray-600 mb-8">
          Select your interest and destination. We’ll reach out with tailored options.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {goals.map((goal) => (
            <button
              key={goal.label}
              onClick={() => setSelectedGoal(goal.label)}
              className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white font-bold px-6 py-4 rounded-full shadow-md hover:brightness-110 transition duration-300 flex items-center gap-3 justify-center text-lg"
            >
              <span className="text-2xl">{goal.icon}</span>
              {goal.label}
            </button>
          ))}
        </div>

        {selectedGoal && (
          <div className="mt-6 text-left bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Opportunities for {selectedGoal}
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {goals
                .find((g) => g.label === selectedGoal)
                .programs.map((program) => (
                  <li key={program}>{program}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default PathfinderTool;
