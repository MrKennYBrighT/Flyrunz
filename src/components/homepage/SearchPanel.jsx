import { useState } from 'react';

const SearchPanel = () => {
  const [formData, setFormData] = useState({
    destination: '',
    programType: '',
    duration: '',
    budget: '',
    visa: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white py-12 px-6 md:px-20 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
          Smart Search Panel
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Destination</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
          </select>

          <select
            name="programType"
            value={formData.programType}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Program Type</option>
            <option value="Study">Study</option>
            <option value="Skill">Skill</option>
            <option value="Career">Career</option>
          </select>

          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Duration</option>
            <option value="Short-term">Short-term</option>
            <option value="1 Year">1 Year</option>
            <option value="2+ Years">2+ Years</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Budget</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <select
            name="visa"
            value={formData.visa}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Visa Requirement</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default SearchPanel;
