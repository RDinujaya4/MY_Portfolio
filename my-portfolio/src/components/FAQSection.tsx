import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web and mobile technologies including React, Next.js, Node.js, React Native, TypeScript, Python, and cloud platforms like AWS and Google Cloud. I'm always learning new technologies to stay current with industry trends."
    },
    {
      question: "How does the development process work?",
      answer: "My development process typically involves: 1) Initial consultation to understand requirements, 2) Technical planning and architecture design, 3) Iterative development with regular updates, 4) Testing and quality assurance, 5) Deployment and post-launch support."
    },
    {
      question: "How long does a project usually take?",
      answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide detailed estimates after understanding your specific needs."
    },
    {
      question: "What do I need to provide before starting a project?",
      answer: "I'll need project requirements, design preferences (if any), target audience information, existing assets like branding materials, and access to necessary accounts or systems. We'll discuss all details during our initial consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, I provide ongoing support and maintenance packages. This includes bug fixes, security updates, feature enhancements, and technical support. We can discuss the best support plan for your needs."
    },
    {
      question: "How do I get started with my project?",
      answer: "Simply reach out through the contact form or email me directly. We'll schedule a consultation to discuss your project requirements, timeline, and budget. I'll then provide a detailed proposal and project plan."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-text-large mb-4">Frequently Asked Questions</h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Here are answers to some of the most common questions I receive. 
            If you don't see your question here, feel free to reach out—I'm happy to help!
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card-bg rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <span className="text-accent-purple font-bold text-lg mr-4">
                    {index + 1}.
                  </span>
                  <h3 className="font-semibold text-text-large text-lg">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-text-body transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <div className="px-8 pr-16">
                  <p className="text-text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;