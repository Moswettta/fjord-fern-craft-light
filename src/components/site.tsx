import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronLeft, ChevronRight, Pause, Play, BookOpen, Heart, Sparkles, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/approach", label: "Approach" },
  { to: "/messages", label: "Messages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHero = path === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="min-h-screen bg-parchment font-body text-ink">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          onHero ? "bg-transparent" : "border-b border-stone/80 bg-parchment/95 shadow-sm backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img src="/img/sewa-academy-logo.png" alt="Sewa Academy logo" className="h-12 w-12 object-contain" />
            <span className={`leading-tight ${onHero ? "text-white" : "text-forest"}`}>
              <span className="block font-display text-xl font-semibold tracking-tight">Sewa Academy</span>
              <span className={`block text-[10px] font-medium uppercase tracking-[0.22em] ${onHero ? "text-white/80" : "text-ink-muted"}`}>
                Kenya
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  path === l.to
                    ? onHero
                      ? "text-gold-light"
                      : "text-forest"
                    : onHero
                      ? "text-white/90 hover:text-white"
                      : "text-ink-soft hover:text-forest"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="ml-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-deep"
            >
              Enroll
            </Link>
          </nav>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${onHero ? "text-white" : "text-forest"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-stone bg-white px-4 py-3 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="min-h-12 rounded-xl px-3 py-3 text-base font-semibold text-ink-soft">
                  {l.label}
                </Link>
              ))}
              <Link to="/admissions" className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-forest font-semibold text-white">
                Enroll
              </Link>
            </div>
          </div>
        )}
      </header>

      {children}

      <a
        href="https://wa.me/254795893804"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-lg"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 15.7L1 22l6.5-1.1A11 11 0 0 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.9.7.7-3.8-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
        </svg>
        WhatsApp us
      </a>

      <footer className="bg-forest-deep text-white/85">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-3 text-white">
              <img src="/img/sewa-academy-logo.png" alt="" className="h-11 w-11 object-contain" />
              <span className="font-display text-xl">Sewa Academy</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Private Christian-aligned education in Slota, Athi River. Nurturing minds and shaping character.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-white">Pages</h2>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-white">Levels</h2>
            <ul className="space-y-2 text-sm">
              <li>Play Group</li>
              <li>Kindergarten</li>
              <li>Primary, Grade 1–6</li>
              <li>Junior Secondary, Grade 7–9</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-white">Visit</h2>
            <p className="text-sm leading-relaxed">
              Slota, Athi River
              <br />
              Machakos County, Kenya
              <br />
              <a className="hover:text-gold-light" href="tel:+254795893804">
                +254 795 893804
              </a>
              <br />
              <a className="hover:text-gold-light" href="mailto:sewaacademyke@gmail.com">
                sewaacademyke@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Sewa Academy Kenya
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <section className="bg-forest-deep px-6 pb-16 pt-32 text-center text-white">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{kicker}</p>
      <h1 className="font-display text-5xl font-semibold md:text-6xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{text}</p>
    </section>
  );
}

