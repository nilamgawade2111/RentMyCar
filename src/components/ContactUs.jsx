import React from 'react';
import ContactForm from './ContactForm';
import SubmitButton from './SubmitButton';

const ContactUs = () => {
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-r from-soft-blue to-soft-pink py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <ContactForm onSubmit={handleSubmit} />
    </section>
  );
};

export default ContactUs;