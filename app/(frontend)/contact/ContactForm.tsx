'use client';

import { useState } from 'react';

export default function ContactForm(props: any) {
  const leftKicker = props.kicker || 'Studio Location';
  const leftHeadline = props.headline || 'Get in Touch';
  const leftDesc = props.description || 'Reach out regarding available pieces, gallery representation, or general press inquiries. I endeavor to reply to all messages within 48 hours.';
  const email = props.email || 'info@ellason.art';
  const phone = props.phone || '(813)-995-5223';
  const hours = props.hours || 'Monday – Friday, 10am – 5pm EST';
  const rightHeadline = props.formHeadline || 'Send a Message';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Inquiry Submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-[85vh] border-b border-cream-200">
      
      {/* Left Column: Studio Details */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 bg-cream-50 order-2 lg:order-1">
        <h2 className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-600 mb-6 font-semibold">
          {leftKicker}
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
          {leftHeadline}
        </h1>
        <p className="text-lg text-neutral-800 font-light leading-relaxed mb-16 max-w-sm">
          {leftDesc}
        </p>

        <div className="space-y-10 flex flex-col text-xs tracking-[0.15em] uppercase font-semibold text-neutral-900">
          <div>
            <p className="text-[10px] text-neutral-500 mb-2 font-medium tracking-widest">Email</p>
            <a href={`mailto:${email}`} className="hover:text-brandYellow transition-colors border-b border-transparent hover:border-brandYellow pb-1">
              {email}
            </a>
          </div>
          <div>
            <p className="text-[10px] text-neutral-500 mb-2 font-medium tracking-widest">Phone</p>
            <a href={`tel:${phone.replace(/\D/g,'')}`} className="hover:text-brandYellow transition-colors">
              {phone}
            </a>
          </div>
          <div>
            <p className="text-[10px] text-neutral-500 mb-2 font-medium tracking-widest">Studio Hours</p>
            <p className="text-neutral-900 normal-case tracking-wide font-medium text-sm">{hours}</p>
          </div>
        </div>
      </div>

      {/* Right Column: form */}
      <div className="w-full lg:w-7/12 bg-white/50 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-24 lg:py-32 order-1 lg:order-2">
        <h3 className="text-xs tracking-[0.2em] uppercase text-neutral-700 mb-12 font-bold">{rightHeadline}</h3>
        {isSubmitted ? (
          <div className="bg-sand-light/10 border border-brandYellow/50 p-12 text-center animate-fade-in flex flex-col items-center">
            <svg className="w-10 h-10 text-brandYellow mb-6 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path></svg>
            <h4 className="font-serif text-3xl font-light text-neutral-900 mb-4">Message Received</h4>
            <p className="text-sm text-neutral-800 font-medium leading-relaxed max-w-sm mx-auto">
              Thank you for reaching out to Ellason Art. We have received your inquiry and will be in touch shortly.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-[10px] tracking-[0.15em] uppercase text-brand-blue hover:text-brand-blue-light transition-colors border-b border-brand-blue pb-1 font-bold"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-12 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
              <div className="flex flex-col relative group">
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors placeholder-transparent" placeholder="Name" />
                <label htmlFor="name" className="absolute left-0 top-3 text-sm font-semibold text-neutral-600 cursor-text transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-neutral-800 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-800">Full Name</label>
              </div>
              <div className="flex flex-col relative group">
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors placeholder-transparent" placeholder="Email" />
                <label htmlFor="email" className="absolute left-0 top-3 text-sm font-semibold text-neutral-600 cursor-text transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-neutral-800 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-800">Email Address</label>
              </div>
            </div>

            <div className="flex flex-col relative cursor-pointer group">
              <label htmlFor="inquiryType" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-neutral-800 font-bold z-10 bg-transparent pr-2">Inquiry Type</label>
              <select name="inquiryType" id="inquiryType" required value={formData.inquiryType} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors appearance-none cursor-pointer relative z-20">
                <option value="" disabled hidden></option>
                <option value="available-art">Available Art</option>
                <option value="gallery-representation">Gallery Representation</option>
                <option value="press-media">Press / Media</option>
                <option value="general">General Question</option>
              </select>
              <div className="absolute right-0 top-4 pointer-events-none text-neutral-800 z-10 transition-colors group-focus-within:text-brandYellow"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></div>
            </div>

            <div className="flex flex-col relative pt-4 group">
              <textarea name="message" id="message" required rows={5} value={formData.message} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors placeholder-transparent resize-none leading-relaxed" placeholder="Message" />
              <label htmlFor="message" className="absolute left-0 top-7 text-sm font-semibold text-neutral-600 cursor-text transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-neutral-800 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-2 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-800">Message</label>
            </div>

            <div className="pt-8">
              <button type="submit" className="w-full md:w-auto px-12 py-4 bg-butter-yellow hover:bg-butter-yellow-hover text-neutral-900 font-bold text-xs tracking-[0.15em] uppercase transition-colors shadow-md focus:outline-none rounded-none">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
