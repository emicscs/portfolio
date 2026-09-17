"use client"

const newsItems = [
  {
    date: "September 2026",
    content: (
      <>
        Sponsored to attend{" "}<a href="https://shpe.org/engage/events/national-convention/" className="italic text-orange-600 hover:text-orange-300">
  SHPE (Society of Hispanic Professional Engineers) National Convention 2026
        </a>{" "}
        in Indianapolis, Indiana.
      </>
    ),
  },
  {
    date: "September 2026",
    content: (
      <>
        Reappointed as a Lead for the Fall 2026 semester of{" "}<a href="https://www.stevens.edu/school-engineering-science/departments/mathematical-sciences/math-circle-initiative" className="italic text-orange-600 hover:text-orange-300">
  Stevens Math Circle Initiative
        </a>{" "}
      </>
    ),
  },
  {
    date: "March 2026",
    content: (
      <>
        Won QuackHacks 2026 with Esther Li, Cristiano Pinto, and Evan Su building{" "}
        <a href="https://devpost.com/software/sonamath" className="italic text-orange-600 hover:text-orange-300">
          Euler&apos;s Vision
        </a>
        .
      </>
    ),
  },
  {
    date: "February 2026",
    content: (
      <>
        Received return offer from Computational and Data Science group at Brookhaven National Laboratory.
      </>
    ),
  },
  {
    date: "January 2026",
    content: (
      <>
        Appointed as a Lead for the Spring 2026 semester of{" "}<a href="https://www.stevens.edu/school-engineering-science/departments/mathematical-sciences/math-circle-initiative" className="italic text-orange-600 hover:text-orange-300">
  Stevens Math Circle Initiative,
        </a>{" "}
        an NSF-funded and university-student-led math enrichment program for elementary and middle school students.
      </>
    ),
  },
  {
    date: "January 2026",
    content: (
      <>
        Started my research assistantship within the Computer Vision lab at Stevens Institute of Technology.
      </>
    ),
  },
  {
    date: "October 2025",
    content: <>Attended HackPrinceton 2025.</>,
  },
  {
    date: "March 2025",
    content: (
      <>
        Won my first hackathon! Built
        <a
          href="https://devpost.com/software/pelican-ai?ref_content=user-portfolio&ref_feature=in_progress"
          className="italic text-orange-600 hover:text-orange-300"
        >
          {" "}
          Caremigo{" "}
        </a>{" "}
        with friends Chinli Ong, Daniel Llonch, and Zidanni Clerigo.
      </>
    ),
  },
  {
    date: "March 2025",
    content: (
      <>
        Launched a podcast
        <a
          href="https://www.youtube.com/channel/UCxOIYDotTE2eID3Z1psnD-w"
          className="italic text-orange-600 hover:text-orange-300"
        >
          {" "}
          Hello, Zidanni, Emilio, and World{" "}
        </a>{" "}
        with classmate Zidanni Clerigo.
      </>
    ),
  },
  {
    date: "February 2025",
    content: (
      <>
        Accepted an offer from{" "}
        <a
          href="https://www.bnl.gov/world/"
          className="italic text-orange-600 hover:text-orange-300"
        >
          CDS
        </a>{" "}
        at{" "}
        <a
          href="https://www.bnl.gov/world/"
          className="italic text-orange-600 hover:text-orange-300"
        >
          Brookhaven National Laboratory
        </a>{" "}
        as a Machine Learning Researcher.
      </>
    ),
  },
  {
    date: "February 2025",
    content: (
      <>
        Attended Hack@Brown at Brown University. Here, my friends and I built{" "}
        <a className="italic text-orange-600 hover:text-orange-300">Upright</a>, a posture analysis tool.
      </>
    ),
  },
  {
    date: "January 2025",
    content: "Accepted my offer as a Resident Assistant at Stevens Institute of Technology.",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="border-b border-border/80 py-16">
      <div className="mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">News</h2>
        </div>
        <div className="mx-auto max-w-3xl rounded-lg border border-border/80 bg-card p-6 sm:p-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="mb-8 flex gap-6 border-b border-border/70 pb-8 last:mb-0 last:border-b-0 last:pb-0"
            >
              <div className="w-32 flex-shrink-0">
                <span className="text-sm font-medium text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-base text-foreground">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
