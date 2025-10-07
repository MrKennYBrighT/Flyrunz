import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

const PageWrapper = ({ children, titleKey, descriptionKey }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (titleKey) {
      document.title = t(titleKey);
    }
    if (descriptionKey) {
      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) {
        metaTag.setAttribute('content', t(descriptionKey));
      }
    }
  }, [t, titleKey, descriptionKey]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 lg:px-20 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
