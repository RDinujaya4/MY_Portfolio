const ServicesSection = () => {
  const services = [
    {
      number: "1.",
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and databases",
      features: [
        "Frontend development with React/Next.js",
        "Backend API development and integration",
        "Database design and optimization",
        "Cloud deployment and DevOps"
      ]
    },
    {
      number: "2.",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
      features: [
        "React Native cross-platform apps",
        "Native iOS and Android development",
        "App Store deployment and optimization",
        "Mobile UI/UX implementation"
      ]
    },
    {
      number: "3.",
      title: "Web Development",
      description: "Modern, responsive websites and web applications with focus on performance and user experience",
      features: [
        "Responsive website development",
        "Progressive Web Applications (PWA)",
        "E-commerce platform development",
        "Website performance optimization"
      ]
    },
    {
      number: "4.",
      title: "Technical Consulting",
      description: "Strategic technical guidance and architecture planning for your software projects",
      features: [
        "System architecture and design",
        "Code review and optimization",
        "Technology stack recommendations",
        "Project planning and management"
      ]
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-text-large mb-4">what I can do for you</h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            As a software engineer, I create robust solutions that solve real problems 
            and deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card-bg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-large mb-2">
                  {service.number} {service.title}
                </h3>
                <p className="text-text-body">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-text-body flex items-start">
                    <span className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;