"use client"
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function ContactUsView() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-24 pb-12 font-saira">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#003022]">
            Let's Start Your Next Adventure
          </h1>
          <p className="text-lg text-gray-600">
            Have questions about a trip or want to customize your experience? 
            Our travel experts are here to help you plan the perfect journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Get in Touch</h2>
              <p className="text-gray-600">
                Whether you're ready to book or just looking for inspiration, 
                reach out to us using any of the methods below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#003022]/10 flex items-center justify-center text-[#003022] group-hover:bg-[#003022] group-hover:text-white transition-colors duration-300">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <a href="mailto:hello@thestrangerstogerher.com" className="text-lg font-semibold text-[#1f1f1f] hover:text-[#003022] transition-colors">
                    hello@thestrangerstogerher.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#003022]/10 flex items-center justify-center text-[#003022] group-hover:bg-[#003022] group-hover:text-white transition-colors duration-300">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us</p>
                  <a href="tel:+919876543210" className="text-lg font-semibold text-[#1f1f1f] hover:text-[#003022] transition-colors">
                    +91 8120640655
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#003022]/10 flex items-center justify-center text-[#003022] group-hover:bg-[#003022] group-hover:text-white transition-colors duration-300">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                  <p className="text-lg font-semibold text-[#1f1f1f]">
                    Indore, India
                  </p>
                </div>
              </div>
            </div>

            {/* Aesthetic Image or Map Placeholder */}
            {/* <div className="w-full h-48 bg-stone-200 rounded-3xl overflow-hidden relative">
               <img 
                 src="/images/delhi-map-placeholder.jpg" 
                 alt="Location Map" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                 onError={(e) => (e.currentTarget.style.display = 'none')}
               />
               <div className="absolute inset-0 bg-[#003022]/10 mix-blend-multiply pointer-events-none"></div>
            </div> */}
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100">
            <h3 className="text-2xl font-bold text-[#1f1f1f] mb-6">Send us a Message</h3>
            
            {/* FormSubmit endpoint */}
            <form action="https://formsubmit.co/hello@thestrangerstogerher.com" method="POST" className="space-y-6">
              {/* Optional: Configuration Fields for FormSubmit */}
              <input type="hidden" name="_subject" value="New Contact Inquiry from Stranger Together!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <Input 
                    type="text" 
                    name="firstName" 
                    required 
                    placeholder="John"
                    className="h-12 bg-stone-50 border-stone-200 focus-visible:ring-[#003022]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input 
                    type="text" 
                    name="lastName" 
                    required 
                    placeholder="Doe"
                    className="h-12 bg-stone-50 border-stone-200 focus-visible:ring-[#003022]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <Input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  className="h-12 bg-stone-50 border-stone-200 focus-visible:ring-[#003022]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                <Input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 8120640655"
                  className="h-12 bg-stone-50 border-stone-200 focus-visible:ring-[#003022]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Message</label>
                <Textarea 
                  name="message" 
                  required 
                  placeholder="Tell us about the trip you're interested in..."
                  className="min-h-[150px] resize-none bg-stone-50 border-stone-200 focus-visible:ring-[#003022] p-4"
                />
              </div>

              <Button type="submit" className="w-full h-14 text-lg rounded-xl bg-[#003022] hover:bg-[#003022]/90 flex items-center justify-center gap-2">
                Send Message <Send className="size-5" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUsView;
