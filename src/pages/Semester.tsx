import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useParams, useNavigate } from "react-router-dom"
import { BookOpen, FileText, HelpCircle, Download, Book } from "lucide-react"

const Semester = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const semesterData = {
    "1": { 
      title: "Semester 1", 
      color: "bg-semester-1",
      hasContent: {
        notes: true,
        questionPapers: true,
        resources: true,
        syllabus: true
      }
    },
    "2": { 
      title: "Semester 2", 
      color: "bg-semester-2",
      hasContent: {
        notes: false,
        questionPapers: false,
        resources: false,
        syllabus: false
      }
    },
    "3": { 
      title: "Semester 3", 
      color: "bg-semester-3",
      hasContent: {
        notes: false,
        questionPapers: false,
        resources: false,
        syllabus: false
      }
    },
    "4": { 
      title: "Semester 4", 
      color: "bg-semester-4",
      hasContent: {
        notes: false,
        questionPapers: false,
        resources: false,
        syllabus: false
      }
    },
    "5": { 
      title: "Semester 5", 
      color: "bg-semester-5",
      hasContent: {
        notes: false,
        questionPapers: false,
        resources: false,
        syllabus: false
      }
    },
    "6": { 
      title: "Semester 6", 
      color: "bg-semester-6",
      hasContent: {
        notes: false,
        questionPapers: false,
        resources: false,
        syllabus: false
      }
    },
  }

  const semester = semesterData[id as keyof typeof semesterData]

  if (!semester) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-foreground mb-4">Semester Not Found</h1>
          <p className="text-muted-foreground">The requested semester could not be found.</p>
        </div>
      </Layout>
    )
  }

  const cardItems = [
    {
      title: "Notes",
      icon: BookOpen,
      description: "Download lecture notes and study materials",
      hasContent: semester.hasContent.notes,
      onClick: () => id === "1" && navigate("/semester/1/notes")
    },
    {
      title: "Question Papers",
      icon: HelpCircle,
      description: "Access previous year question papers",
      hasContent: semester.hasContent.questionPapers
    },
    {
      title: "Resources",
      icon: Download,
      description: "Additional learning resources and materials",
      hasContent: semester.hasContent.resources
    },
    {
      title: "Syllabus",
      icon: Book,
      description: "View detailed course syllabus and curriculum",
      hasContent: semester.hasContent.syllabus,
      onClick: () => id === "1" && navigate("/semester/1/syllabus")
    }
  ]

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <div className={`inline-block px-4 py-2 rounded-lg ${semester.color} text-white mb-4`}>
            <h1 className="text-3xl font-bold">{semester.title}</h1>
          </div>
          <p className="text-muted-foreground">Access your course materials and resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardItems.map((item, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group relative"
              onClick={item.onClick}
            >
              {/* Content Tag */}
              {item.hasContent && (
                <div className="absolute top-3 right-3 z-20">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white shadow-sm">
                      📚 Available
                    </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {!item.hasContent && (
                  <p className="text-xs text-orange-600 mt-2 font-medium">🚧 Coming Soon</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Semester