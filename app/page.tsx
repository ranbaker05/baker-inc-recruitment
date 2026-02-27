"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MessageSquare, Briefcase, Users, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 relative">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          Baker Inc Recruitment
        </h1>

        <div className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <a
          href="mailto:mb@smarade.com"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
        >
          Contact Us
        </a>
      </nav>

      {/* HERO */}
      <section className="px-8 py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Connecting Exceptional Talent With Industry Leaders
        </motion.h2>

        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Strategic recruitment solutions designed to help companies scale with confidence.
        </p>

        <a
          href="#contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50"
        >
          Hire Talent Today
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-700">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Dedicated Recruiter</h4>
            <p className="text-gray-600">
              A fully committed recruitment specialist embedded into your hiring process.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Users className="w-8 h-8 text-indigo-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              Ad Placing & Organic Database Hits
            </h4>
            <p className="text-gray-600">
              Strategic job ad placement and organic outreach to attract qualified candidates.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Target className="w-8 h-8 text-purple-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              Website Development & Management
            </h4>
            <p className="text-gray-600">
              Professional website creation and ongoing management to elevate your employer brand.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-20 bg-indigo-50 text-center">
        <h3 className="text-3xl font-bold mb-6 text-indigo-700">
          Why Baker Inc Recruitment?
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700">
          We combine strategy, outreach, and digital infrastructure to help companies hire smarter and grow faster.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-700">
          Contact Us
        </h3>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="https://wa.me/12022858752"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

          <a
            href="sms:2022858752"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            iMessage
          </a>

          <a
            href="mailto:mb@smarade.com"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <a
          href="https://wa.me/12022858752"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl"
        >
          <MessageCircle />
        </a>

        <a
          href="sms:2022858752"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-xl"
        >
          <MessageSquare />
        </a>
      </div>
    </div>
  );
}