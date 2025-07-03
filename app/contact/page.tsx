"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    company: "",
    budget: "",
    timeline: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const url =
      "https://script.google.com/macros/s/AKfycbw2OjkYlK1Z7Gg_gKAzvYX4_a9IoqfIJlaqy51bPHyZpyJfWb7PCdq5vlM4Ay9gu85otw/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobileNo: "",
        company: "",
        budget: "",
        timeline: "",
        projectType: "",
        message: "",
      });
    }, 20000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "devxmanish@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 72093 15881",
      description: "Mon-Fri from 9am to 6pm IST",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India",
      description: "Available for remote work worldwide",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/devxmanish",
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/devxmanish",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://x.com/devxmanish",
    },
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Portfolio Website",
    "E-commerce Platform",
    "Custom Software",
    "Other",
  ];

  const budgetRanges = [
    "Under ₹50k",
    "₹50k - ₹1L",
    "₹1L - ₹2.5L",
    "₹2.5L - ₹5L",
    "₹5L+",
    "Let's discuss",
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to bring your ideas to life? I'm here to help you create
            something amazing. Let's discuss your project and see how we can
            work together.
          </p>
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            Currently Available for New Projects
          </Badge>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900 mb-2">
                  Start Your Project
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you within 24
                  hours with a detailed proposal.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. I'll get back to
                      you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="mobileNo"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Mobile Number *
                        </label>
                        <Input
                          id="mobileNo"
                          name="mobileNo"
                          type="number"
                          required
                          value={formData.mobileNo}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your Mobile number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Project Description *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-blue-600 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Link href={social.url} target="_blank" key={index}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                      >
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Work With Me?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fast response time (within 24 hours)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transparent pricing and timeline
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regular project updates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Post-launch support included
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    100% satisfaction guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
