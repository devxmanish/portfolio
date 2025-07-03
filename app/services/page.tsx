import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Globe,
  Smartphone,
  Code,
  Palette,
  Database,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Cross-browser Compatibility",
        "Content Management System",
        "E-commerce Integration",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      startingPrice: "30k",
      deliveryTime: "2-4 weeks",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
        "Backend Integration",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      startingPrice: "40k",
      deliveryTime: "4-8 weeks",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design",
      description:
        "Beautiful, user-friendly designs that convert visitors into customers",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
        "Brand Guidelines",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      startingPrice: "30k",
      deliveryTime: "1-3 weeks",
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Portfolio Development",
      description:
        "Professional portfolio websites to showcase your work and attract opportunities",
      features: [
        "Personal Branding",
        "Project Showcase",
        "Resume Integration",
        "Contact Forms",
        "Blog Integration",
        "Analytics Setup",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      startingPrice: "8k",
      deliveryTime: "1-2 weeks",
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Backend Development",
      description: "Robust server-side solutions and API development",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication & Authorization",
        "Third-party Integrations",
        "Performance Optimization",
        "Security Implementation",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"],
      startingPrice: "35k",
      deliveryTime: "2-5 weeks",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Website Maintenance",
      description:
        "Ongoing support and maintenance to keep your website running smoothly",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Backup Management",
        "Bug Fixes",
        "Content Updates",
      ],
      technologies: [
        "Monitoring Tools",
        "Security Plugins",
        "CDN",
        "Analytics",
      ],
      startingPrice: "5k/month",
      deliveryTime: "Ongoing",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We discuss your requirements, goals, and create a detailed project plan.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description:
        "Create wireframes and designs for your approval before development begins.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Build your project using the latest technologies and best practices.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Thorough testing followed by deployment and launch of your project.",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description:
        "Ongoing support and maintenance to ensure optimal performance.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions to help your business succeed
            online. From web development to mobile apps, I've got you covered.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
          >
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-8">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center mt-2 space-x-4">
                        <Badge className="bg-green-100 text-green-800">
                          From {service.startingPrice}
                        </Badge>
                        <Badge variant="outline">{service.deliveryTime}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
              every time
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/projects">View Past Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
