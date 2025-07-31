import { Layout } from "@/components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowLeft, ExternalLink, X, Download } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const GE1Notes = () => {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null)
  const navigate = useNavigate()
  
  const ge1Subjects = [
    {
      id: 1,
      title: "GE 1 Mathematics",
      code: "GE 1 Mathematics",
      description: "Mathematics Generic Elective course materials",
      hasContent: false,
      notes: []
    },
    {
      id: 2,
      title: "GE 1 Physics",
      code: "GE 1 Physics",
      description: "Physics Generic Elective course materials",
      hasContent: true,
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
    }
  ]

  const handleCardClick = (subject: any) => {
    if (subject.hasContent && subject.notes.length > 0) {
      if (subject.code === "GE 1 Physics") {
        navigate("/semester/1/notes/ge1/physics")
      }
    }
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
            <h1 className="text-3xl font-bold">GE 1 Notes</h1>
          </div>
          <p className="text-muted-foreground">Generic Elective 1 - Study Materials</p>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ge1Subjects.map((subject) => (
            <Card 
              key={subject.id}
              className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer group"
              onClick={() => handleCardClick(subject)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <BookOpen className="w-5 h-5" />
                  {subject.title}
                  {subject.hasContent && (
                    <ExternalLink className="w-4 h-4 text-primary" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                    {subject.code}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{subject.description}</p>
                
                {subject.hasContent && subject.notes.length > 0 ? (
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
      </div>
    </Layout>
  )
}

export default GE1Notes 