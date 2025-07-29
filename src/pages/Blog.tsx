import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with BCA at IGNOU",
      excerpt: "Everything you need to know about starting your BCA journey at IGNOU.",
      author: "Dilkhush Raj",
      date: "2023-11-01",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Study Tips for Programming Subjects",
      excerpt: "Effective strategies to excel in programming courses during your BCA.",
      author: "Dilkhush Raj", 
      date: "2023-10-28",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Project Ideas for Final Semester",
      excerpt: "Creative project ideas that will make your final semester project stand out.",
      author: "Dilkhush Raj",
      date: "2023-10-25", 
      readTime: "6 min read"
    }
  ]

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Blog</h1>
          <p className="text-muted-foreground">Latest articles and insights for BCA students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="shadow-card hover:shadow-elevated transition-all cursor-pointer group transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog