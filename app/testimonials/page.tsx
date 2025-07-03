import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Users, Award, TrendingUp, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  const clientLogos = [
    { name: "AKYO Digital", logo: "/akyologo.png?height=60&width=120" },
    { name: "MIT Meerut", logo: "/MIT logo.png?height=60&width=120" },
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "7+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "10+",
      label: "Projects Completed",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "95%",
      label: "Client Satisfaction",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "95%",
      label: "Repeat Clients",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Don't just take my word for it. Here's what my clients have to say
            about working with me and the results we've achieved together.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="h-8 w-8 text-blue-500 opacity-50" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimon
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mr-4 border-4 border-white shadow-lg"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 font-semibold">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">
                          Project:
                        </span>
                        <p className="text-gray-700">{testimonial.project}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          Industry:
                        </span>
                        <p className="text-gray-700">{testimonial.industry}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          Value:
                        </span>
                        <p className="text-gray-700">
                          {testimonial.projectValue}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">
                          Timeline:
                        </span>
                        <p className="text-gray-700">
                          {testimonial.completionTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Key Results:
                    </h5>
                    <ul className="space-y-2">
                      {testimonial.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start text-green-700"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Amazing Companies
            </h2>
            <p className="text-xl text-gray-600">
              I've had the privilege of working with these incredible
              organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business.
            I'm committed to delivering exceptional results that exceed your
            expectations.
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
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
