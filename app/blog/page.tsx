import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Web Development Trends for 2024",
      excerpt:
        "Discover the latest trends shaping the future of web development, from AI integration to advanced CSS features.",
      content:
        "The web development landscape is constantly evolving, and 2024 brings exciting new trends that developers should be aware of...",
      image: "/placeholder.svg?height=300&width=500",
      author: "DevXManish",
      date: "2025-07-03",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["JavaScript", "React", "Trends", "2025"],
      featured: true,
    },
    // {
    //   id: 2,
    //   title: "Building Scalable React Applications: Best Practices",
    //   excerpt: "Learn how to structure and optimize React applications for better performance and maintainability.",
    //   content: "Creating scalable React applications requires careful planning and adherence to best practices...",
    //   image: "/placeholder.svg?height=300&width=500",
    //   author: "John Doe",
    //   date: "2024-01-10",
    //   readTime: "12 min read",
    //   category: "React",
    //   tags: ["React", "JavaScript", "Performance", "Best Practices"],
    //   featured: false,
    // },
    // {
    //   id: 3,
    //   title: "The Complete Guide to Next.js 14",
    //   excerpt:
    //     "Everything you need to know about Next.js 14, including new features, improvements, and migration tips.",
    //   content:
    //     "Next.js 14 introduces several exciting features that make building React applications even more powerful...",
    //   image: "/placeholder.svg?height=300&width=500",
    //   author: "John Doe",
    //   date: "2024-01-05",
    //   readTime: "15 min read",
    //   category: "Next.js",
    //   tags: ["Next.js", "React", "Framework", "Tutorial"],
    //   featured: true,
    // },
    // {
    //   id: 4,
    //   title: "Mobile-First Design: Why It Matters in 2024",
    //   excerpt:
    //     "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    //   content:
    //     "With mobile traffic accounting for over 50% of web traffic, mobile-first design is no longer optional...",
    //   image: "/placeholder.svg?height=300&width=500",
    //   author: "John Doe",
    //   date: "2023-12-28",
    //   readTime: "6 min read",
    //   category: "Design",
    //   tags: ["Mobile", "Design", "UX", "Responsive"],
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Optimizing Website Performance: A Developer's Guide",
    //   excerpt: "Practical tips and techniques to improve your website's loading speed and overall performance.",
    //   content: "Website performance directly impacts user experience and search engine rankings...",
    //   image: "/placeholder.svg?height=300&width=500",
    //   author: "John Doe",
    //   date: "2023-12-20",
    //   readTime: "10 min read",
    //   category: "Performance",
    //   tags: ["Performance", "Optimization", "Web Development"],
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Getting Started with TypeScript in React Projects",
    //   excerpt:
    //     "A beginner-friendly guide to integrating TypeScript into your React applications for better code quality.",
    //   content:
    //     "TypeScript adds static typing to JavaScript, making your React applications more robust and maintainable...",
    //   image: "/placeholder.svg?height=300&width=500",
    //   author: "John Doe",
    //   date: "2023-12-15",
    //   readTime: "9 min read",
    //   category: "TypeScript",
    //   tags: ["TypeScript", "React", "JavaScript", "Tutorial"],
    //   featured: false,
    // },
  ];

  const categories = [
    "All",
    "Web Development",
    "React",
    "Next.js",
    "Design",
    "Performance",
    "TypeScript",
  ];
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Developer Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and thoughts on web development, design, and
            technology. Stay updated with the latest trends and best practices.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="hover:bg-blue-50 cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked articles covering the most important topics in web
              development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-700"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                    <Calendar className="h-4 w-4 ml-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 text-xs"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Explore all articles and find the content that interests you most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-gray-700 text-xs"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center text-xs text-gray-600 mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                      <Clock className="h-3 w-3 ml-3 mr-1" />
                      {post.readTime}
                    </div>
                    <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-600 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-600 text-xs"
                        >
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to my newsletter and get the latest articles, tutorials,
            and web development tips delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
