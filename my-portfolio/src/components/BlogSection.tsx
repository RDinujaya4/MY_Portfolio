import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Tutorial",
      date: "Dec 15, 2024",
      title: "Building Scalable React Applications with TypeScript",
      description: "Learn best practices for structuring large React applications with TypeScript, including component architecture, state management, and performance optimization strategies.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      category: "Development",
      date: "Dec 10, 2024", 
      title: "Microservices Architecture: A Practical Guide",
      description: "Explore the fundamentals of microservices architecture, when to use it, and how to implement it effectively with real-world examples and best practices.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-text-large mb-4">Development Insights & Tips</h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            From development best practices to technical insights, these articles 
            share knowledge to help you build better software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-purple text-white text-sm rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-text-body text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold text-text-large mb-3 group-hover:text-accent-purple transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-text-body mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center text-accent-purple font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8 py-3">
            Browse All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;