      // ── Reveal on scroll ──
      const reveals = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e, i) => {
            if (e.isIntersecting) {
              e.target.style.transitionDelay = (i % 4) * 0.1 + "s";
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      reveals.forEach((el) => observer.observe(el));

      // ── Active nav link ──
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-links a");
      window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((s) => {
          if (window.scrollY >= s.offsetTop - 100) current = s.id;
        });
        navLinks.forEach((a) => {
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + current,
          );
        });
      });

      // ── Portfolio filter ──
      function filterPortfolio(btn, cat) {
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".portfolio-card").forEach((card) => {
          const show = cat === "all" || card.dataset.cat === cat;
          card.style.display = show ? "" : "none";
        });
      }

      // ── Contact form ──
      function handleSubmit(e) {
        e.preventDefault();
        const btn = e.target.querySelector(".btn-send");
        btn.textContent = "Message Sent! ✓";
        btn.style.background = "#4cff91";
        btn.style.color = "#0a1fa8";
        setTimeout(() => {
          btn.textContent = "Send Message →";
          btn.style.background = "";
          btn.style.color = "";
          e.target.reset();
        }, 3000);
      }

      function openCaseStudy() {
        const modal = document.getElementById("caseStudyModal");
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      }
      function closeCaseStudy() {
        document.getElementById("caseStudyModal").style.display = "none";
        document.body.style.overflow = "";
      }
      function openLivePreview() {
        const modal = document.getElementById("livePreviewModal");
        modal.style.display = "flex";
        document.getElementById("reddingtonFrame").srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reddington Hospital – Quality Healthcare You Can Trust</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --red: #c0392b;
    --red-dark: #a93226;
    --red-light: #e74c3c;
    --blue: #1a5276;
    --blue-mid: #2471a3;
    --blue-light: #d6eaf8;
    --sky: #aed6f1;
    --white: #ffffff;
    --off-white: #f8fafc;
    --text: #1c2833;
    --muted: #5d6d7e;
    --border: #d5e8f0;
    --tag-bg: #e8f4fd;
    --tag-border: #aed6f1;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 64px;
    box-shadow: 0 2px 12px rgba(26,82,118,0.08);
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .nav-logo-icon {
    width: 38px; height: 38px;
    background: var(--red);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: white;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.5px;
    flex-shrink: 0;
  }

  .nav-logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--red);
    line-height: 1.1;
  }

  .nav-logo-text span {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 400;
    color: var(--muted);
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
  }

  .nav-links a {
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-links a:hover { color: var(--red); }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 22px;
    border-radius: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    border: none;
    letter-spacing: 0.2px;
  }

  .btn-outline {
    background: transparent;
    border: 1.5px solid var(--blue-mid);
    color: var(--blue-mid);
  }
  .btn-outline:hover {
    background: var(--blue-mid);
    color: white;
  }

  .btn-primary {
    background: var(--red);
    color: white;
  }
  .btn-primary:hover {
    background: var(--red-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(192,57,43,0.35);
  }

  .btn-emergency {
    background: var(--red);
    color: white;
    padding: 12px 28px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  .btn-emergency:hover {
    background: var(--red-dark);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(192,57,43,0.4);
  }

  .btn-blue {
    background: var(--blue-mid);
    color: white;
  }
  .btn-blue:hover {
    background: var(--blue);
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(36,113,163,0.35);
  }

  /* ── HERO ── */
  .hero {
    margin-top: 64px;
    position: relative;
    height: 500px;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, rgba(15,40,80,0.55) 0%, rgba(15,40,80,0.3) 60%, rgba(15,40,80,0.6) 100%),
      url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80') center/cover no-repeat;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    padding: 0 24px;
  }

  .hero-content h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    color: white;
    line-height: 1.15;
    margin-bottom: 14px;
    text-shadow: 0 2px 20px rgba(0,0,0,0.3);
    animation: fadeUp 0.8s ease both;
  }

  .hero-content p {
    font-size: 16px;
    color: rgba(255,255,255,0.88);
    max-width: 560px;
    margin-bottom: 28px;
    font-weight: 300;
    animation: fadeUp 0.8s 0.15s ease both;
  }

  .hero-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .btn-ghost {
    background: rgba(255,255,255,0.15);
    border: 1.5px solid rgba(255,255,255,0.6);
    color: white;
    backdrop-filter: blur(4px);
  }
  .btn-ghost:hover {
    background: rgba(255,255,255,0.25);
  }

  /* ── STATS BAR ── */
  .stats-bar {
    background: white;
    border-bottom: 1px solid var(--border);
    padding: 0;
    box-shadow: 0 4px 20px rgba(26,82,118,0.1);
  }

  .stats-inner {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 1100px;
    margin: 0 auto;
  }

  .stat-item {
    padding: 22px 16px;
    text-align: center;
    border-right: 1px solid var(--border);
    transition: background 0.2s;
  }

  .stat-item:last-child { border-right: none; }
  .stat-item:hover { background: var(--off-white); }

  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: var(--red);
    display: block;
  }

  .stat-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-top: 2px;
  }

  /* ── SPECIALIZATIONS ── */
  .section {
    padding: 72px 24px;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: var(--text);
    margin-bottom: 12px;
  }

  .section-subtitle {
    text-align: center;
    color: var(--muted);
    font-size: 15px;
    margin-bottom: 40px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-divider {
    width: 48px;
    height: 3px;
    background: var(--red);
    border-radius: 2px;
    margin: 12px auto 36px;
  }

  .specializations {
    background: var(--off-white);
  }

  .tags-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
  }

  .spec-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 20px;
    background: white;
    border: 1.5px solid var(--tag-border);
    border-radius: 50px;
    font-size: 12.5px;
    font-weight: 600;
    color: var(--blue);
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    box-shadow: 0 1px 4px rgba(26,82,118,0.06);
  }

  .spec-tag:hover {
    background: var(--blue-mid);
    border-color: var(--blue-mid);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(36,113,163,0.25);
  }

  .spec-tag .tag-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--red);
    flex-shrink: 0;
  }

  .spec-tag:hover .tag-dot {
    background: rgba(255,255,255,0.7);
  }

  /* ── SYMPTOM CHECKER ── */
  .symptom-section {
    background: linear-gradient(135deg, var(--blue-light) 0%, #e8f4fd 100%);
    padding: 64px 24px;
  }

  .symptom-card {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    padding: 48px;
    display: flex;
    align-items: center;
    gap: 48px;
    box-shadow: 0 8px 40px rgba(26,82,118,0.12);
  }

  .symptom-illustration {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, var(--blue-light), var(--sky));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
  }

  .symptom-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--text);
    margin-bottom: 10px;
  }

  .symptom-text p {
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 22px;
    line-height: 1.7;
    max-width: 460px;
  }

  /* ── BOOK APPOINTMENT ── */
  .appointment-section {
    background: white;
    padding: 72px 24px;
  }

  .appointment-form {
    max-width: 780px;
    margin: 0 auto;
    background: var(--off-white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 48px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-group.full {
    grid-column: 1 / -1;
  }

  .form-group label {
    font-size: 12.5px;
    font-weight: 600;
    color: var(--text);
    text-transform: uppercase;
    letter-spacing: 0.6px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--text);
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    appearance: none;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: var(--blue-mid);
    box-shadow: 0 0 0 3px rgba(36,113,163,0.1);
  }

  .form-group input::placeholder { color: #aab7c4; }

  .form-submit {
    text-align: center;
    margin-top: 8px;
  }

  .btn-submit {
    background: var(--red);
    color: white;
    padding: 14px 48px;
    font-size: 15px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    transition: all 0.2s;
    letter-spacing: 0.3px;
  }

  .btn-submit:hover {
    background: var(--red-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(192,57,43,0.35);
  }

  /* ── WHY CHOOSE US ── */
  .why-section {
    background: linear-gradient(135deg, #f0f8ff 0%, var(--blue-light) 100%);
    padding: 72px 24px;
  }

  .why-card {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 52px;
    display: flex;
    align-items: flex-start;
    gap: 48px;
    box-shadow: 0 8px 40px rgba(26,82,118,0.1);
  }

  .why-doctor {
    flex-shrink: 0;
    width: 130px;
    height: 130px;
    background: linear-gradient(135deg, var(--blue-light) 0%, var(--sky) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
  }

  .why-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--text);
    margin-bottom: 14px;
  }

  .why-text p {
    font-size: 15px;
    color: var(--muted);
    line-height: 1.75;
    margin-bottom: 24px;
  }

  .why-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-top: 16px;
  }

  .why-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--text);
  }

  .why-feature .check {
    width: 20px; height: 20px;
    background: var(--red);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 11px;
    flex-shrink: 0;
  }

  /* ── FOOTER ── */
  footer {
    background: var(--text);
    color: rgba(255,255,255,0.8);
    padding: 48px 24px 28px;
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-brand h3 {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: white;
    margin-bottom: 10px;
  }

  .footer-brand p {
    font-size: 13px;
    line-height: 1.7;
    margin-bottom: 20px;
    color: rgba(255,255,255,0.6);
  }

  .footer-col h4 {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--sky);
    margin-bottom: 14px;
  }

  .footer-col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .footer-col ul li a {
    font-size: 13px;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-col ul li a:hover { color: white; }

  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: rgba(255,255,255,0.4);
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    nav { padding: 0 16px; }
    .nav-links { display: none; }

    .hero { height: 420px; }

    .stats-inner {
      grid-template-columns: repeat(3, 1fr);
    }
    .stat-item:nth-child(4), .stat-item:nth-child(5) {
      border-right: none;
    }

    .symptom-card, .why-card {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 32px 24px;
      gap: 28px;
    }

    .form-grid { grid-template-columns: 1fr; }
    .appointment-form { padding: 28px 20px; }

    .footer-top { grid-template-columns: 1fr; gap: 28px; }
    .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }

    .why-features { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">
    <img src="data:image/png;base64,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" alt="Reddington Hospital Logo" style="height:38px;width:auto;">
    <div class="nav-logo-text">
      Reddington
      <span>Hospital</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="#specializations">Services</a></li>
    <li><a href="#appointment">Book Appointment</a></li>
    <li><a href="#why">About</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ul>
  <div class="nav-actions">
    <a href="tel:+2348000000000" class="btn btn-outline">Find a Doctor</a>
    <a href="#appointment" class="btn btn-primary">Book Appointment</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <h1>Quality Healthcare<br>You Can Trust</h1>
    <p>World-class medical care delivered with compassion. Our team of specialists is committed to your health and well-being.</p>
    <div class="hero-actions">
      <a href="#appointment" class="btn btn-emergency">Book Appointment</a>
      <a href="#specializations" class="btn btn-ghost btn-outline">Our Services</a>
    </div>
  </div>
</section>

<!-- STATS BAR -->
<div class="stats-bar">
  <div class="stats-inner">
    <div class="stat-item">
      <span class="stat-number">100%</span>
      <div class="stat-label">Quality</div>
    </div>
    <div class="stat-item">
      <span class="stat-number">50,000</span>
      <div class="stat-label">Patients a Year</div>
    </div>
    <div class="stat-item">
      <span class="stat-number">700+</span>
      <div class="stat-label">People Working</div>
    </div>
    <div class="stat-item">
      <span class="stat-number">14</span>
      <div class="stat-label">Years of Experience</div>
    </div>
    <div class="stat-item">
      <span class="stat-number">170,000+</span>
      <div class="stat-label">Happy Smiles</div>
    </div>
  </div>
</div>

<!-- SPECIALIZATIONS -->
<section class="section specializations" id="specializations">
  <div class="fade-in">
    <h2 class="section-title">Our Core Specialization</h2>
    <div class="section-divider"></div>
    <div class="tags-grid">
      <span class="spec-tag"><span class="tag-dot"></span>Interventional Cardiology</span>
      <span class="spec-tag"><span class="tag-dot"></span>Surgical Services</span>
      <span class="spec-tag"><span class="tag-dot"></span>Armoured Shield Medical Protection</span>
      <span class="spec-tag"><span class="tag-dot"></span>Interventional Cardiology</span>
      <span class="spec-tag"><span class="tag-dot"></span>Cardiology</span>
      <span class="spec-tag"><span class="tag-dot"></span>Endoscopy</span>
      <span class="spec-tag"><span class="tag-dot"></span>Davidson Specialist Surgery &amp; Critical Care</span>
      <span class="spec-tag"><span class="tag-dot"></span>Interventional Radiology</span>
      <span class="spec-tag"><span class="tag-dot"></span>Otorhinolaryngology</span>
      <span class="spec-tag"><span class="tag-dot"></span>Obstetrics &amp; Gynaecology</span>
      <span class="spec-tag"><span class="tag-dot"></span>General Paediatric Service</span>
    </div>
  </div>
</section>

<!-- SYMPTOM CHECKER -->
<section class="symptom-section">
  <div class="symptom-card fade-in">
    <div class="symptom-illustration">🩺</div>
    <div class="symptom-text">
      <h2>Symptom Checker</h2>
      <p>Clarify questions about your health: check symptoms, arrange doctor's appointments, order medication and much more. Our intelligent tool helps you make informed health decisions.</p>
      <a href="#" class="btn btn-blue">Discover More</a>
    </div>
  </div>
</section>

<!-- BOOK APPOINTMENT -->
<section class="appointment-section" id="appointment">
  <h2 class="section-title fade-in">Book Appointment</h2>
  <div class="section-divider"></div>
  <div class="appointment-form fade-in">
    <div class="form-grid">
      <div class="form-group">
        <label>First Name</label>
        <input type="text" placeholder="Enter first name">
      </div>
      <div class="form-group">
        <label>Department</label>
        <select>
          <option value="">Select Department</option>
          <option>Cardiology</option>
          <option>Surgical Services</option>
          <option>Obstetrics &amp; Gynaecology</option>
          <option>Paediatrics</option>
          <option>Endoscopy</option>
          <option>Radiology</option>
        </select>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" placeholder="Enter last name">
      </div>
      <div class="form-group">
        <label>Subspeciality</label>
        <input type="text" placeholder="Enter subspecialty">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date">
      </div>
      <div class="form-group">
        <label>Doctor</label>
        <select>
          <option value="">Select Doctor</option>
          <option>Dr. Adewale Ogundimu</option>
          <option>Dr. Chioma Nwosu</option>
          <option>Dr. Babatunde Lawal</option>
        </select>
      </div>
      <div class="form-group">
        <label>Time</label>
        <input type="time">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" placeholder="your@email.com">
      </div>
      <div class="form-group full">
        <label>Phone Number</label>
        <input type="tel" placeholder="+234 000 000 0000">
      </div>
    </div>
    <div class="form-submit">
      <button class="btn-submit" onclick="handleSubmit(event)">Make An Appointment</button>
    </div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section class="why-section" id="why">
  <div class="why-card fade-in">
    <div class="why-doctor">👨‍⚕️</div>
    <div class="why-text">
      <h2>Why Choose Our Hospital?</h2>
      <p>We combine modern facilities, experienced medical professionals, and patient-focused care to deliver safe, reliable healthcare in a comfortable environment. From diagnosis to recovery, we are with you every step of the way.</p>
      <div class="why-features">
        <div class="why-feature">
          <div class="check">✓</div>
          <span>State-of-the-art facilities</span>
        </div>
        <div class="why-feature">
          <div class="check">✓</div>
          <span>24/7 Emergency care</span>
        </div>
        <div class="why-feature">
          <div class="check">✓</div>
          <span>Specialist consultation</span>
        </div>
        <div class="why-feature">
          <div class="check">✓</div>
          <span>Patient-centred approach</span>
        </div>
        <div class="why-feature">
          <div class="check">✓</div>
          <span>Accredited laboratory</span>
        </div>
        <div class="why-feature">
          <div class="check">✓</div>
          <span>Transparent billing</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer id="contact">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <h3>Reddington Hospital</h3>
        <p>Delivering world-class healthcare with compassion and excellence. Your health is our highest priority.</p>
        <a href="tel:+2348000000000" class="btn btn-primary" style="font-size:13px; padding:10px 20px;">📞 Emergency Line</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Cardiology</a></li>
          <li><a href="#">Surgical Services</a></li>
          <li><a href="#">Obstetrics</a></li>
          <li><a href="#">Paediatrics</a></li>
          <li><a href="#">Radiology</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Hospital</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Doctors</a></li>
          <li><a href="#">News & Events</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Patient Portal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#">Lagos, Nigeria</a></li>
          <li><a href="#">+234 800 000 0000</a></li>
          <li><a href="#">info@reddington.com</a></li>
          <li><a href="#">Book Online</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2024 Reddington Hospital. All rights reserved.</div>
      <div>Privacy Policy · Terms of Use · Accessibility</div>
    </div>
  </div>
</footer>

<script>
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    btn.textContent = '✓ Appointment Requested!';
    btn.style.background = '#27ae60';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Make An Appointment';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }
${"</scr"}ipt>
</body>
</html>
`;
      }
      function closeLivePreview() {
        document.getElementById("livePreviewModal").style.display = "none";
        document.getElementById("reddingtonFrame").srcdoc = "";
      }
      // Close modals on backdrop click
      document
        .getElementById("caseStudyModal")
        .addEventListener("click", function (e) {
          if (e.target === this) closeCaseStudy();
        });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeCaseStudy();
          closeLivePreview();
        }
      });
      // Coming from the Reddington design-system page's "View Live Preview" link
      if (sessionStorage.getItem("openReddington")) {
        sessionStorage.removeItem("openReddington");
        openLivePreview();
      }
