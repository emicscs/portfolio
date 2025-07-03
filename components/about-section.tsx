"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Briefcase, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experiences = [
	{
		title: "Machine Learning Researcher",
		company: "Brookhaven National Laboratory",
		period: "June 2025 - August 2025",
		description:
			"Designing deep learning architectures optimized for reconstructing 4D fMRI data from sparse 2D inputs.",
	},
	{
		title: "Vice President of Technology",
		company: "Blueprint",
		period: "March 2025 - Present",
		description:
			"Leading a student team to develop and implement free software tailored to the needs of non-profits.",
	},
]

const education = [
	{
		degree: "Bachelor of Science in Computer Science",
		institution: "Stevens Institute of Technology",
		period: "2024 - 2028",
		description: "",
	},
	{
		degree: "High School Diploma",
		institution: "Babylon Jr-Sr High School",
		period: "2020 - 2024",
		description: "",
	},
]

export function AboutSection() {
	return (
		<section id="about" className="py-20">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold mb-4">about me</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						what am i up to?...
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-1 flex flex-col items-center lg:items-start"
					>
						<div className="relative w-[330px] aspect-[3/4] overflow-hidden rounded-xl mb-6 shadow-lg">
							<Image
								src="/sunset.webp"
								alt="Profile Photo"
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px"
								priority
								quality={95}
							/>
						</div>
						<div className="space-y-1">
							<p className="text-muted-foreground"></p>
							<div className="flex flex-col space-y-2">
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">
										New York, NY, US
									</span>
								</div>
								<div className="flex items-center gap-2">
									<GraduationCap className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">
										Bachelor's in Computer Science, 2028
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Briefcase className="h-4 w-4 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">
										Machine Learning Researcher at Brookhaven National Laboratory
									</span>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-2"
					>
						<div>
							<div className="space-y-4">
								<p>
									my journey began about about a year ago when I took my first CS
									class at Stevens... and my love for computing has only grown
									since then.
								</p>
								<p>
									my current research is in spatiotemporal learning. i am trying to
								 represent a traditional 4D fMRI with a limited number of sparse 2D
									cross-sections to decrease scan times and acquasition limitations.
								</p>
								<p>
									some topics that i have been reading and watching youtube videos
									about are{" "}
									<span className="text-orange-500">
										generalizable implicit neural representations
									</span>{" "}
									and{" "}
									<span className="text-orange-500">neural radiance fields</span>.
									i have also been trying to reimplement them in my free time.
								</p>
								<p>
									away from my computer, i like to play chess and basketball, read
									philosophy, and make music. below you will find my blog (which
									will be more active soon), news happening with me, and some media
									i have been enjoying. thanks for reading ! :0
								</p>
							</div>
						</div>

						<div className="mt-8">
							<Tabs defaultValue="experience">
								<TabsList className="grid w-full grid-cols-2">
									<TabsTrigger value="experience">Experience</TabsTrigger>
									<TabsTrigger value="education">Education</TabsTrigger>
								</TabsList>
								<TabsContent value="experience" className="mt-6 space-y-6">
									{experiences.map((exp, index) => (
										<div key={index} className="flex gap-4">
											<div className="flex flex-col items-center">
												<div className="rounded-full bg-primary/20 p-2">
													<Briefcase className="h-4 w-4 text-primary" />
												</div>
												{index < experiences.length - 1 && (
													<div className="w-px h-full bg-border mt-2" />
												)}
											</div>
											<div className="space-y-2">
												<h4 className="font-medium">{exp.title}</h4>
												<div className="text-sm text-muted-foreground">
													{exp.company} | {exp.period}
												</div>
												<p className="text-sm text-muted-foreground">
													{exp.description}
												</p>
											</div>
										</div>
									))}
								</TabsContent>
								<TabsContent value="education" className="mt-6 space-y-6">
									{education.map((edu, index) => (
										<div key={index} className="flex gap-4">
											<div className="flex flex-col items-center">
												<div className="rounded-full bg-primary/20 p-2">
													<GraduationCap className="h-4 w-4 text-primary" />
												</div>
												{index < education.length - 1 && (
													<div className="w-px h-full bg-border mt-2" />
												)}
											</div>
											<div className="space-y-2">
												<h4 className="font-medium">{edu.degree}</h4>
												<div className="text-sm text-muted-foreground">
													{edu.institution} | {edu.period}
												</div>
												<p className="text-sm text-muted-foreground">
													{edu.description}
												</p>
											</div>
										</div>
									))}
								</TabsContent>
							</Tabs>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

