import { useState, useEffect } from 'react';
import type { SliderItem } from '../types';

const FeatureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: SliderItem[] = [
    {
      title: "Revolution in Digital Currency",
      description: "Experience the future of digital transactions with PI Coin",
      imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Secure & Transparent",
      description: "Built on advanced blockchain technology for maximum security",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Growing Community",
      description: "Join millions of users in the PI Coin ecosystem",
      imageUrl: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden">
      <img
        src={slides[currentSlide].imageUrl}
        alt={slides[currentSlide].title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <p className="text-xl text-blue-100">{slides[currentSlide].description}</p>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;