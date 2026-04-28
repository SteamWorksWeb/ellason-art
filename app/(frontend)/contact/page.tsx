import React from 'react';
import ContactForm from './ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Ellason Art',
  description: 'Get in touch with Ellason Art for commissions, press, or gallery inquiries.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ContactForm />
    </div>
  );
}
