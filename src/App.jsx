import { useState } from 'react';
import image from "./assets/image.png";
// Certificate database
const certificateDatabase = {
  cert_3mh: {
    tag: "Experience Certificate",
    title: "3MH Contracting Experience Certificate",
    image: "/assets/images/cert_3mh_contracting.jpg",
    issuer: "3MH Contracting for General Contracting",
    date: "Sept 2025",
    translation: (
      <>
        <strong>Company:</strong> 3MH Contracting, KSA<br />
        <strong>Recipient:</strong> Engineer / Mohamed Abdelwhab Mohamed Ibrahim<br />
        <strong>Role:</strong> Site Engineer (Civil/Finishing)<br />
        <strong>Projects Under Supervision:</strong><br />
        • <strong>Roshan Alaros Project</strong> in Jeddah (Finishing works)<br />
        • <strong>Jabal Omar Development Project</strong> in Makkah (Finishing & Electrical works)<br />
        <strong>Certificate Verification:</strong> The company certifies that the engineer worked with them up to September 15, 2025. During his tenure, he demonstrated exceptional competence, responsibility, professional conduct, and successfully delivered tasks assigned to him.<br />
        <strong>Authorized Signatory:</strong> Engineer / Hany Soliman (CEO)
      </>
    )
  },
  cert_al_raeda: {
    tag: "Experience Certificate",
    title: "Al-Raeda Developments Site Experience",
    image: "/assets/images/cert_al_raeda.jpg",
    issuer: "Al-Raeda Developments for Construction",
    date: "Sept 2023 - March 2025",
    translation: (
      <>
        <strong>Company:</strong> Al-Raeda Developments for Construction, Egypt<br />
        <strong>Recipient:</strong> Engineer / Mohamed Abdelwhab Mohamed<br />
        <strong>Role:</strong> Civil Site & Finishing Engineer<br />
        <strong>Project:</strong> New Ismailia Project (Finishing works)<br />
        <strong>Employment Period:</strong> September 1, 2023, to March 30, 2025<br />
        <strong>Certificate Verification:</strong> Al-Raeda Developments certifies that Eng. Mohamed worked with them for over 1.5 years. He performed all tasks with competence, dedication, good conduct, and high efficiency.<br />
        <strong>Authorized Signatories:</strong> Project Manager & Company Director
      </>
    )
  },
  cert_ecb: {
    tag: "Training Certificate",
    title: "Engineering Consulting Bureau (ECB) Training",
    image: "/assets/images/cert_ecb_consulting.jpg",
    issuer: "ECB (Engineering Consulting Bureau) - House of Expertise",
    date: "July 2022",
    translation: (
      <>
        <strong>Consulting Firm:</strong> Engineering Consulting Bureau (ECB), Egypt<br />
        <strong>Trainee:</strong> Student / Mohamed Abdelwhab Mohamed (3rd Year Civil Engineering, Higher Institute of Engineering in Belbeis)<br />
        <strong>Training Project:</strong> Al-Shams Club Malls Project (Consultant Supervision)<br />
        <strong>Training Period:</strong> July 2, 2022, to July 31, 2022<br />
        <strong>Certificate Verification:</strong> ECB certifies that the student successfully completed his summer field training under consulting supervision, exhibiting dedication and grasping technical supervision guidelines.<br />
        <strong>Authorized Signatory:</strong> Dr. Consultant / Ayman El-Hadary (Executive Director)
      </>
    )
  },
  cert_argynza: {
    tag: "Training Certificate",
    title: "ARGYNZA Constructions Training Course",
    image: "/assets/images/cert_argynza.jpg",
    issuer: "ARGYNZA for Constructions Company",
    date: "July - August 2022",
    translation: (
      <>
        <strong>Contracting Company:</strong> ARGYNZA for Constructions, Egypt<br />
        <strong>Trainee:</strong> Mohamed Abdel Wahab Mohamed Ibrahim<br />
        <strong>Course Details:</strong> Constructions Training Course (Engineering Department)<br />
        <strong>Training Location:</strong> Al-Shams Club project site<br />
        <strong>Training Period:</strong> July 1, 2022, to August 10, 2022 (Approx. 6 weeks)<br />
        <strong>Certificate Verification:</strong> Certified completion of core structural construction details, on-site supervision routines, reinforcement guidelines, and formwork execution.<br />
        <strong>Authorized Signatory:</strong> Eng. Essayed Towfeek (CEO)
      </>
    )
  },
  cert_autocad: {
    tag: "Technical Certification",
    title: "Autodesk AutoCAD 2D Professional Course",
    image: "/assets/images/cert_autocad_elzohairy.jpg",
    issuer: "El-Zohairy Academy (Certified Training Center)",
    date: "2023",
    translation: (
      <>
        <strong>Academy:</strong> El-Zohairy Academy for Training & Consulting<br />
        <strong>Recipient:</strong> Mohamed Abdelwhab Mohamed Eldarwy<br />
        <strong>Course Title:</strong> AutoCAD 2D (Version 2023)<br />
        <strong>Course Duration:</strong> 24 Study Hours (from August 20, 2023, to September 14, 2023)<br />
        <strong>Grade Achieved:</strong> Excellent (Excellent Grade)<br />
        <strong>Instructors:</strong> Eng. Mahmoud Badawy & Eng. Ahmed Abd Elsalam (Manager)
      </>
    )
  }
};

