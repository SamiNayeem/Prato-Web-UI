"use client";

import React from "react";

const FAQS = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30 days free trial so you can experience our mobile application with no commitment.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.",
  },
  {
    title: "How can I upgrade my account to paid?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our dedicated support team is here to assist you. Reach out via [mention preferred support channels, e.g., live chat, email, or phone], and we'll get back to you promptly.",
  },
];

export function Faqs() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mx-auto lg:w-3/5">
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {title}
              </h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
