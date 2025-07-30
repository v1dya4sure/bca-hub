import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, ArrowLeft, ExternalLink, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Semester1Syllabus = () => {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null)
  
  const syllabusItems = [
          {
        id: 1,
        title: "AECC (Ability Enhancement Compulsory Course)",
        code: "AECC",
        description: "Ability Enhancement Compulsory Course for Semester 1",
        hasPreview: true,
        previewUrl: "https://drive.google.com/file/d/1s-OVuj0n_kZxCSpyv8XdT9O5U1iSsvhM/view?usp=drive_link"
      },
    {
      id: 2,
      title: "Generic Elective (GE 1)",
      code: "GE 1",
      description: "Generic Elective course for Semester 1",
      hasPreview: true,
      previewUrl: "https://drive.google.com/file/d/18YV9EMOTaFdW6XiMZ83CnczUPvI_6gKc/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Core Course (CC 1)",
      code: "CC 1",
      description: "Core Course 1 for Semester 1",
      hasPreview: true,
      previewUrl: "https://drive.google.com/file/d/1DxieZKsOZGS2q3VTN7HcnRKN69PvsBnd/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Core Course (CC 2)",
      code: "CC 2",
      description: "Core Course 2 for Semester 1",
      hasPreview: true,
      previewUrl: "https://drive.google.com/file/d/1y4bJiFP46eLyMo-LwBaiGV0W0EhwDgSj/view?usp=drive_link"
    },
    {
      id: 5,
      title: "C-1 & C-2 Lab",
      code: "C-1 & C-2 Lab",
      description: "Laboratory courses for Core Course 1 and Core Course 2",
      hasPreview: true,
      previewUrl: "https://drive.google.com/file/d/183QYJO-EQc_nOPrqOzFpyqpDfiwhZz7S/view?usp=drive_link"
    }
  ]

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/semester/1" 
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Semester 1
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-lg bg-semester-1 text-white mb-4">
            <h1 className="text-3xl font-bold">Semester 1 Syllabus</h1>
          </div>
          <p className="text-muted-foreground">Complete course syllabus and curriculum for Semester 1</p>
        </div>

        {/* Syllabus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syllabusItems.map((item) => (
            <Card 
              key={item.id} 
              className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group"
              onClick={() => item.hasPreview && setSelectedPreview(item.previewUrl)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Book className="w-5 h-5" />
                  {item.title}
                  {item.hasPreview && (
                    <ExternalLink className="w-4 h-4 text-primary" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                    {item.code}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.hasPreview && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-primary font-medium">📄 Click to view syllabus document</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Modal */}
        {selectedPreview && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg shadow-elevated w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">
                  {selectedPreview.includes('1s-OVuj0n_kZxCSpyv8XdT9O5U1iSsvhM') ? 'AECC Syllabus Preview' : 
                   selectedPreview.includes('1DxieZKsOZGS2q3VTN7HcnRKN69PvsBnd') ? 'CC 1 Syllabus Preview' :
                   selectedPreview.includes('18YV9EMOTaFdW6XiMZ83CnczUPvI_6gKc') ? 'GE 1 Syllabus Preview' :
                   selectedPreview.includes('1y4bJiFP46eLyMo-LwBaiGV0W0EhwDgSj') ? 'CC 2 Syllabus Preview' :
                   selectedPreview.includes('183QYJO-EQc_nOPrqOzFpyqpDfiwhZz7S') ? 'C-1 & C-2 Lab Syllabus Preview' :
                   'Syllabus Preview'}
                </h3>
                <button
                  onClick={() => setSelectedPreview(null)}
                  className="p-2 hover:bg-accent rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 p-4">
                <iframe
                  src={selectedPreview.replace('/view?usp=drive_link', '/preview')}
                  className="w-full h-full border-0 rounded-md"
                  title="Syllabus Document"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Semester1Syllabus 