function App() {
  // Navigation & Modals state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCertKey, setSelectedCertKey] = useState(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  // Form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');
    // Simulate API Submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormStatus('idle');
  };

  const openCertModal = (certKey) => {
    setSelectedCertKey(certKey);
    document.body.style.overflow = 'hidden';
  };

  const closeCertModal = () => {
    setSelectedCertKey(null);
    document.body.style.overflow = '';
  };

  const openCvModal = () => {
    setCvModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCvModal = () => {
    setCvModalOpen(false);
    document.body.style.overflow = '';
  };

  const activeCert = selectedCertKey ? certificateDatabase[selectedCertKey] : null;

  return (
    <div className="bg-engineer-bgLight text-slate-800 antialiased selection:bg-engineer-travertine selection:text-engineer-navy min-h-screen flex flex-col justify-between">
      
      {/* ==================== NAVIGATION ==================== */}
      <header class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center space-x-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-engineer-navy text-white shadow-md">
              <i className="fa-solid fa-compass-drafting text-lg"></i>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-engineer-navy">
              M.Abdelwhab
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden space-x-8 md:flex">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-engineer-navy transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-engineer-navy transition-colors">Expertise</a>
            <a href="#experience" className="text-sm font-medium text-slate-600 hover:text-engineer-navy transition-colors">Projects</a>
            <a href="#education" className="text-sm font-medium text-slate-600 hover:text-engineer-navy transition-colors">Education</a>
            <a href="#certificates" className="text-sm font-medium text-slate-600 hover:text-engineer-navy transition-colors">Certificates</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-engineer-navy transition-colors">Contact</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <a href="/assets/docs/Civil_Eng_Mohamed_CV.pdf" download className="inline-flex items-center justify-center rounded-lg bg-engineer-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-engineer-steel hover:shadow transition-all duration-200">
              <i className="fa-solid fa-file-arrow-down mr-2"></i> Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 md:hidden hover:bg-slate-50 transition-colors" 
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-engineer-navy transition-colors">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-engineer-navy transition-colors">Expertise</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-engineer-navy transition-colors">Projects</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-engineer-navy transition-colors">Education</a>
              <a href="#certificates" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-engineer-navy transition-colors">Certificates</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium hover:text-engineer-navy transition-colors">Contact</a>
              <a href="/assets/docs/Civil_Eng_Mohamed_CV.pdf" download className="inline-flex items-center justify-center rounded-lg bg-engineer-navy py-3 text-sm font-semibold text-white shadow-sm">
                <i class="fa-solid fa-file-arrow-down mr-2"></i> Download CV
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ==================== HERO SECTION ==================== */}
        <section id="about" className="relative overflow-hidden bg-white py-16 md:py-24 blueprint-grid">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none drafting-line"></div>
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Text Content */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-engineer-steel uppercase mb-6 border border-slate-200">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for On-Site Roles</span>
                </div>

                <h1 className="font-display text-4xl font-extrabold tracking-tight text-engineer-navy sm:text-5xl lg:text-6xl mb-4 leading-tight">
                  Mohamed Abdelwhab
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-engineer-travertine mt-2">
                    Civil Site & Finishing Engineer
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-flex items-center text-sm text-slate-600">
                    <i className="fa-solid fa-location-dot text-engineer-travertine mr-2 text-base"></i>
                    Makkah, Saudi Arabia (Transferable Iqama)
                  </span>
                  <span className="inline-flex items-center text-sm text-slate-600">
                    <i className="fa-solid fa-graduation-cap text-engineer-travertine mr-2 text-base"></i>
                    B.Sc. Civil Engineering
                  </span>
                </div>

                <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
                  A results-driven Civil Engineering graduate with a solid academic record and proven on-site experience. Specialized in site supervision, material control, and executing high-end finishing and concrete works for large-scale infrastructure and residential projects. Equipped with certified AutoCAD expertise and practical project management skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-engineer-navy px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-engineer-steel transition-all duration-200 hover:-translate-y-0.5">
                    <i className="fa-regular fa-paper-plane mr-2"></i> Contact Me
                  </a>
                  <a href="/assets/docs/Civil_Eng_Mohamed_CV.pdf" download className="inline-flex items-center justify-center rounded-lg border-2 border-engineer-navy/10 bg-white px-6 py-3.5 text-base font-semibold text-engineer-navy hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5 hover:border-engineer-navy/30">
                    <i className="fa-solid fa-file-arrow-down mr-2 text-engineer-travertine"></i> Download Resume (PDF)
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 mb-10 flex justify-center lg:justify-end">
                  <div className="relative z-10 max-w-max overflow-hidden rounded-[36px] border border-slate-200 bg-white p-5 shadow-[0_32px_80px_-40px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1">
                    <img
                      src={image}
                      alt="Portfolio image"
                      className="h-72 w-72 rounded-[28px] object-cover shadow-2xl"
                    />
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* ==================== KEY STATS BANNER ==================== */}
        <section className="border-y border-slate-200 bg-slate-50 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 text-center divide-x-0 md:divide-x divide-slate-200">
              <div className="px-4">
                <p className="font-display text-3xl font-extrabold text-engineer-navy">3MH</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Contracting Site Exp</p>
              </div>
              <div className="px-4">
                <p className="font-display text-3xl font-extrabold text-engineer-navy">Makkah</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Jabal Omar Project</p>
              </div>
              <div className="px-4">
                <p className="font-display text-3xl font-extrabold text-engineer-navy">Excellent</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Graduation Project Grade</p>
              </div>
              <div className="px-4">
                <p className="font-display text-3xl font-extrabold text-engineer-navy">AutoCAD</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">2D Certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CORE EXPERTISE & SKILLS ==================== */}
        <section id="skills" className="py-20 bg-engineer-bgLight">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-engineer-navy sm:text-4xl">
                Core Expertise & Engineering Skills
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-engineer-travertine rounded"></div>
              <p className="mt-4 text-slate-600">
                Combining deep technical proficiency in structural execution and high-end finishing with essential project leadership abilities.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              
              {/* Technical Skills Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-engineer-navy/10 text-engineer-navy">
                    <i className="fa-solid fa-helmet-safety text-xl"></i>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-engineer-navy">Technical & Site Skills</h3>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 mb-1">
                      <span>Site Supervision & Quality Assurance</span>
                      <span className="text-engineer-steel">Expert</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-engineer-navy" style={{ width: '95%' }}></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Directing concrete pouring, site layouts, inspections, safety compliance.</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 mb-1">
                      <span>Finishing Works (Interior & Exterior)</span>
                      <span className="text-engineer-steel">Expert</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-engineer-navy" style={{ width: '95%' }}></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Supervising plastering, paint, marble/tiles, cladding, partitioning, lighting.</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 mb-1">
                      <span>Concrete & Structural Works</span>
                      <span className="text-engineer-steel">Advanced</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-engineer-navy" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Managing reinforcement, formwork checklist, foundations, concrete curing.</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 mb-1">
                      <span>Material Control & Costing</span>
                      <span className="text-engineer-steel">Advanced</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-engineer-navy" style={{ width: '88%' }}></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Quantity surveying, material submittals, testing, waste reduction.</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 mb-1">
                      <span>Autodesk AutoCAD</span>
                      <span className="text-engineer-steel">Certified / Excellent</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-engineer-navy" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Reading drawings, executing shop drawings, correcting dimensional errors.</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">Project Planning</span>
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">MS Office (Word/Excel)</span>
                    <span className="rounded bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">Electrical Co-ordination</span>
                  </div>
                </div>
              </div>

              {/* Soft Skills Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-engineer-travertine/10 text-engineer-travertine">
                    <i className="fa-solid fa-users-gear text-xl"></i>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-engineer-navy">Management & Soft Skills</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-engineer-softbeige text-engineer-travertine">
                      <i className="fa-solid fa-user-group text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-700">Leadership & Site Management</h4>
                      <p className="text-sm text-slate-500 mt-1">Proven ability to lead subcontractor crews, direct site technicians, and manage daily manpower allocations on major projects.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-engineer-softbeige text-engineer-travertine">
                      <i className="fa-solid fa-brain text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-700">Strategic Thinking & Problem Solving</h4>
                      <p class="text-sm text-slate-500 mt-1">Resolving unexpected layout conflicts, correcting architectural mismatch on site, and optimising execution schedules.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-engineer-softbeige text-engineer-travertine">
                      <i className="fa-solid fa-comments text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-700">Communication & Subcontractor Management</h4>
                      <p className="text-sm text-slate-500 mt-1">Liaising between consultants, site managers, and suppliers to ensure all shop drawings and materials comply with quality standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-engineer-softbeige text-engineer-travertine">
                      <i className="fa-solid fa-people-carry-box text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-700">Teamwork & Co-ordination</h4>
                      <p className="text-sm text-slate-500 mt-1">Coordinating architectural, concrete structures, and MEP networks concurrently to eliminate rework during site handover.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== PROJECT EXPERIENCE (TIMELINE) ==================== */}
        <section id="experience" class="py-20 bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-engineer-navy sm:text-4xl">
                On-Site Projects & Experience
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-engineer-travertine rounded"></div>
              <p className="mt-4 text-slate-600">
                A track record of supervising construction, high-end finishing, and engineering coordination on major structural developments.
              </p>
            </div>

            {/* Timeline Component */}
            <div className="relative mx-auto max-w-4xl before:absolute before:bottom-0 before:top-4 before:left-4 before:w-0.5 before:bg-slate-200 md:before:left-1/2 md:before:-ml-0.5">
              
              {/* Timeline Item 1 */}
              <div className="relative mb-12 md:mb-16">
                <div className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-engineer-navy text-white shadow-md md:left-1/2">
                  <i className="fa-solid fa-building text-xs"></i>
                </div>
                <div className="pl-12 md:w-1/2 md:pl-0 md:pr-12 md:text-right group">
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm group-hover:shadow-md transition-shadow group-hover:border-slate-300">
                    <span className="inline-block rounded-full bg-engineer-softbeige px-3 py-1 text-xs font-bold text-engineer-travertine mb-3">
                      Up to Sep 2025 (3MH Contracting)
                    </span>
                    <h3 className="font-display text-xl font-bold text-engineer-navy">Jabal Omar Development Project</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-4">Location: Makkah, Saudi Arabia</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Served as Site Engineer under 3MH Contracting. Supervised high-end interior finishing works, coordinate electrical layouts, drywall installations, tiling, ceiling decorations, and MEP integration in luxury residential/hotel towers.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Finishing Works</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Electrical Coordination</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Site Supervision</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative mb-12 md:mb-16">
                <div className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-engineer-navy text-white shadow-md md:left-1/2">
                  <i className="fa-solid fa-house-laptop text-xs"></i>
                </div>
                <div className="pl-12 md:w-1/2 md:ml-auto md:pl-12 md:text-left group">
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm group-hover:shadow-md transition-shadow group-hover:border-slate-300">
                    <span className="inline-block rounded-full bg-engineer-softbeige px-3 py-1 text-xs font-bold text-engineer-travertine mb-3">
                      3MH Contracting
                    </span>
                    <h3 className="font-display text-xl font-bold text-engineer-navy">Roshan Alaros Project</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-4">Location: Jeddah, Saudi Arabia</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Assigned as Site Engineer directing residential finishing works. Supervised high-quality masonry, plastering, internal wall painting, luxury flooring, and marble cladding works in compliance with Roshan project specifications.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Finishing Works</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Quality Inspection</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Residential Execution</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative mb-12 md:mb-16">
                <div className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-engineer-navy text-white shadow-md md:left-1/2">
                  <i className="fa-solid fa-city text-xs"></i>
                </div>
                <div className="pl-12 md:w-1/2 md:pl-0 md:pr-12 md:text-right group">
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm group-hover:shadow-md transition-shadow group-hover:border-slate-300">
                    <span className="inline-block rounded-full bg-engineer-softbeige px-3 py-1 text-xs font-bold text-engineer-travertine mb-3">
                      Sep 2023 – Mar 2025 (Al-Raeda Developments)
                    </span>
                    <h3 className="font-display text-xl font-bold text-engineer-navy">New Ismailia Project</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-4">Location: New Ismailia, Egypt</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Worked as Civil Site & Finishing Engineer with Al-Raeda Developments. Supervised concrete casting checklists, brickwork, facade plastering, insulation materials installation, and finishing works on major multi-family housing complexes.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Facade Finishing</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Concrete Casting</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Material Control</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative mb-12 md:mb-16">
                <div className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-engineer-navy text-white shadow-md md:left-1/2">
                  <i className="fa-solid fa-compass-drafting text-xs"></i>
                </div>
                <div className="pl-12 md:w-1/2 md:ml-auto md:pl-12 md:text-left group">
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm group-hover:shadow-md transition-shadow group-hover:border-slate-300">
                    <span className="inline-block rounded-full bg-engineer-softbeige px-3 py-1 text-xs font-bold text-engineer-travertine mb-3">
                      O Innovation Interior Design
                    </span>
                    <h3 className="font-display text-xl font-bold text-engineer-navy">Villa Finishing Project</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-4">Location: Residential Sites</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Finishing Site Engineer with O Innovation for Decoration Interior and Construction. Executed high-end custom interior designs, gypsum ceiling panels, architectural lighting plans, luxury wood wall panelling, and high-spec paint finishings.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Luxury Interior Decoration</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Gypsum Work</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Fit-out Supervision</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="relative">
                <div className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-engineer-navy text-white shadow-md md:left-1/2">
                  <i className="fa-solid fa-graduation-cap text-xs"></i>
                </div>
                <div className="pl-12 md:w-1/2 md:pl-0 md:pr-12 md:text-right group">
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm group-hover:shadow-md transition-shadow group-hover:border-slate-300">
                    <span className="inline-block rounded-full bg-engineer-softbeige px-3 py-1 text-xs font-bold text-engineer-travertine mb-3">
                      Jul 2022 – Aug 2022 (Training)
                    </span>
                    <h3 className="font-display text-xl font-bold text-engineer-navy">Al-Shams Club Mall Project</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-4">Training with Arginza & ECB</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Completed professional on-site training under Engineering Consulting Bureau (ECB) and Arginza for Construction. Studied blueprint layouts, commercial mall building frame structures, column reinforcing details, and site measurement techniques.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Commercial Structures</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Consulting Observation</span>
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium">Structural Concrete</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== EDUCATION & CREDENTIALS ==================== */}
        <section id="education" className="py-20 bg-engineer-bgLight">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-engineer-navy sm:text-4xl">
                Education & Credentials
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-engineer-travertine rounded"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              
              {/* Education Card */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute right-6 top-6 opacity-10 text-6xl text-engineer-navy pointer-events-none">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <span className="inline-block rounded bg-engineer-navy/10 px-2.5 py-1 text-xs font-bold text-engineer-navy mb-4">
                  Bachelor’s Degree
                </span>
                <h3 className="font-display text-2xl font-bold text-engineer-navy mb-2">Bachelor of Science in Civil Engineering</h3>
                <p className="text-lg font-semibold text-slate-700">Higher Institute of Engineering in Belbeis (BHIE)</p>
                <p className="text-sm text-slate-500 mt-1">Study Period: August 2018 – May 2023</p>
                
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">Cumulative Grade:</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 border border-emerald-200">Good</span>
                  </div>
                </div>
              </div>

              {/* Graduation Project Card */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute right-6 top-6 opacity-10 text-6xl text-engineer-travertine pointer-events-none">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
                <span className="inline-block rounded bg-engineer-softbeige px-2.5 py-1 text-xs font-bold text-engineer-travertine mb-4">
                  Graduation Thesis
                </span>
                <h3 className="font-display text-2xl font-bold text-engineer-navy mb-2">Graduation Project: "Material Project"</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Detailed engineering thesis evaluating construction concrete raw materials, testing material strengths, concrete mix ratios, curing properties, and high-performance finishing material specifications.
                </p>
                
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">Graduation Grade:</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 border border-emerald-200">Excellent</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== VERIFIED EXPERIENCE CERTIFICATES ==================== */}
        <section id="certificates" className="py-20 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-engineer-navy sm:text-4xl">
                Verified Experience & Training Certificates
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-engineer-travertine rounded"></div>
              <p className="mt-4 text-slate-600">
                Click on any certificate to view the original scan and translation details.
              </p>
            </div>

            {/* Certificate Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Card 1 (3MH) */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => openCertModal('cert_3mh')}>
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img src="/assets/images/cert_3mh_contracting.jpg" alt="3MH Experience Certificate" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded bg-engineer-navy/10 px-2 py-0.5 text-xs font-semibold text-engineer-navy mb-2">Experience Certificate</span>
                  <h3 className="font-display font-bold text-slate-800 line-clamp-1 group-hover:text-engineer-navy transition-colors">3MH Contracting</h3>
                  <p className="text-xs text-slate-500 mt-1">Jabal Omar & Roshan Alaros Projects</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-engineer-travertine">
                    <span>View Scan & Translation</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Card 2 (Al-Raeda) */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => openCertModal('cert_al_raeda')}>
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img src="/assets/images/cert_al_raeda.jpg" alt="Al-Raeda Experience Certificate" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded bg-engineer-navy/10 px-2 py-0.5 text-xs font-semibold text-engineer-navy mb-2">Experience Certificate</span>
                  <h3 class="font-display font-bold text-slate-800 line-clamp-1 group-hover:text-engineer-navy transition-colors">Al-Raeda Developments</h3>
                  <p className="text-xs text-slate-500 mt-1">New Ismailia Project (2023 - 2025)</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-engineer-travertine">
                    <span>View Scan & Translation</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Card 3 (ECB) */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => openCertModal('cert_ecb')}>
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img src="/assets/images/cert_ecb_consulting.jpg" alt="ECB Training Certificate" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded bg-engineer-softbeige px-2 py-0.5 text-xs font-semibold text-engineer-travertine mb-2">Training Certificate</span>
                  <h3 className="font-display font-bold text-slate-800 line-clamp-1 group-hover:text-engineer-navy transition-colors">ECB Bureau</h3>
                  <p className="text-xs text-slate-500 mt-1">Engineering Consulting Bureau (Jul 2022)</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-engineer-travertine">
                    <span>View Scan & Translation</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Card 4 (Argynza) */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => openCertModal('cert_argynza')}>
                <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img src="/assets/images/cert_argynza.jpg" alt="Argynza Training Certificate" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded bg-engineer-softbeige px-2 py-0.5 text-xs font-semibold text-engineer-travertine mb-2">Training Certificate</span>
                  <h3 className="font-display font-bold text-slate-800 line-clamp-1 group-hover:text-engineer-navy transition-colors">ARGYNZA for Constructions</h3>
                  <p className="text-xs text-slate-500 mt-1">Al-Shams Club Mall Project Training</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-engineer-travertine">
                    <span>View Scan & Summary</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* Card 5 (AutoCAD) */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => openCertModal('cert_autocad')}>
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img src="/assets/images/cert_autocad_elzohairy.jpg" alt="AutoCAD 2D Certificate" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded bg-engineer-navy/10 px-2 py-0.5 text-xs font-semibold text-engineer-navy mb-2">Technical Certification</span>
                  <h3 className="font-display font-bold text-slate-800 line-clamp-1 group-hover:text-engineer-navy transition-colors">AutoCAD 2D Certification</h3>
                  <p className="text-xs text-slate-500 mt-1">El-Zohairy Academy | Grade: Excellent</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-engineer-travertine">
                    <span>View Certificate Details</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== CONTACT SECTION & FORM ==================== */}
        <section id="contact" className="py-20 bg-engineer-bgLight border-t border-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none drafting-line"></div>
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-12">
              
              {/* Contact Info */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-engineer-navy sm:text-4xl">
                    Let's Discuss Your Next Project
                  </h2>
                  <div className="h-1 w-12 bg-engineer-travertine rounded mt-4 mb-6"></div>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Available for site supervisor, finishing engineer, or civil design roles in Makkah, Jeddah, or other locations in Saudi Arabia. Possess a transferable Iqama for immediate hiring.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-engineer-navy border border-slate-200 shadow-sm">
                        <i className="fa-regular fa-envelope text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email Address</p>
                        <a href="mailto:Ma2794002@gmail.com" className="text-base font-bold text-engineer-navy hover:text-engineer-steel">Ma2794002@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-engineer-navy border border-slate-200 shadow-sm">
                        <i className="fa-solid fa-phone text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Phone & WhatsApp</p>
                        <a href="tel:+966561706025" class="text-base font-bold text-engineer-navy hover:text-engineer-steel">+966 56 170 6025</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-engineer-navy border border-slate-200 shadow-sm">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Current Location</p>
                        <p className="text-base font-bold text-engineer-navy">Makkah, Kingdom of Saudi Arabia</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 hidden lg:block">
                  <span className="text-xs font-medium text-slate-500">Mohamed Abdelwhab Mohamed &copy; 2026. All Rights Reserved.</span>
                </div>
              </div>

              {/* Form panel */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  
                  {formStatus !== 'success' ? (
                    <>
                      <h3 className="font-display text-xl font-bold text-engineer-navy mb-6">Send Me a Message</h3>
                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Your Name</label>
                            <input 
                              type="text" 
                              id="name" 
                              required 
                              value={formData.name}
                              onChange={(e) => handleInputChange(e, 'name')}
                              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-engineer-navy focus:bg-white focus:outline-none transition-colors" 
                              placeholder="e.g. John Doe"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Email Address</label>
                            <input 
                              type="email" 
                              id="email" 
                              required 
                              value={formData.email}
                              onChange={(e) => handleInputChange(e, 'email')}
                              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-engineer-navy focus:bg-white focus:outline-none transition-colors" 
                              placeholder="e.g. john@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Subject</label>
                          <input 
                            type="text" 
                            id="subject" 
                            value={formData.subject}
                            onChange={(e) => handleInputChange(e, 'subject')}
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-engineer-navy focus:bg-white focus:outline-none transition-colors" 
                            placeholder="e.g. Site Engineer Job Opportunity"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Message</label>
                          <textarea 
                            id="message" 
                            rows="5" 
                            required 
                            value={formData.message}
                            onChange={(e) => handleInputChange(e, 'message')}
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-engineer-navy focus:bg-white focus:outline-none transition-colors" 
                            placeholder="Write your message here..."
                          ></textarea>
                        </div>

                        {formStatus === 'error' && (
                          <div className="rounded-lg bg-red-50 p-4 text-sm font-semibold text-red-600 border border-red-200">
                            <i className="fa-solid fa-circle-exclamation mr-2"></i> Please fill out all required fields correctly.
                          </div>
                        )}

                        <button 
                          type="submit" 
                          disabled={formStatus === 'sending'}
                          className="w-full inline-flex items-center justify-center rounded-lg bg-engineer-navy px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-engineer-steel hover:shadow transition-all duration-200 disabled:opacity-75"
                        >
                          {formStatus === 'sending' ? (
                            <>
                              <i className="fa-solid fa-spinner animate-spin mr-2"></i> Sending...
                            </>
                          ) : (
                            <>
                              <i className="fa-solid fa-paper-plane mr-2"></i> Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 border border-emerald-200">
                        <i className="fa-solid fa-check text-2xl"></i>
                      </div>
                      <h4 className="font-display text-xl font-bold text-engineer-navy">Message Sent Successfully!</h4>
                      <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                        Thank you for reaching out. Mohamed Abdelwhab will reply to your email as soon as possible.
                      </p>
                      <button onClick={resetForm} className="mt-6 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                        Send another message
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-200 text-center lg:hidden">
              <span className="text-xs font-medium text-slate-500">Mohamed Abdelwhab Mohamed &copy; 2026. All Rights Reserved.</span>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== CERTIFICATE LIGHTBOX MODAL ==================== */}
      {activeCert && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row md:h-[85vh]">
            <button 
              onClick={closeCertModal}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors" 
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            <div className="w-full md:w-3/5 bg-slate-100 p-6 flex items-center justify-center overflow-auto h-[40vh] md:h-full border-b md:border-b-0 md:border-r border-slate-200">
              <img src={activeCert.image} alt={activeCert.title} className="max-w-full max-h-full object-contain rounded shadow-md" />
            </div>

            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto h-[50vh] md:h-full">
              <div>
                <span className="inline-block rounded bg-engineer-travertine/10 px-2 py-1 text-xs font-bold text-engineer-travertine mb-3">
                  {activeCert.tag}
                </span>
                <h3 className="font-display text-2xl font-extrabold text-engineer-navy leading-snug">
                  {activeCert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">Issued by: {activeCert.issuer} | Date: {activeCert.date}</p>
                
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Verified English Translation & Details
                  </h4>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 leading-relaxed space-y-2.5">
                    {activeCert.translation}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                <a href={activeCert.image} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  <i className="fa-solid fa-up-right-from-square mr-2"></i> Open Original Image
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CV FULLSCREEN VIEW MODAL ==================== */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/90 backdrop-blur-sm p-4 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 p-2 flex flex-col h-[90vh]">
            <button 
              onClick={closeCvModal}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
            <div className="flex-1 overflow-y-auto p-4 flex justify-center items-start">
              <img src="/assets/images/cv_preview.jpg" alt="Mohamed Abdelwhab Full Resume" className="max-w-full h-auto rounded shadow-sm" />
            </div>
            <div className="p-4 border-t border-slate-100 flex gap-4 bg-slate-50">
              <a href="/assets/docs/Civil_Eng_Mohamed_CV.pdf" download className="flex-1 inline-flex items-center justify-center rounded-lg bg-engineer-navy py-3 text-sm font-semibold text-white shadow-sm hover:bg-engineer-steel">
                <i className="fa-solid fa-file-arrow-down mr-2"></i> Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
