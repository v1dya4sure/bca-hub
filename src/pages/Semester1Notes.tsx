import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowLeft, ExternalLink, X, Download } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Semester1Notes = () => {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<any>(null)
  
  const notesItems = [
    {
      id: 1,
      title: "AECC (Ability Enhancement Compulsory Course)",
      code: "AECC",
      description: "Comprehensive notes for Ability Enhancement Compulsory Course",
      hasPreview: true,
      notes: [
        {
          id: 1,
          title: "AECC Notes",
          description: "Comprehensive notes for Ability Enhancement Compulsory Course",
          previewUrl: "https://drive.google.com/file/d/1MN_iuyPVkE_WrDlFzdBvjythbTVNawp5/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1MN_iuyPVkE_WrDlFzdBvjythbTVNawp5"
        }
      ]
    },
    {
      id: 2,
      title: "Generic Elective (GE 1)",
      code: "GE 1",
      description: "Detailed notes for Generic Elective course",
      hasPreview: true,
      notes: [
        {
          id: 1,
          title: "Physics GE 1 - Unit 1 Notes",
          description: "Physics Generic Elective Unit 1 study materials",
          previewUrl: "https://drive.google.com/file/d/1-bik7aoKLIukdXhEL7CxrcaTScLODd_l/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1-bik7aoKLIukdXhEL7CxrcaTScLODd_l"
        },
        {
          id: 2,
          title: "Physics GE 1 - Unit 2 Notes",
          description: "Physics Generic Elective Unit 2 study materials",
          previewUrl: "https://drive.google.com/file/d/1-JK7XJ5tQ4N3VauYVo9kQdkkZ919gjQP/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1-JK7XJ5tQ4N3VauYVo9kQdkkZ919gjQP"
        },
        {
          id: 3,
          title: "Physics GE 1 - Unit 3 Notes",
          description: "Physics Generic Elective Unit 3 study materials",
          previewUrl: "https://drive.google.com/file/d/1IC-uZyGRSQ8pp2J86KFNVpl14ShoWTM7/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1IC-uZyGRSQ8pp2J86KFNVpl14ShoWTM7"
        },
        {
          id: 4,
          title: "Physics GE 1 - Unit 4 Notes",
          description: "Physics Generic Elective Unit 4 study materials",
          previewUrl: "https://drive.google.com/file/d/1bv8wTwmeIodZ_HDyCMf-ziU3_MQSL96H/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1bv8wTwmeIodZ_HDyCMf-ziU3_MQSL96H"
        },
        {
          id: 5,
          title: "Physics GE 1 - Unit 5 Notes",
          description: "Physics Generic Elective Unit 5 study materials",
          previewUrl: "https://drive.google.com/file/d/16IfEh0nxFhfeEfaJuyUAHL_mSrghNE4R/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=16IfEh0nxFhfeEfaJuyUAHL_mSrghNE4R"
        },
        {
          id: 6,
          title: "Physics GE 1 - Unit 6 Notes",
          description: "Physics Generic Elective Unit 6 study materials",
          previewUrl: "https://drive.google.com/file/d/1tkzNfe81TG12rPXTsMDJNZG7IXTeKmHq/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1tkzNfe81TG12rPXTsMDJNZG7IXTeKmHq"
        },
        {
          id: 7,
          title: "Physics GE 1 - Unit 7 Notes",
          description: "Physics Generic Elective Unit 7 study materials",
          previewUrl: "https://drive.google.com/file/d/1MCQcy2JSLkgG5M1gk94-N4KK-rpJiEqi/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1MCQcy2JSLkgG5M1gk94-N4KK-rpJiEqi"
        },
        {
          id: 8,
          title: "Physics GE 1 - Unit 8 Notes",
          description: "Physics Generic Elective Unit 8 study materials",
          previewUrl: "https://drive.google.com/file/d/1S-9x5jQCq3rSN0aFqn3-oG5P4zS1yumR/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1S-9x5jQCq3rSN0aFqn3-oG5P4zS1yumR"
        },
        {
          id: 9,
          title: "Physics GE 1 - Unit 9 Notes",
          description: "Physics Generic Elective Unit 9 study materials",
          previewUrl: "https://drive.google.com/file/d/1OLJeZG_yrHdIzD1EkjaxdE6Rp_m1_NQ7/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1OLJeZG_yrHdIzD1EkjaxdE6Rp_m1_NQ7"
        },
        {
          id: 10,
          title: "Physics GE 1 - Unit 10 Notes",
          description: "Physics Generic Elective Unit 10 study materials",
          previewUrl: "https://drive.google.com/file/d/18K7xz8739FZhO09AzWdspUdwZgafc1tn/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=18K7xz8739FZhO09AzWdspUdwZgafc1tn"
        },
        {
          id: 11,
          title: "Physics GE 1 - Unit 11 Notes",
          description: "Physics Generic Elective Unit 11 study materials",
          previewUrl: "https://drive.google.com/file/d/1OIoW8Q3OEFHMG1d1Ag4hKQBUzjZomCli/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1OIoW8Q3OEFHMG1d1Ag4hKQBUzjZomCli"
        },
        {
          id: 12,
          title: "Physics GE 1 - Unit 12 Notes",
          description: "Physics Generic Elective Unit 12 study materials",
          previewUrl: "https://drive.google.com/file/d/1Tg2wIlxt0KyOv9nFmUjGWMFRFTjmrGe0/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1Tg2wIlxt0KyOv9nFmUjGWMFRFTjmrGe0"
        },
        {
          id: 13,
          title: "Physics GE 1 - Unit 13 Notes",
          description: "Physics Generic Elective Unit 13 study materials",
          previewUrl: "https://drive.google.com/file/d/1t-eGbCish4UadsRNMXGi7ah58fOsA6Jv/view?usp=drive_link",
          downloadUrl: "https://drive.google.com/uc?export=download&id=1t-eGbCish4UadsRNMXGi7ah58fOsA6Jv"
        }
      ]
    },
    {
      id: 3,
      title: "Core Course (CC 1)",
      code: "CC 1",
      description: "Complete notes for Core Course 1",
      hasPreview: false,
      notes: []
    },
    {
      id: 4,
      title: "Core Course (CC 2)",
      code: "CC 2",
      description: "Comprehensive notes for Core Course 2",
      hasPreview: false,
      notes: []
    },
    {
      id: 5,
      title: "C-1 & C-2 Lab",
      code: "C-1 & C-2 Lab",
      description: "Practical notes and lab manuals for Core Course 1 and 2",
      hasPreview: false,
      notes: []
    }
  ]

  const handleCardClick = (item: any) => {
    if (item.hasPreview && item.notes.length > 0) {
      setSelectedSubject(item)
    }
  }

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
              onClick={() => handleCardClick(item)}
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
                
                {item.hasPreview && item.notes.length > 0 ? (
                  <div className="text-center py-2">
                    <p className="text-xs text-primary font-medium">📚 Click to view notes</p>
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

        {/* Subject Notes Modal */}
        {selectedSubject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg shadow-elevated w-full max-w-4xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">
                  {selectedSubject.title} - Notes
                </h3>
                <button
                  onClick={() => setSelectedSubject(null)}
                  className="p-2 hover:bg-accent rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {selectedSubject.notes.map((note: any, index: number) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <h4 className="text-lg font-medium mb-3">{note.title}</h4>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedPreview(note.previewUrl)}
                          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-md hover:bg-primary/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Preview Notes
                        </button>
                        <button
                          onClick={() => handleDownload(note.downloadUrl, note.title)}
                          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download Notes
                        </button>
                      </div>
                      {note.description && (
                        <p className="text-xs text-muted-foreground mt-2">{note.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Preview Modal */}
        {selectedPreview && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg shadow-elevated w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-lg font-semibold">Notes Preview</h3>
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