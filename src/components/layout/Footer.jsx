const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-10 px-6 text-sm text-gray-600">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/logo.jpeg"
            alt="Flyrunz Travels Logo"
            className="h-12 object-contain"
          />
        </div>

        {/* CTA */}
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Ready to start your journey?
        </h3>
        <p className="mb-4">
          Whether you're a student, professional, or institution—Flyrunz is here to guide you.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="https://wa.me/2349114387785"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            WhatsApp Us
          </a>
          <a
            href="mailto:contact@flyrunz.com"
            className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
          >
            Email Us
          </a>
          <a
            href="tel:+2349114387785"
            className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Call Us
          </a>
        </div>

        {/* Legal & Links */}
        <p>&copy; {new Date().getFullYear()} Flyrunz Travel Consult. All rights reserved.</p>
        <p className="mt-2">
          Built on integrity, professionalism, and transparency.
        </p>
        <p className="mt-1">
          BN: 8720157 &nbsp; | &nbsp;
          <a
            href="https://www.flyrunz.com"
            className="text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.flyrunz.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
