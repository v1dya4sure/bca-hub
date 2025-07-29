import { Clock, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NoticeItem {
  id: string
  title: string
  timestamp: string
  description: string
}

interface NoticeBoardProps {
  title: string
  items: NoticeItem[]
  pagination?: {
    page: number
    rowsPerPage: number
    totalPages: number
  }
}

export function NoticeBoard({ title, items }: NoticeBoardProps) {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="mb-12">
      <Card className="shadow-elevated border-0 bg-gradient-card">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary rounded-lg">
              <Bell className="w-5 h-5 text-primary-foreground" />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No notices available at the moment.</p>
            </div>
          ) : (
            items.map((notice) => (
              <div 
                key={notice.id}
                className="p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {notice.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatDate(notice.timestamp)}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {notice.description}
                </p>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  )
}