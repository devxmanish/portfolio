import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Download,
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
    { name: "React/Next.js", level: 90, category: "Frontend" },
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "Java/SpringBoot", level: 90, category: "Backend" },
    { name: "JPA", level: 85, category: "Backend" },
    { name: "Servlet/Jsp", level: 70, category: "Backend" },
    { name: "MySql", level: 90, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "AWS/GCP", level: 75, category: "DevOps" },
    { name: "Docker/Kubernetes", level: 70, category: "DevOps" },
    { name: "UI/UX Design", level: 80, category: "Design" },
    { name: "Mobile Development", level: 60, category: "Mobile" },
    { name: "REST APIs", level: 85, category: "Backend" },
  ];

  const experience = [
    {
      title: "Full-Stack Java Developer",
      company: "Independent / Freelance",
      period: "2023 - Present",
      location: "Remote",
      description:
        "Worked independently on full-stack projects using Spring Boot and React. Delivered client solutions and built academic-focused platforms with AI integration.",
      achievements: [
        "Developed Smart Lab Assistant using Spring Boot and LLMs",
        "Built Student Testing Platform with teacher-student access control",
        "Completed multiple freelance web projects with modern tech stack",
      ],
    },
    {
      title: "Project Intern – Java Spring Boot",
      company: "Online Java Internship Program",
      period: "April 2024",
      location: "Remote",
      description:
        "Built a Personal Finance Management System as part of a 5-day internship using Java, Spring Boot, and MySQL. Focused on user transactions and dashboard features.",
      achievements: [
        "Designed and implemented secure REST APIs",
        "Created login, budget tracking, and dashboard modules",
        "Delivered a complete working project in a short timeline",
      ],
    },
    {
      title: "Campus Ambassador & Coordinator",
      company: "MyGov India, GFG, MIT Capture Crew Club",
      period: "2022 - Present",
      location: "Meerut, India",
      description:
        "Represented organizations and coordinated campus events related to coding, creativity, and community engagement.",
      achievements: [
        "Promoted national-level programs to 500+ students",
        "Organized tech and creative contests in college",
        "Built active student engagement and tech leadership experience",
      ],
    },
    {
      title: "Frontend Developer (Freelance)",
      company: "Akyo Digital",
      period: "2023 - Present",
      location: "Remote",
      description:
        "Contributed to website development and design for Akyo Digital. Focused on clean, responsive layouts and client-facing interfaces.",
      achievements: [
        "Designed and developed Akyo Digital’s service website",
        "Improved UI/UX with Tailwind CSS and modern design",
        "Delivered mobile-responsive components and layouts",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      school: "Meerut Institute of Technology",
      period: "2022 - 2026",
      gpa: "8.41/10.0",
      achievements: ["Computer Engineering Society President"],
    },
    {
      degree: "Intermediate (12th) – Science Stream-PCM",
      school: "Langat Singh College, Muzaffarpur",
      period: "2020 - 2022",
      gpa: "78.8%",
      achievements: [
        "Participated in various events and developed technical skills alongside academics",
      ],
    },
  ];

  const certifications = [
    {
      name: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      date: "2025",
      credentialId: "verified by credly",
    },
    {
      name: "Introduction to Large Language Models",
      issuer: "Google Cloud",
      date: "2025",
      credentialId: "verified by credly",
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "2022",
      credentialId: "verified by credly",
    },
  ];

  const skillCategories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/profilephoto.png?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Manish Kumar
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Full-Stack Developer & UI/UX Designer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                India
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                devxmanish@gmail.com
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91 72093 15881
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <Link href="https://linkedin.com/in/devxmanish" target="_blank">
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/devxmanish" target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across the full technology stack
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-900">
                              {skill.name}
                            </span>
                            <span className="text-gray-600">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-3" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600">
              Professional journey and key achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-600 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {job.period}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {job.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Education
              </h2>
              {education.map((edu, index) => (
                <Card key={index} className="shadow-lg border-0 mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-gray-700 mb-4">GPA: {edu.gpa}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {edu.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Certifications
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mr-4 flex-shrink-0">
                          <Award className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {cert.name}
                          </h3>
                          <p className="text-blue-600 font-semibold mb-1">
                            {cert.issuer}
                          </p>
                          <p className="text-gray-600 text-sm mb-2">
                            Issued: {cert.date}
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            ID: {cert.credentialId}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
            >
              <Link href="/contact">Hire Me</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
