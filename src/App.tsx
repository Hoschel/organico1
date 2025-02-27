// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState('');
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);
  const salesChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (salesChartRef.current) {
      const chart = echarts.init(salesChartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330],
          type: 'line',
          smooth: true,
          color: '#7C9D8E'
        }]
      };
      chart.setOption(option);
    }
  }, []);

  const handleSubscribe = () => {
    if (email) {
      setShowSubscribeSuccess(true);
      setEmail('');
      setTimeout(() => setShowSubscribeSuccess(false), 3000);
    }
  };

  const bestSellers = [
    {
      id: 1,
      name: 'Organic Raw Almonds',
      price: 12.99,
      rating: 4.8,
      image: 'https://public.readdy.ai/ai/img_res/ab4b225e31daea1ef678d5a045ed37e7.jpg'
    },
    {
      id: 2,
      name: 'Green Tea Blend',
      price: 18.99,
      rating: 4.9,
      image: 'https://public.readdy.ai/ai/img_res/96f80b7503bd0547477bbed5818639ba.jpg'
    },
    {
      id: 3,
      name: 'Dried Goji Berries',
      price: 15.99,
      rating: 4.7,
      image: 'https://public.readdy.ai/ai/img_res/8c22a3359930e28ea02c7add388c4d48.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-3xl font-serif text-[#7C9D8E]">Organico</div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Shop', 'About Us', 'Contact'].map((item) => (
              <button key={item} className="text-gray-600 hover:text-[#7C9D8E] transition-colors !rounded-button">
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button className="relative !rounded-button">
              <i className="fas fa-shopping-cart text-xl text-gray-600"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#7C9D8E] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="!rounded-button">
              <i className="fas fa-user text-xl text-gray-600"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 relative h-[600px] bg-cover bg-center" 
        style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/054f1b9309c595d879074c670a6c43fc.jpg')`
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-serif mb-6">Pure Nature, Pure Life</h1>
            <p className="text-xl mb-8">Discover our carefully curated selection of premium organic products, sourced directly from sustainable farms.</p>
            <button className="bg-[#7C9D8E] text-white px-8 py-3 text-lg font-medium hover:bg-[#6A8B7C] transition-colors !rounded-button whitespace-nowrap">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Dried Fruits',
              image: 'https://public.readdy.ai/ai/img_res/f68f6f29adb68c62bcc07d74e919fd7b.jpg'
            },
            {
              name: 'Organic Teas',
              image: 'https://public.readdy.ai/ai/img_res/6c621c6caad0520f1cd24e6db2bbd003.jpg'
            },
            {
              name: 'Natural Snacks',
              image: 'https://public.readdy.ai/ai/img_res/f060482e35cb8ee06f8a241706e0a215.jpg'
            },
            {
              name: 'Raw Nuts',
              image: 'https://public.readdy.ai/ai/img_res/d579fb566cb166b7d48a04c166af5091.jpg'
            }
          ].map((category) => (
            <div key={category.name} className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="aspect-square">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-medium">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-[#7C9D8E]">${product.price}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="w-full bg-[#7C9D8E] text-white py-2 hover:bg-[#6A8B7C] transition-colors !rounded-button whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="https://public.readdy.ai/ai/img_res/e580f268da2bab9b5d655c462414d399.jpg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Since 2010, Organico has been at the forefront of the organic movement, partnering with small-scale farmers who share our passion for sustainable agriculture and exceptional quality. Our journey began with a simple mission: to make pure, organic products accessible to everyone while supporting environmental stewardship.
              </p>
              <button className="bg-[#7C9D8E] text-white px-8 py-3 hover:bg-[#6A8B7C] transition-colors !rounded-button whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Growth Chart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Our Growth</h2>
          <div ref={salesChartRef} className="w-full h-[400px]"></div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#7C9D8E]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Join Our Organic Community</h2>
          <p className="text-white mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="max-w-md mx-auto relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
            />
            <button
              onClick={handleSubscribe}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8B7355] text-white px-6 py-2 rounded-full hover:bg-[#7A6244] transition-colors !rounded-button whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          {showSubscribeSuccess && (
            <p className="mt-4 text-white">Thank you for subscribing!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-serif mb-6">Organico</h3>
            <p className="text-gray-300 mb-6">Your trusted source for premium organic products.</p>
            <div className="flex space-x-4">
              <button className="text-white hover:text-[#7C9D8E] transition-colors !rounded-button">
                <i className="fab fa-facebook text-xl"></i>
              </button>
              <button className="text-white hover:text-[#7C9D8E] transition-colors !rounded-button">
                <i className="fab fa-instagram text-xl"></i>
              </button>
              <button className="text-white hover:text-[#7C9D8E] transition-colors !rounded-button">
                <i className="fab fa-twitter text-xl"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Shop', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <button className="text-gray-300 hover:text-white transition-colors !rounded-button">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li>1234 Organic Way</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>info@organico.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-6">Certifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {['USDA Organic', 'Non-GMO', 'Fair Trade', 'Eco-Certified'].map((cert) => (
                <div key={cert} className="bg-[#34495E] p-3 rounded text-center text-sm">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2025 Organico. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

