"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Filter,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Research",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "7+", label: "Happy Clients" },
    { number: "1.5+", label: "Years Experience" },
    { number: "15+", label: "Technologies Used" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A showcase of successful projects delivered for clients across
            various industries. Each project represents a unique challenge
            solved with innovative solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center mr-4">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "hover:bg-blue-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-700"
                    >
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Project Info */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {project.team}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        {project.client}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
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

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Results:
                      </h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        {project.results
                          .slice(0, 2)
                          .map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {result}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.demoUrl && (
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <Link href={project.demoUrl} target="_blank">
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          className="flex-1 bg-transparent"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          <Link href={project.githubUrl} target="_blank">
                            Code
                          </Link>
                        </Button>
                      )}
                      {!project.demoUrl && !project.githubUrl && (
                        <Button
                          variant="outline"
                          className="flex-1 bg-transparent"
                          disabled
                        >
                          In Development
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing
            together. I'm here to help bring your ideas to life.
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
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
