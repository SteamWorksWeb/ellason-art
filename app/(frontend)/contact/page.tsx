import { getPayload } from 'payload';
import configPromise from '../../../payload.config';
import React from 'react';
import ContactForm from './ContactForm';

export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise });
  const pagesQuery = await payload.find({ collection: 'pages', where: { title: { equals: 'Contact' } } });
  const pageDoc = pagesQuery.docs[0];
  const layoutArray = pageDoc?.layout || [];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {layoutArray.length === 0 ? (
        <ContactForm />
      ) : (
        layoutArray.map((block: any, index: number) => {
          switch (block.blockType) {
            case 'contactFormBlock': return <ContactForm key={block.id || index} {...block} />;
            default: return null;
          }
        })
      )}
    </div>
  );
}
