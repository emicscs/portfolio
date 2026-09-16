"use client"

export const QuoteSection = () => {
  return (
    <section id="quote" className="border-b border-border/80 py-16">
      <div className="mx-auto w-full text-center">
        <div className="rounded-lg border border-border/80 bg-muted/60 px-6 py-10">
          <blockquote className="text-2xl font-medium italic text-foreground">
            &quot;Anybody who preserves the ability to recognize beauty will never get old.&quot;
          </blockquote>
          <cite className="mt-4 block text-base text-muted-foreground">- Franz Kafka</cite>
        </div>
      </div>
    </section>
  )
}
