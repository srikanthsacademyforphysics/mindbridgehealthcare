import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Check,
  BarChart3,
  Users as UsersIcon,
  Home
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-3xl font-heading font-bold text-emerald">MindBridge</span>
            </div>

            <div className="hidden md:flex items-center space-x-12">
              <a href="#care" className="text-gray-800 hover:text-emerald transition-colors font-medium text-lg">Care</a>
              <a href="#about" className="text-gray-800 hover:text-emerald transition-colors font-medium text-lg">About</a>
              <a href="#resources" className="text-gray-800 hover:text-emerald transition-colors font-medium text-lg">Resources</a>
              <button className="bg-yellow hover:bg-yellow-dark text-gray-900 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-emerald"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <a href="#care" className="block text-gray-700 hover:text-emerald transition-colors font-medium">Care</a>
              <a href="#about" className="block text-gray-700 hover:text-emerald transition-colors font-medium">About</a>
              <a href="#resources" className="block text-gray-700 hover:text-emerald transition-colors font-medium">Resources</a>
              <button className="w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-bold px-6 py-3 rounded-full transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                Comprehensive Family Mental Health Care at Home
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Continuous behavioral therapy monitoring with real-time parent dashboards, family coordination tools, and 24/7 support for every member of your household.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button className="bg-yellow hover:bg-yellow-dark text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
                  Explore Hackfest
                </button>
                <a href="#" className="text-emerald hover:text-emerald-dark font-semibold text-lg flex items-center group pt-4">
                  Learn More
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="animate-fade-in relative">
              <div className="bg-gradient-to-br from-teal-200 via-emerald-300 to-teal-400 rounded-3xl overflow-hidden shadow-2xl relative" style={{ height: '500px' }}>
                <img
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                  alt="Happy family playing board game together at home"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-16 right-8 w-24 h-24 bg-emerald rounded-full opacity-60"></div>
                <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10 max-w-md mx-auto mt-32">
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">Family Care Dashboard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parent monitoring children's therapy progress while coordinating care across the whole family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Section */}
      <section id="care" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-up relative">
              <div className="bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 rounded-3xl p-8 shadow-xl relative overflow-hidden" style={{ height: '480px' }}>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-yellow-500 opacity-80"></div>
                <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10 max-w-md mx-auto mt-32">
                  <h3 className="text-lg font-heading font-bold text-gray-800 mb-3">Parent-Child Therapy Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Mother observing child's interactive CBT game while tracking progress on parent dashboard
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-up">
              <div className="inline-block bg-yellow-200 text-gray-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                AGES 5-12 • KIDS
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Interactive Therapy with Real-Time Parent Monitoring
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gamified therapy sessions for children paired with comprehensive parent dashboards, behavior tracking tools, and evidence-based coaching—keeping families connected every step of the way.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-emerald mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Interactive story-based CBT journeys for kids</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-emerald mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Real-time parent dashboard tracking behaviors and progress</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teens Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-block bg-blue-200 text-gray-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                AGES 13-17 • TEENS
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Private Teen Care with Parent Oversight
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Text-first therapy and secure journaling for teens, paired with aggregate parent dashboards that respect privacy while providing essential progress monitoring and crisis alerts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-emerald mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Asynchronous messaging and private journaling for teens</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-emerald mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Parent progress summaries (attendance, mood trends, alerts)</span>
                </li>
              </ul>
            </div>

            <div className="animate-slide-up relative">
              <div className="bg-gradient-to-br from-blue-300 via-blue-200 to-teal-300 rounded-3xl p-8 shadow-xl relative overflow-hidden" style={{ height: '480px' }}>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-teal-400"></div>
                <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10 max-w-md mx-auto mt-32">
                  <h3 className="text-lg font-heading font-bold text-gray-800 mb-3">Teen Privacy + Parent Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Teen messaging therapist privately while parent views aggregate progress dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adults Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-up relative">
              <div className="bg-gradient-to-br from-purple-300 via-purple-200 to-pink-200 rounded-3xl p-8 shadow-xl relative overflow-hidden" style={{ height: '480px' }}>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-purple-400"></div>
                <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10 max-w-md mx-auto mt-32">
                  <h3 className="text-lg font-heading font-bold text-gray-800 mb-3">Whole Family Care Coordination</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Parent in therapy session while managing children's care schedules on unified platform
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-up">
              <div className="inline-block bg-purple-200 text-gray-800 px-4 py-2 rounded-full font-semibold text-sm mb-6">
                AGES 18+ • ADULTS
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Integrated Family Care Coordination
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Professional therapy for adults including parent coaching, couples sessions, and family coordination—all on one unified platform that serves your entire household.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-emerald mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Licensed video therapy and parent behavioral coaching</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-emerald mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Couples and family therapy with shared progress tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-emerald mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Condition-specific protocols (anxiety, depression, OCD, PTSD)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
              Why Families Choose MindBridge
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up border-l-4 border-teal-400">
              <div className="flex items-start gap-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    Real-Time Monitoring & Insights
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parents access live dashboards tracking therapy attendance, mood patterns, behavior logs, and progress metrics—enabling proactive intervention and informed family decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up border-l-4 border-yellow-400" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <UsersIcon className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    Whole Family Coordination
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    One platform serves kids, teens, and adults with unified scheduling, shared therapist notes, and coordinated care between family members, schools, and providers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up border-l-4 border-emerald" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-6">
                <div className="bg-emerald/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-8 h-8 text-emerald" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    Flexible Home-Based Care
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Therapy sessions happen where your family feels most comfortable—through video calls, messaging, and interactive tools designed for modern family life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Ready to Begin Your Mental Health Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards better mental health for you and your family. Our compassionate team is ready to support you.
          </p>
          <button className="bg-yellow hover:bg-yellow-dark text-gray-900 font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="resources" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-heading font-bold text-emerald">MindBridge</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Compassionate mental health care for every generation. Building bridges to better mental health.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-gray-900 mb-4 text-lg">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Child Therapy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Teen Counseling</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Adult Therapy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Family Therapy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Couples Counseling</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-gray-900 mb-4 text-lg">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Mental Health Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Crisis Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Insurance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-gray-900 mb-4 text-lg">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Get Started</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Schedule Appointment</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald transition-colors">About Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2024 MindBridge. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-emerald transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-emerald transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-emerald transition-colors text-sm">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
