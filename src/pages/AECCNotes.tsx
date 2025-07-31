import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowLeft, ExternalLink, X, Download } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const AECCNotes = () => {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null)
  
  const aeccNotes = [
    {
      id: 1,
      title: "AECC Notes",
      description: "Comprehensive notes for Ability Enhancement Compulsory Course",
      previewUrl: "https://drive.google.com/file/d/1MN_iuyPVkE_WrDlFzdBvjythbTVNawp5/view?usp=drive_link",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1MN_iuyPVkE_WrDlFzdBvjythbTVNawp5"
    }
  ]

  const handleDownload = (downloadUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = `${title}.pdf`
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
            to="/semester/1/notes" 
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Semester 1 Notes
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-lg bg-semester-1 text-white mb-4">
            <h1 className="text-3xl font-bold">AECC Notes</h1>
          </div>
          <p className="text-muted-foreground">Ability Enhancement Compulsory Course - Study Materials</p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aeccNotes.map((note) => (
            <Card 
              key={note.id} 
              className="shadow-card hover:shadow-elevated transition-shadow group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <BookOpen className="w-5 h-5" />
                  {note.title}
                  <ExternalLink className="w-4 h-4 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{note.description}</p>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedPreview(note.previewUrl)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-md hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Preview Notes
                  </button>
                  <button
                    onClick={() => handleDownload(note.downloadUrl, note.title)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Notes
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Modal */}
        {selectedPreview && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg shadow-elevated w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">AECC Notes Preview</h3>
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
                  title="AECC Notes Document"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default AECCNotes 