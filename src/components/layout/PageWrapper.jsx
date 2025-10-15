import { useEffect } from 'react';

const PageWrapper = ({ children, titleKey, descriptionKey }) => {
  useEffect(() => {
    if (titleKey) document.title = titleKey;
    if (descriptionKey) {
      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) metaTag.setAttribute('content', descriptionKey);
    }
  }, [titleKey, descriptionKey]);

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-white">
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20 py-8">
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
