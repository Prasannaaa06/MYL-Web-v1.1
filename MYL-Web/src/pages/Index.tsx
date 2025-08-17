import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/ui/CourseCard";
import { ArrowRight, BookOpen, Award, Users, Star } from "lucide-react";

const courses = [
  {
    id: "Py",
    title: "Python Basics",
    description: "Learn the fundamentals of Python programming, covering variables, loops, conditionals, functions, and basic data structures. Perfect for beginners.",
    duration: "12 weeks",
    students: 99,
    rating: 4.8,
  },
  {
    id: "data-science",
    title: "GCP Essentials",
    description: "Learn the core services of Google Cloud Platform including Compute Engine, Cloud Storage, App Engine, and networking. Get hands-on experience with cloud infrastructure, deployment, and scaling.",
    duration: "16 weeks",
    students: 100,
    rating: 4.7,
  },
  {
    id: "digital-marketing",
    title: "AWS Essentials",
    description: "Understand the basics of Amazon Web Services including EC2, S3, IAM, VPC, and Lambda. This course provides practical knowledge of cloud infrastructure, deployment, and scaling in AWS environments.",
    duration: "8 weeks",
    students: 80,
    rating: 4.6,
  },
  {
    id: "graphic-design",
    title: "Linux RHEL",
    description: "Master essential Linux commands, user and file management, permissions, networking, and system services with a focus on Red Hat Enterprise Linux. Ideal for IT beginners and aspiring system admins.",
    duration: "10 weeks",
    students: 60,
    rating: 4.9,
  },
  {
    id: "mobile-development",
    title: "Ansible Automation",
    description: "Learn how to automate IT infrastructure using Ansible. Understand playbooks, roles, inventory files, and real-world automation tasks for system provisioning and configuration management.",
    duration: "14 weeks",
    students: 45,
    rating: 4.7,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-32 relative">
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 md:bottom-6 md:right-6 md:left-auto md:transform-none z-10">
          <a href="tel:+919884002174" className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 md:px-5 md:py-3 hover:bg-white/30 transition-all duration-300 group w-64 md:w-auto justify-center md:justify-start">
            <span className="text-xs md:text-sm font-semibold">Enquiry</span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <span className="text-xs md:text-sm font-semibold group-hover:text-white/90">+91 9884002174</span>
            <span className="text-xs md:text-sm font-semibold group-hover:text-white/90 hidden md:inline">- BTS Saravanan</span>
          </a>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-20">
            <div className="flex-shrink-0 sm:w-1/4 lg:w-1/3">
              <img 
                src="/lovable-uploads/6ed9742b-22b8-4549-b904-b2885769067e.png" 
                alt="MYL Academy Peacock Logo" 
                className="w-32 h-32 sm:w-32 sm:h-32 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain transform hover:scale-105 transition-transform duration-300 mx-auto"
                style={{filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.4)) drop-shadow(-4px -4px 8px rgba(255,255,255,0.2)) drop-shadow(0 0 20px rgba(59,130,246,0.3))', transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)'}}
              />
            </div>
            <div className="flex-1 sm:w-3/4 lg:w-2/3 text-center sm:text-left lg:pl-8">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight px-2">
                Transform Your Future<br className="sm:hidden" /> with <span className="text-cyan-300">Quality Education</span>
              </h1>
              <p className="hidden sm:block text-sm sm:text-base md:text-xl lg:text-2xl mb-4 md:mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0 px-2">
                Join hundreds of students who have advanced their careers with our comprehensive, 
                industry-focused courses taught by expert instructors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-2 mb-6">
                <Button asChild size="default" variant="accent" className="text-sm md:text-lg px-6 md:px-8">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </Button>
                <Button asChild size="default" variant="outline" className="text-sm md:text-lg px-6 md:px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
              
              {/* Animated Course Showcase */}
              <div className="mt-4 pt-3 border-t border-white/20 w-full px-2">
                <h3 className="text-sm font-semibold text-white/80 mb-3 text-center lg:text-left">Courses We Offer:</h3>
                
                {/* Course Cards Grid */}
                <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-5 gap-1 lg:gap-3 max-w-xs lg:max-w-none mx-auto">
                  
                  {/* Python Course */}
                  <Link to="/course-detail/Py" className="group">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded p-1 lg:p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 w-14 lg:w-auto">
                      <img src="/src/assets/python-course.jpg" alt="Python" className="w-full h-6 lg:h-12 object-cover rounded mb-1" />
                      <h4 className="text-white font-semibold text-xs lg:text-sm truncate text-center">Python</h4>
                    </div>
                  </Link>
                  
                  {/* GCP Course */}
                  <Link to="/course-detail/data-science" className="group">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded p-1 lg:p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 w-14 lg:w-auto">
                      <img src="/src/assets/gcp-course.jpg" alt="GCP" className="w-full h-6 lg:h-12 object-cover rounded mb-1" />
                      <h4 className="text-white font-semibold text-xs lg:text-sm truncate text-center">GCP</h4>
                    </div>
                  </Link>
                  
                  {/* AWS Course */}
                  <Link to="/course-detail/digital-marketing" className="group">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded p-1 lg:p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 w-14 lg:w-auto">
                      <img src="/src/assets/aws-course.jpg" alt="AWS" className="w-full h-6 lg:h-12 object-cover rounded mb-1" />
                      <h4 className="text-white font-semibold text-xs lg:text-sm truncate text-center">AWS</h4>
                    </div>
                  </Link>
                  
                  {/* Linux Course */}
                  <Link to="/course-detail/graphic-design" className="group">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded p-1 lg:p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 w-14 lg:w-auto">
                      <img src="/src/assets/linux-course.jpg" alt="Linux" className="w-full h-6 lg:h-12 object-cover rounded mb-1" />
                      <h4 className="text-white font-semibold text-xs lg:text-sm truncate text-center">Linux</h4>
                    </div>
                  </Link>
                  
                  {/* Ansible Course */}
                  <Link to="/course-detail/mobile-development" className="group">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded p-1 lg:p-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 w-14 lg:w-auto">
                      <img src="/src/assets/ansible-course.jpg" alt="Ansible" className="w-full h-6 lg:h-12 object-cover rounded mb-1" />
                      <h4 className="text-white font-semibold text-xs lg:text-sm truncate text-center">Ansible</h4>
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">80+</div>
              <div className="text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our expertly designed courses that blend theory with hands-on practice, 
              ensuring you gain real-world skills that employers value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎆 What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">Real success stories from our amazing students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Arjun Kumar</h4>
                  <p className="text-sm text-gray-500">Python Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"MYL Academy transformed my career! The Python course was excellent and I got placed in a top tech company."</p>
              <div className="flex text-yellow-400 mt-3">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Cloud Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The AWS course gave me hands-on experience. Now I'm working as a Cloud Engineer with 40% salary hike!"</p>
              <div className="flex text-yellow-400 mt-3">
                ★★★★★
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Rahul Patel</h4>
                  <p className="text-sm text-gray-500">DevOps Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Linux and Ansible courses were game-changers. The practical approach helped me land my dream DevOps role!"</p>
              <div className="flex text-yellow-400 mt-3">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MYL ACADEMY?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide more than just education - we offer a complete learning experience 
              designed to help you succeed in your career goals at MYL ACADEMY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of real-world experience and proven track records.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Certified Programs</h3>
              <p className="text-muted-foreground">
                Earn certificates that validate your skills and boost your career prospects.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card text-center hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community Support</h3>
              <p className="text-muted-foreground">
                Join a vibrant community of learners and get support from peers and mentors throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center max-w-4xl mx-auto hero-gradient text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey at MYL ACADEMY?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of successful students and take the first step towards your dream career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="accent">
                <Link to="/courses">
                  Browse Courses
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
