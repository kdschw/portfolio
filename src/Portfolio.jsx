import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  GraduationCap,
  FolderGit2,
  FileDown,
  ArrowRight,
  MapPin,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


export default function PortfolioDark() {
  const profile = useMemo(
    () => ({
      name: "Kyle Schwartz",
      role: "Computer Science Student",
      tagline: "I build clean, reliable software — from algorithms to full-stack apps.",
      location: "Fayetteville, AR",
      email: "kyleschwartz12@gmail.com",
      socials: {
        github: "https://github.com/kdschw/kdschw.git",
        linkedin: "https://linkedin.com/in/kyle-schwartz-81518a331",
      },
      resumeUrl: "#",
      about:
        "I'm a computer science student who enjoys solving problems, building tools that help people, and turning ideas into polished products. I like working across the stack — from data structures and systems fundamentals to modern web apps.",
      highlights: [
        "Strong fundamentals: DS&A, OOP, systems",
        "Hands-on: Java, Python, C++, game projects",
        "Looking for internships and full-time roles",
      ],
      skills: {
        Languages: ["Java", "Python", "C++", "JavaScript/TypeScript"],
        Frameworks: ["React", "Node.js", "Express"],
        Tools: ["Git", "Linux", "VS Code"],
        Concepts: ["Data Structures", "OOP", "MVC", "Computer Architecture"],
      },
    }),
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "2D Side-Scrolling Platformer",
        blurb:
          "A horizontally scrolling game with map editing, collision detection, JSON save/load, and polymorphic sprites.",
        tags: ["Java", "MVC", "Collision", "JSON"],
        links: {
          demo: "#",
          code: "#",
        },
        highlights: [
          "Custom map editor with click-to-place objects",
          "Robust collision resolution (top/bottom/sides)",
          "Polymorphic sprite system (Goomba, Fireball, etc.)",
        ],
      },
      {
        title: "Graph + Matrix Toolkit",
        blurb:
          "A small Python toolkit exploring adjacency matrices, graph traversal, and clean API design.",
        tags: ["Python", "Graphs", "Algorithms"],
        links: {
          demo: "#",
          code: "#",
        },
        highlights: [
          "Simple, testable graph operations",
          "Clear method design and usage examples",
          "Built as reusable module",
        ],
      },
      {
        title: "CPU Labs Portfolio",
        blurb:
          "MIPS + VHDL labs including ALUs, CPU control block, sign-extension, and memory integration.",
        tags: ["MIPS", "VHDL", "Architecture"],
        links: {
          demo: "#",
          code: "#",
        },
        highlights: [
          "Single-cycle datapath analysis",
          "Bubble sort in MIPS with function calls",
          "Top-level module wiring + waveform validation",
        ],
      },
    ],
    []
  );

  const experience = useMemo(
    () => [
      {
        title: "Student Developer",
        org: "(Your club / lab / personal work)",
        time: "2025 — Present",
        bullets: [
          "Built course projects with clean OOP and MVC architecture.",
          "Practiced debugging and performance thinking using systems labs.",
          "Collaborated with classmates using Git and code reviews.",
        ],
      },
      {
        title: "",
        org: "",
        time: "",
        bullets: [
         
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState("home");

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }

  function onSubmitContact(e) {
    e.preventDefault();
    // Replace with your preferred handler (EmailJS, Formspree, Next.js API route, etc.)
    alert("Message sent (demo). Hook this up to your email service.");
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-50">
        {/* Subtle background */}
        <div className="pointer-events-none fixed inset-0 opacity-[0.35]">
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(700px_400px_at_80%_0%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(800px_500px_at_60%_90%,rgba(34,197,94,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.85))]" />
        </div>

        {/* Top nav */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/65 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <button
              onClick={() => scrollTo("home")}
              className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-zinc-50 hover:bg-white/5"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="hidden sm:inline">{profile.name}</span>
              <span className="sm:hidden">Portfolio</span>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={
                    "rounded-full px-3 py-1.5 text-sm transition " +
                    (active === item.id
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white")
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-2 text-zinc-300 hover:bg-white/5 hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-2 text-zinc-300 hover:bg-white/5 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>

              <Button
                variant="secondary"
                className="hidden rounded-full md:inline-flex"
                onClick={() => scrollTo("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="relative mx-auto max-w-6xl px-4">
          {/* HERO */}
          <section id="home" className="pb-10 pt-12 sm:pb-14 sm:pt-16">
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
                  <Sparkles className="h-4 w-4" />
                  <span>{profile.role}</span>
                  <span className="mx-1 h-1 w-1 rounded-full bg-white/25" />
                  <span className="inline-flex items-center gap-1 text-zinc-300">
                    <MapPin className="h-4 w-4" />
                    {profile.location}
                  </span>
                </div>

                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Building software with
                  <span className="bg-gradient-to-r from-sky-300 via-fuchsia-300 to-emerald-200 bg-clip-text text-transparent">
                    {" "}clarity{" "}
                  </span>
                  and
                  <span className="bg-gradient-to-r from-emerald-200 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                    {" "}craft.
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-pretty text-zinc-300">
                  {profile.tagline}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    className="rounded-full"
                    onClick={() => scrollTo("projects")}
                  >
                    <FolderGit2 className="mr-2 h-4 w-4" />
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="secondary"
                    className="rounded-full"
                    asChild
                  >
                    <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                      <FileDown className="mr-2 h-4 w-4" />
                      Resume
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    className="rounded-full border border-white/10 hover:bg-white/5"
                    asChild
                  >
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      {profile.email}
                    </a>
                  </Button>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {profile.highlights.map((h) => (
                    <Card
                      key={h}
                      className="border-white/10 bg-white/5 shadow-xl shadow-black/20"
                    >
                      <CardContent className="p-4 text-sm text-zinc-200">
                        {h}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="lg:col-span-5"
              >
                <Card className="h-full border-white/10 bg-white/5 shadow-xl shadow-black/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <GraduationCap className="h-5 w-5" />
                      Current Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm text-zinc-200">
                        I’m currently sharpening my fundamentals while building
                        portfolio projects that feel real: clean architecture,
                        readable code, and practical performance.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["DS&A", "OOP", "Systems", "Full-stack"].map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="rounded-full"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        {
                          label: "Open to",
                          value: "Internships · Research · Freelance",
                        },
                        {
                          label: "Interests",
                          value:
                            "Software engineering, games, architecture, developer tools",
                        },
                        {
                          label: "Goals",
                          value:
                            "Ship polished projects and grow as a teammate and engineer",
                        },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                        >
                          <div className="text-sm text-zinc-300">{row.label}</div>
                          <div className="text-sm text-zinc-100">{row.value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* ABOUT */}
          <Section
            id="about"
            title="About"
            subtitle="A little background and what I care about"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <Card className="border-white/10 bg-white/5 lg:col-span-7">
                <CardContent className="p-6">
                  <p className="text-pretty text-zinc-200">{profile.about}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        title: "Practical",
                        desc: "I like projects that solve real problems.",
                      },
                      {
                        title: "Readable",
                        desc: "I optimize for clarity and maintainability.",
                      },
                      {
                        title: "Curious",
                        desc: "I enjoy learning how things work under the hood.",
                      },
                    ].map((x) => (
                      <div
                        key={x.title}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="text-sm font-semibold text-zinc-50">
                          {x.title}
                        </div>
                        <div className="mt-1 text-sm text-zinc-300">{x.desc}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 lg:col-span-5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Quick facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { k: "Degree", v: "B.S. Computer Science" },
                    { k: "Coursework", v: "DS&A, Architecture, OOP" },
                    { k: "Favorite", v: "Turning messy code into clean systems" },
                    { k: "Currently", v: "Building portfolio + applying" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="text-sm text-zinc-300">{r.k}</div>
                      <div className="text-sm text-zinc-100">{r.v}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* PROJECTS */}
          <Section
            id="projects"
            title="Projects"
            subtitle="Selected work (swap these with your real links)"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.15 }}
                >
                  <Card className="h-full border-white/10 bg-white/5 shadow-xl shadow-black/20">
                    <CardHeader className="space-y-2">
                      <CardTitle className="flex items-center justify-between gap-3 text-base">
                        <span className="text-zinc-50">{p.title}</span>
                        <span className="inline-flex items-center gap-2">
                          <IconLink href={p.links.code} label="Code">
                            <Github className="h-4 w-4" />
                          </IconLink>
                          <IconLink href={p.links.demo} label="Demo">
                            <ExternalLink className="h-4 w-4" />
                          </IconLink>
                        </span>
                      </CardTitle>
                      <p className="text-sm text-zinc-300">{p.blurb}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <Badge key={t} variant="secondary" className="rounded-full">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="text-sm font-semibold text-zinc-100">
                          Highlights
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-200">
                          {p.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* SKILLS */}
          <Section
            id="skills"
            title="Skills"
            subtitle="What I use and what I’m learning"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <Card className="border-white/10 bg-white/5 lg:col-span-7">
                <CardContent className="p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {Object.entries(profile.skills).map(([group, items]) => (
                      <div
                        key={group}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="text-sm font-semibold text-zinc-50">
                          {group}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {items.map((s) => (
                            <Badge
                              key={s}
                              variant="secondary"
                              className="rounded-full"
                            >
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 lg:col-span-5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">What I’m proud of</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      title: "Architecture",
                      desc: "I can explain why code is structured a certain way.",
                    },
                    {
                      title: "Debugging",
                      desc: "I trace issues methodically, not by guesswork.",
                    },
                    {
                      title: "Communication",
                      desc: "I write clear READMEs and collaborate well.",
                    },
                  ].map((x) => (
                    <div
                      key={x.title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="text-sm font-semibold text-zinc-50">
                        {x.title}
                      </div>
                      <div className="mt-1 text-sm text-zinc-300">{x.desc}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section
            id="experience"
            title="Experience"
            subtitle="Things I’ve done (even class projects count if you frame them well)"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              {experience.map((e) => (
                <Card key={e.title} className="border-white/10 bg-white/5">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-base text-zinc-50">
                      {e.title}
                    </CardTitle>
                    <div className="text-sm text-zinc-300">
                      {e.org} · <span className="text-zinc-400">{e.time}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-200">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* CONTACT */}
          <Section
            id="contact"
            title="Contact"
            subtitle="Want to collaborate or chat? Send a message."
          >
            <div className="flex justify-center">
              <Card className="border-white/10 bg-white/5 w-full max-w-2xl">
                <CardContent className="p-6">
                   <div className="space-y-6">
                    <p className="text-zinc-300 text-med">
                      The best way to reach me is via email. I typically respond within 24 hours.
                    </p>

                    <a
                      href={`mailto:${profile.email}?subject=Portfolio Contact`}
                      className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-zinc-100 hover:bg-white/20 transition text-med font-medium"
                    >
                      <Mail className="h-5 w-5" />
                      {profile.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 lg:col-span-5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <LinkRow
                    icon={<Github className="h-5 w-5" />}
                    label="GitHub"
                    href={profile.socials.github}
                  />
                  <LinkRow
                    icon={<Linkedin className="h-5 w-5" />}
                    label="LinkedIn"
                    href={profile.socials.linkedin}
                  />
                  <LinkRow
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    href={`mailto:${profile.email}`}
                  />
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-semibold text-zinc-50">One-liner</div>
                    <p className="mt-2 text-sm text-zinc-300">
                      I’m always open to feedback and collaboration — especially on
                      student-friendly, real-world projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>

          <footer className="pb-10 pt-2">
            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:flex-row">
              <div>
                © {new Date().getFullYear()} {profile.name}. Built with React.
              </div>
              <div className="flex items-center gap-2">
                <a
                  className="rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-zinc-200"
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-zinc-200"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </main>

        {/* Mobile bottom nav */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-zinc-950/70 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2">
            {nav.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={
                  "flex-1 rounded-2xl px-2 py-2 text-xs transition " +
                  (active === item.id
                    ? "bg-white/10 text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white")
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-10 sm:py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            {title}
          </h2>
          <p className="mt-1 text-sm text-zinc-300">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function IconLink({ href, label, children }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-zinc-200 hover:bg-white/5"
        >
          {children}
        </a>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

function LinkRow({ icon, label, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/5"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
          {icon}
        </span>
        <div>
          <div className="text-sm font-semibold text-zinc-100">{label}</div>
          <div className="text-xs text-zinc-400">{href}</div>
        </div>
      </div>
      <ExternalLink className="h-4 w-4 text-zinc-400" />
    </a>
  );
}
