const AboutSection = () => {
  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "50+", label: "Completed Projects" },
    { number: "25+", label: "Clients Worldwide" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-text-large mb-6">About me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-text-body text-lg leading-relaxed mb-8">
              Hi, I'm Rayan — a passionate software engineer with expertise in building 
              scalable web applications, mobile apps, and distributed systems. I love 
              turning complex problems into elegant, efficient solutions that make a 
              real impact.
            </p>
            <p className="text-text-body text-lg leading-relaxed">
              With experience across the full development stack, I specialize in modern 
              technologies like React, Node.js, Python, and cloud platforms. I'm 
              committed to writing clean, maintainable code and creating exceptional 
              user experiences.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-7xl font-black text-accent-purple mb-4">
                {stat.number}
              </div>
              <p className="text-text-body text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center md:text-left">
            <p className="text-text-body mb-2">Call Today:</p>
            <a 
              href="tel:+94123456789" 
              className="text-text-large font-semibold text-lg hover:text-accent-purple transition-colors"
            >
              +94 750 994 300
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-text-body mb-2">Email:</p>
            <a 
              href="mailto:rayan@example.com" 
              className="text-text-large font-semibold text-lg hover:text-accent-purple transition-colors"
            >
              rayandinujaya4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;