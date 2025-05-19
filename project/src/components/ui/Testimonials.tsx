import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  university: string;
  country: string;
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Emily Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    university: 'University College London',
    country: 'UK',
    rating: 5,
    content: 'AmberClone made finding accommodation so easy! Within a week, I found the perfect place near my university. The virtual tour feature was incredibly helpful as an international student.',
  },
  {
    id: 't2',
    name: 'Miguel Fernandez',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    university: 'Universitat de Barcelona',
    country: 'Spain',
    rating: 5,
    content: 'As an exchange student, I was worried about finding a good place to stay in Barcelona. AmberClone not only helped me find a great apartment but also made the booking process seamless!',
  },
  {
    id: 't3',
    name: 'Sophia Chen',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    university: 'Boston University',
    country: 'USA',
    rating: 4,
    content: 'The customer service team was super helpful with all my questions. I appreciated how transparent the listing details were - exactly what I needed to make an informed decision.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thousands of students have found their perfect accommodation through our platform. 
            Here's what some of them have to say about their experience.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white rounded-xl p-6 shadow-soft animate-slide-in opacity-0 stagger-${index + 1}`}
            >
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.university}</p>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-accent-500 fill-accent-500" : "text-gray-300"}
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;