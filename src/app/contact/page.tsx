"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/#home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/binary_capital_logo.gif" alt="Binary Capital" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#home" className="text-white hover:text-secondary transition-colors">Home</Link>
              <Link href="/about" className="text-white hover:text-secondary transition-colors">About</Link>
              <Link href="/#services" className="text-white hover:text-secondary transition-colors">Services</Link>
              <Link href="/team" className="text-white hover:text-secondary transition-colors">Team</Link>
              <Link href="/contact" className="text-secondary font-semibold">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Let's discuss how Binary Capital can help shape your financial success with bespoke strategies tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
                <a href="tel:+917738056127" className="text-primary hover:text-blue-800 font-semibold text-lg">
                  +91 7738056127
                </a>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
                <a href="mailto:sales@binarycapital.in" className="text-amber-600 hover:text-amber-800 font-semibold text-lg break-all">
                  sales@binarycapital.in
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Office</h3>
                <p className="text-gray-700 font-medium">
                  Andheri West<br />
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Send Us a Message</h2>
                <p className="text-center text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="finance-advisory">Finance Advisory</option>
                      <option value="project-advisory">Project Advisory</option>
                      <option value="capital-markets">Capital Markets</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-blue-800 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Visit Our Office</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-12">
              Located in the heart of Mumbai's business district, our office is easily accessible and 
              equipped with modern facilities for client meetings and consultations.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Andheri West, Mumbai</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                  <p className="text-gray-600">for all inquiries</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Appointments</h3>
                  <p className="text-gray-600">Available by</p>
                  <p className="text-gray-600">prior arrangement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us today to schedule a consultation and discover how Binary Capital can help 
              transform your financial future with bespoke strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917738056127">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-10 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Call Us Now
                </Button>
              </a>
              <a href="mailto:sales@binarycapital.in">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300">
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/#home">
              <img src="/binary_capital_logo.gif" alt="Binary Capital" className="h-16 mx-auto mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">© 2025 Binary Capital. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <Link href="/#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About</Link>
              <Link href="/#services" className="text-gray-400 hover:text-amber-400 transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
