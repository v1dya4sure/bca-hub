interface FooterBannerProps {
  content: string
}

export function FooterBanner({ content }: FooterBannerProps) {
  return (
    <div className="mt-16 py-8 px-6 bg-muted rounded-xl border border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground leading-relaxed">
          {content}
        </p>
        
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-xs text-muted-foreground">Made with</span>
          <span className="text-red-500">❤️</span>
          <span className="text-xs text-muted-foreground">by</span>
          <span className="text-xs font-semibold text-primary">Vidya Sagar</span>
        </div>
      </div>
    </div>
  )
}