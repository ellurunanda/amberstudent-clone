import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any errors
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 500);
  };

  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-primary-100">
            Subscribe to our newsletter for the latest properties, student housing tips, 
            and exclusive offers.
          </p>
          
          {isSubmitted ? (
            <div className="bg-primary-500 p-6 rounded-lg animate-slide-in opacity-0">
              <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
              <p>
                You're now on the list to receive our latest updates and exclusive offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                  aria-label="Email address"
                />
                {error && <p className="mt-2 text-left text-red-200 text-sm">{error}</p>}
              </div>
              <button
                type="submit"
                className="btn bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-6 rounded-lg flex items-center justify-center"
              >
                Subscribe <Send size={16} className="ml-2" />
              </button>
            </form>
          )}
          
          <p className="mt-6 text-sm text-primary-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;