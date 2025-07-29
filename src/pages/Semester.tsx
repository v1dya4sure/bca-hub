import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useParams } from "react-router-dom"
import { BookOpen, FileText, HelpCircle, Download } from "lucide-react"

const Semester = () => {
  const { id } = useParams()
  
  const semesterData = {
    "1": { title: "Semester 1", color: "bg-semester-1" },
    "2": { title: "Semester 2", color: "bg-semester-2" },
    "3": { title: "Semester 3", color: "bg-semester-3" },
    "4": { title: "Semester 4", color: "bg-semester-4" },
    "5": { title: "Semester 5", color: "bg-semester-5" },
    "6": { title: "Semester 6", color: "bg-semester-6" },
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
          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <BookOpen className="w-5 h-5" />
                Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Download lecture notes and study materials</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <FileText className="w-5 h-5" />
                Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">View and submit your assignments</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <HelpCircle className="w-5 h-5" />
                Question Papers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Access previous year question papers</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <Download className="w-5 h-5" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Additional learning resources and materials</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Semester