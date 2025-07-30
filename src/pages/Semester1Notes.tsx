import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowLeft, ExternalLink, X, Download } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Semester1Notes = () => {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null)
  
  const notesItems = [
    {
      id: 1,
      title: "AECC (Ability Enhancement Compulsory Course)",
      code: "AECC",
      description: "Comprehensive notes for Ability Enhancement Compulsory Course",
      hasPreview: false,
      previewUrl: "",
      downloadUrl: ""
    },
    {
      id: 2,
      title: "Generic Elective (GE 1)",
      code: "GE 1",
      description: "Detailed notes for Generic Elective course",
      hasPreview: false,
      previewUrl: "",
      downloadUrl: ""
    },
    {
      id: 3,
      title: "Core Course (CC 1)",
      code: "CC 1",
      description: "Complete notes for Core Course 1",
      hasPreview: false,
      previewUrl: "",
      downloadUrl: ""
    },
    {
      id: 4,
      title: "Core Course (CC 2)",
      code: "CC 2",
      description: "Comprehensive notes for Core Course 2",
      hasPreview: false,
      previewUrl: "",
      downloadUrl: ""
    },
    {
      id: 5,
      title: "C-1 & C-2 Lab",
      code: "C-1 & C-2 Lab",
      description: "Practical notes and lab manuals for Core Course 1 and 2",
      hasPreview: false,
      previewUrl: "",
      downloadUrl: ""
    }
  ]

  const handleDownload = (downloadUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = `${title} Notes.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
            <h1 className="text-3xl font-bold">Semester 1 Notes</h1>
          </div>
          <p className="text-muted-foreground">Download comprehensive study notes and materials for Semester 1</p>
        </div>

        {/* Notes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notesItems.map((item) => (
            <Card 
              key={item.id} 
              className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <BookOpen className="w-5 h-5" />
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
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                
                {item.hasPreview ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedPreview(item.previewUrl)}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-md hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Preview Notes
                    </button>
                    <button
                      onClick={() => handleDownload(item.downloadUrl, item.title)}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Notes
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-xs text-orange-600 font-medium">🚧 Coming Soon</p>
                    <p className="text-xs text-muted-foreground mt-1">Notes will be available soon</p>
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
                  {selectedPreview.includes('1s-OVuj0n_kZxCSpyv8XdT9O5U1iSsvhM') ? 'AECC Notes Preview' : 
                   selectedPreview.includes('1DxieZKsOZGS2q3VTN7HcnRKN69PvsBnd') ? 'CC 1 Notes Preview' :
                   selectedPreview.includes('18YV9EMOTaFdW6XiMZ83CnczUPvI_6gKc') ? 'GE 1 Notes Preview' :
                   selectedPreview.includes('1y4bJiFP46eLyMo-LwBaiGV0W0EhwDgSj') ? 'CC 2 Notes Preview' :
                   selectedPreview.includes('183QYJO-EQc_nOPrqOzFpyqpDfiwhZz7S') ? 'C-1 & C-2 Lab Notes Preview' :
                   'Notes Preview'}
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
                  title="Notes Document"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Semester1Notes 