const slides = [
  { src: "/img/hero-school.jpg", alt: "Sewa Academy learners on the school grounds" },
  { src: "/img/students.jpg", alt: "Learners together outdoors" },
  { src: "/img/classroom.jpg", alt: "A bright classroom" },
  { src: "/img/arts-sports.jpg", alt: "Creative arts" },
  { src: "/img/holiday-camp.jpg", alt: "Holiday camp" },
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden md:items-center">
      {slides.map((s, idx) => (
        <img
          key={s.src}
          src={s.src}
          alt={idx === i ? s.alt : ""}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-forest-deep/55" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-28 pt-36">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/90">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Private Christian School — Slota, Athi River
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-none text-white sm:text-7xl">
          Nurturing Minds,
          <br />
          <em className="text-gold-light">Shaping Character</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90">
          Sewa Academy Kenya offers holistic, Christian-aligned education for Play Group through Junior Secondary — building excellence, creativity, and character in every child.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/programs" className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep">
            Explore Programs
          </Link>
          <Link to="/contact" className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        <button type="button" aria-label="Previous photo" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white" onClick={() => setI((n) => (n + slides.length - 1) % slides.length)}>
          <ChevronLeft size={18} />
        </button>
        {slides.map((s, idx) => (
          <button key={s.src} type="button" aria-label={`Photo ${idx + 1}`} onClick={() => setI(idx)} className={`h-2 rounded-full bg-white ${idx === i ? "w-6 bg-gold" : "w-2 bg-white/50"}`} />
        ))}
        <button type="button" aria-label="Next photo" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white" onClick={() => setI((n) => (n + 1) % slides.length)}>
          <ChevronRight size={18} />
        </button>
        <button type="button" aria-label={paused ? "Play" : "Pause"} className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white" onClick={() => setPaused((v) => !v)}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden bg-forest-deep py-2 text-xs tracking-wide text-white/80">
        <div className="marquee-track flex gap-8 px-4">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-8 whitespace-nowrap">
              <span>Character Development</span>
              <span>•</span>
              <span>Academic Excellence</span>
              <span>•</span>
              <span>Creative Growth</span>
              <span>•</span>
              <span>Private Christian School — Slota, Athi River • Machakos County • Kenya</span>
              <span>•</span>
              <span>Play Group • Kindergarten • Primary Grade 1–6 • Junior Secondary Grade 7–9</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <img src="/img/classroom.jpg" alt="Classroom posters and learning space" className="aspect-[4/3] w-full rounded-3xl object-cover" />
      <div>
        <div className="mb-5 h-0.5 w-12 bg-gold" />
        <h2 className="font-display text-5xl font-semibold text-forest">About Sewa Academy</h2>
        <p className="mt-3 font-display text-xl italic text-ink-soft">A Christian-aligned school in Slota, Athi River, building excellence in every child.</p>
        <p className="mt-5 leading-relaxed text-ink-muted">
          Sewa Academy Kenya is a private, Christian-aligned educational institution located in Slota, Athi River, Machakos County. We serve learners from Play Group through Junior Secondary with a focus on academic excellence, character, and creativity — at a fee families can sustain.
        </p>
        <Link to="/about" className="mt-6 inline-flex text-sm font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4">
          Read our story
        </Link>
      </div>
    </section>
  );
}

const levels = [
  { icon: Sparkles, title: "Play Group", age: "Ages 2 – 4", text: "A warm start with guided play, storytelling, basic numeracy, and social skills." },
  { icon: Heart, title: "Kindergarten", age: "Ages 4 – 6", text: "Literacy, early mathematics, creativity, and character before Grade 1." },
  { icon: BookOpen, title: "Primary", age: "Grade 1 – 6", text: "CBC-aligned academics with reading, science, ICT basics, and moral development." },
  { icon: GraduationCap, title: "Junior Secondary", age: "Grade 7 – 9", text: "Deeper subjects, leadership, and preparation for senior secondary." },
];

export function ProgramsBlock() {
  return (
    <section className="bg-forest-deep px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-gold">OUR LEVELS</p>
        <h2 className="font-display text-5xl font-semibold">Programs</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">From early play to junior secondary, each level is designed with care, structure, and purpose.</p>
        <div className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((l) => (
            <article key={l.title} className="rounded-3xl border border-white/10 bg-forest p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gold text-forest-deep">
                <l.icon size={22} />
              </div>
              <h3 className="font-display text-2xl">{l.title}</h3>
              <p className="mt-1 text-sm text-gold">{l.age}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{l.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApproachBlock() {
  const items = [
    { icon: BookOpen, title: "Academic Excellence", tone: "bg-forest text-white", text: "Rigorous CBC-aligned curriculum with qualified teachers, modern resources, and personalized attention to help every student reach their potential." },
    { icon: Heart, title: "Character Development", tone: "bg-forest-deep text-white", text: "Christian values of integrity, respect, and service are woven into daily life, helping students grow into ethical, compassionate leaders." },
    { icon: Sparkles, title: "Creativity & Sports", tone: "bg-gold text-forest-deep", text: "Arts, music, drama, sports, and clubs give students room to explore talents, build confidence, and work as a team." },
  ];
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-4 h-0.5 w-12 bg-gold" />
        <h2 className="text-center font-display text-5xl font-semibold text-forest">Our Approach</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">Holistic education that nurtures the mind, character, creativity, and spirit.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-stone bg-white p-8 shadow-sm">
              <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${item.tone}`}>
                <item.icon size={22} />
              </div>
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExtrasBlock() {
  const cards = [
    { img: "/img/online-learning.jpg", badge: "Grades 1 – 7", title: "Online Learning", text: "Flexible online lessons for families needing remote or blended education. Includes live instruction, digital resources, and progress tracking." },
    { img: "/img/holiday-camp.jpg", badge: "All Ages", title: "International Holiday Camps", text: "Specialized language camps and holiday programs promoting creativity, teamwork, and cross-cultural awareness during school breaks." },
    { img: "/img/arts-sports.jpg", badge: "All Levels", title: "Arts & Sports", text: "Arts, music, drama, and sports programs integrated into the curriculum to nurture talent, teamwork, and healthy confidence." },
  ];
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-4 h-0.5 w-12 bg-gold" />
        <h2 className="text-center font-display text-5xl font-semibold text-forest">Programs & Extras</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">Beyond the classroom — online learning, holiday camps, and co-curricular enrichment.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-3xl border border-stone bg-white shadow-sm">
              <div className="relative">
                <img src={c.img} alt="" className="aspect-[4/3] w-full object-cover" />
                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest">{c.badge}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const leaders = [
  {
    photo: "/img/director.jpg",
    name: "Director",
    role: "Director, Sewa Academy",
    title: "A message from the Director",
    text: "At Sewa Academy, we believe education should help every learner discover their strengths and prepare to contribute with confidence and compassion. We work alongside families to create an encouraging, values-led community where academic effort and personal growth go hand in hand.",
  },
  {
    photo: "/img/headteacher.jpg",
    name: "Headteacher",
    role: "Headteacher, Sewa Academy",
    title: "A message from the Headteacher",
    text: "Every day is an opportunity to learn, ask questions, and make progress. Our school community aims to give learners a strong foundation, clear guidance, and a caring place to grow from Play Group through Junior Secondary.",
  },
  {
    photo: "/img/teacher.jpg",
    name: "Our teachers",
    role: "Teacher, Sewa Academy",
    title: "A message from our teachers",
    text: "In the classroom, we want each learner to feel seen, supported, and confident to try. We encourage curiosity, creativity, kindness, and perseverance so students can learn from one another and take pride in every step forward.",
  },
];

export function MessagesBlock({ withPhotos = true }: { withPhotos?: boolean }) {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 h-0.5 w-12 bg-gold" />
        <h2 className="font-display text-5xl font-semibold text-forest">Messages from Our Team</h2>
        <p className="mt-3 max-w-xl text-ink-muted">A warm welcome from the people who guide, teach, and support our learners every day.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {leaders.map((m, idx) => (
            <article key={m.title}>
              {withPhotos && (
                <img src={m.photo} alt={`Portrait of the ${m.name.toLowerCase()}`} className="mb-5 aspect-[3/4] w-full rounded-3xl object-cover" />
              )}
              <p className="text-xs font-semibold tracking-[0.18em] text-gold">MESSAGE 0{idx + 1}</p>
              <div className="my-3 h-px bg-gold/50" />
              <h3 className="font-display text-2xl text-forest">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{m.text}</p>
              <p className="mt-4 text-sm font-semibold text-ink">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: "/img/hero-school.jpg", cap: "School grounds" },
  { src: "/img/classroom.jpg", cap: "Classrooms" },
  { src: "/img/students.jpg", cap: "Learners together" },
  { src: "/img/arts-sports.jpg", cap: "Arts & creativity" },
  { src: "/img/online-learning.jpg", cap: "Online learning" },
  { src: "/img/holiday-camp.jpg", cap: "Holiday camp" },
];

export function GalleryBlock() {
  return (
    <section className="bg-forest-deep px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-gold">MOMENTS</p>
        <h2 className="font-display text-5xl">Gallery</h2>
        <p className="mt-3 text-white/75">Life at Sewa Academy — classrooms, play, creativity, and community.</p>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-2xl">
              <img src={g.src} alt={g.cap} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="bg-forest px-4 py-3 text-sm">{g.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
