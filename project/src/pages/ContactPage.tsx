import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help and provide you with the best support possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-600">support@amberclone.com</p>
                </div>
              </div>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <p className="text-gray-600">
                Available Monday to Friday, 9:00 AM - 6:00 PM EST
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-gray-600">123 Student Street, NY 10001</p>
                </div>
              </div>
              <p className="text-gray-600">
                Book an appointment for in-person consultation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-success-50 text-success-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="input"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Office Hours & FAQ */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-card mb-8">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Monday - Friday</h3>
                      <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Saturday</h3>
                      <p className="text-gray-600">10:00 AM - 4:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Sunday</h3>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">How do I book a property?</h3>
                    <p className="text-gray-600">
                      Simply browse our listings, select your preferred property, and click the "Book Now" button. Follow the steps to complete your booking.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                    <p className="text-gray-600">
                      We accept all major credit cards, bank transfers, and various digital payment methods.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Is my booking refundable?</h3>
                    <p className="text-gray-600">
                      Refund policies vary by property. Please check the specific terms and conditions for each listing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;