const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Rayan delivered an exceptional mobile app that exceeded our expectations. His attention to detail and technical expertise were outstanding.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen", 
      role: "CTO",
      company: "StartupLab",
      content: "Working with Rayan was a game-changer for our platform. He transformed our complex requirements into an elegant, scalable solution.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "InnovateCo",
      content: "Rayan's full-stack development skills helped us launch our product faster than we thought possible. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Engineering Lead", 
      company: "DevStudio",
      content: "His code quality and architectural decisions were spot-on. Rayan is the kind of developer every team needs.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "100%", label: "Satisfaction Rate" },
    { number: "300%", label: "Revenue Growth" }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-text-large mb-4">What My Clients Say</h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Here's what my clients have shared about their experiences working with me. 
            Their trust and satisfaction motivate me to continue delivering exceptional solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card-bg rounded-2xl p-8 shadow-lg">
              <p className="text-text-body text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-text-large">{testimonial.name}</h4>
                  <p className="text-text-body text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-text-body mb-2">I've worked with 30+ happy clients</p>
            <div className="text-5xl font-black text-accent-purple mb-2">
              {stats[0].number}
            </div>
            <p className="text-text-body font-medium">
              {stats[0].label}
            </p>
          </div>
          <div className="text-center">
            <p className="text-text-body mb-2">My solutions helped clients achieve</p>
            <div className="text-5xl font-black text-accent-purple mb-2">
              {stats[1].number}
            </div>
            <p className="text-text-body font-medium">
              {stats[1].label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;