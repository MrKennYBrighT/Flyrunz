import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PageWrapper = ({ children, titleKey, descriptionKey }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (titleKey) document.title = t(titleKey);
    if (descriptionKey) {
      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) metaTag.setAttribute('content', t(descriptionKey));
    }
  }, [t, titleKey, descriptionKey]);

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white">
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20 py-8">
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
