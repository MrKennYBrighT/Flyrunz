const AboutFlyrunz = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6">
          About Flyrunz Travel Consult
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="/images/adaravictor.jpeg"
            alt="Adara Victor - CEO of Flyrunz"
            className="w-40 h-40 rounded-full object-cover"
          />
          <p className="text-gray-700 text-lg">
            Flyrunz Travel Consult is a registered educational and vocational consultancy headquartered in Akobo, Ibadan, with a branch office in Bodija, Ibadan. We specialize in comprehensive advisory services across education, vocational training, and global career development—helping students, professionals, and entrepreneurs access life-changing opportunities.
          </p>
        </div>

        <p className="text-gray-700 text-lg mb-6">
          Our approach blends academic advisory, skills training, and career support into a unified framework. Every client receives tailored guidance aligned with their aspirations, whether they’re pursuing international education, technical certification, or career mobility.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">Our Core Values</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
          <li>Integrity</li>
          <li>Professionalism</li>
          <li>Transparency</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">Our Goals</h3>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
          <li>Simplify access to global education</li>
          <li>Promote vocational excellence</li>
          <li>Empower communities through education</li>
          <li>Build sustainable partnerships with institutions worldwide</li>
          <li>Foster lifelong learning for students and professionals</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutFlyrunz;
