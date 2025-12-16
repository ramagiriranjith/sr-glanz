'use client';

import { useState } from 'react';
import { NavigationBar } from "@/components/sections/navigation-bar";
import { Footer } from "@/components/sections/footer";
import { ChevronDown, Loader2, CheckCircle, AlertCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage("Thank you! Your message has been sent successfully. We will get back to you shortly.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus('error');
      setMessage("Connection error. Please check your network and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fff1de]">
      <NavigationBar />
      
      <main className="pt-16 pb-20">
        <section className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-8 lg:sticky lg:top-[120px]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0E0E0] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#C3E944]"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#595959]">Contact Us</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-display)] font-medium leading-[1.1] text-[#1A1A1A]">
                  Get in <span className="italic">Touch</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[#595959] max-w-lg leading-relaxed">
                  Have a project in mind or want to learn more about our services? We&apos;re here to help you accelerate your digital transformation journey.
                </p>
              </div>

              <div className="w-full h-px bg-[#E0E0E0] my-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#C3E944]" />
                    Email Us
                  </h4>
                  <p className="text-[#595959] mb-1">General Inquiries</p>
                  <a href="mailto:info@technolance.com" className="text-lg font-medium hover:text-[#C3E944] transition-all">
                    info@technolance.com
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#C3E944]" />
                    Call Us
                  </h4>
                  <p className="text-[#595959] mb-1">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:+15551234567" className="text-lg font-medium hover:text-[#C3E944] transition-all">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E0E0E0] shadow-sm mt-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C3E944]" />
                  Headquarters
                </h4>
                <address className="not-italic text-[#595959] leading-relaxed">
                  123 Tech Avenue, Suite 400<br/>
                  Innovation District<br/>
                  San Francisco, CA 94107
                </address>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E0E0E0] h-full">
                <h3 className="text-2xl font-semibold mb-6 font-[family-name:var(--font-display)]">Send us a message</h3>
                
                {status === 'success' ? (
                  <div className="bg-[#F9F9F6] border border-[#C3E944]/20 rounded-xl p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#C3E944]/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-[#5a8000]" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-[#595959] mb-6">{message}</p>
                    <button onClick={() => setStatus('idle')} className="px-6 py-2 border border-[#E0E0E0] rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#595959]">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E0E0E0] focus:border-[#C3E944] focus:ring-2 focus:ring-[#C3E944]/20 outline-none transition-all placeholder:text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-[#595959]">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E0E0E0] focus:border-[#C3E944] focus:ring-2 focus:ring-[#C3E944]/20 outline-none transition-all placeholder:text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-[#595959]">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E0E0E0] focus:border-[#C3E944] focus:ring-2 focus:ring-[#C3E944]/20 outline-none transition-all placeholder:text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-[#595959]">Company Name</label>
                        <input type="text" id="company" name="company" placeholder="Your Company Ltd." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E0E0E0] focus:border-[#C3E944] focus:ring-2 focus:ring-[#C3E944]/20 outline-none transition-all placeholder:text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-[#595959]">Interested Service</label>
                      <div className="relative">
                        <select id="service" name="service" defaultValue="" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E0E0E0] focus:border-[#C3E944] focus:ring-2 focus:ring-[#C3E944]/20 outline-none transition-all appearance-none text-[#1A1A1A] cursor-pointer">
                          <option value="" disabled>Select a service category...</option>
                          <option value="Technology Services">Technology Services</option>
                          <option value="Implementation Services">Implementation Services</option>
                          <option value="IT Staffing">IT Staffing Solutions</option>
                          <option value="Consulting">Consulting & Strategy</option>
                          <option value="Other">Other / General Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-[#595959]">Your Message <span className="text-red-500">*</span></label>
                      <textarea id="message" name="message" required rows={4} placeholder="Tell us about your project needs..." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E0E0E0] focus:border-[#C3E944] focus:ring-2 focus:ring-[#C3E944]/20 outline-none transition-all resize-y min-h-[120px] placeholder:text-gray-400"></textarea>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" name="terms" required className="mt-1 w-5 h-5 rounded border-gray-300 text-[#C3E944] focus:ring-[#C3E944] cursor-pointer" />
                        <span className="text-sm text-[#595959] group-hover:text-[#1A1A1A] transition-colors">
                          I agree to the Terms of Service and Privacy Policy.
                        </span>
                      </label>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg text-sm border border-red-100">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{message}</span>
                      </div>
                    )}

                    <button type="submit" disabled={status === 'submitting'} className="w-full py-4 px-6 bg-[#C3E944] hover:bg-[#D4F76F] text-[#1A1A1A] font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4">
                      {status === 'submitting' ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
