# Mirelle Lucien — Premium Grant Consulting Website

A bespoke, high-end, 4-page personal grant-consulting website designed for **Mirelle Lucien**, Grant Writer, Grant Researcher & Proposal Writer, Grant Consultant, and Nonprofit Funding Specialist serving clients worldwide.

---

## 💎 Design Inspiration & Visual Philosophy
Crafted to embody the sophisticated editorial layout of modern creative portfolios and prestigious consulting brands, with direct inspiration from the reference architecture:
- **Primary Accent**: Sophisticated teal/cyan (`#0D9488`, `#14B8A6`, `#06B6D4`) paired with subtle muted teal tints (`rgba(13, 148, 136, 0.08)`).
- **Typography & Dark Charcoal**: Deep charcoal/near-black headings (`#0F172A`, `#1E293B`) and muted slate body text (`#64748B`) using Google Fonts **Outfit** (editorial headlines) and **Plus Jakarta Sans** (clean, readable body).
- **Surfaces**: Crisp white cards (`#FFFFFF`) layered on cool neutral backdrops (`#F8FAFC`, `#F1F5F9`).
- **Composition**: Generously rounded corners (`border-radius: 16px - 28px`), subtle hairline borders (`1px solid rgba(15, 23, 42, 0.08)`), and soft layered shadows.
- **Personal Brand Portrait**: Prominently features Mirelle Lucien in an editorial frame with soft organic teal background geometry, glowing ambient gradients, and floating credential badges.

---

## 📄 Website Pages

### 1. Home (`index.html`)
- **Slider Revolution-Style Cinematic Hero**:
  - 3 animated slides with staggered entrance animations (eyebrows, headlines, copy, CTAs).
  - Slow Ken Burns image movement and morphing teal organic backdrop shapes.
  - Large circular navigation buttons (prev/next) matching the reference design.
  - Automated progress bar timer (6.5s) with pause-on-hover.
  - Slide counter indicator (`01 / 03`, `02 / 03`, `03 / 03`), slide dots, and center bottom scroll down indicator.
  - Touch-swipe support for mobile and arrow-key keyboard navigation.
- **Introduction**: Strategic support overview featuring 5 service pillar cards with minimalist line icons and hover lift.
- **How It Works (Funding Process)**: 4-step progressive timeline (`01 Discover`, `02 Research`, `03 Develop`, `04 Refine`) connected by an animated teal line.
- **Animated Statistics**: Tasteful counters showing `500+` Opportunities Researched, `180+` Proposals Developed, `120+` Clients Supported Worldwide, and `96%` Client Retention.
- **Client Testimonials**: Refined editorial testimonial slider with verified feedback, client avatars, and navigation controls.
- **Featured Services Preview**: In-depth capability previews with deliverables lists and direct links to service anchors.
- **Interactive FAQ Accordion**: Expandable Q&A addressing worldwide consulting, custom research, and engagement workflows.
- **High-Impact Teal CTA**: Closing banner prompting consultation bookings and direct email contact.

### 2. About Us (`about.html`)
- **Hero**: *"Professional Grant Support Built Around Purpose, Strategy and Impact."*
- **Editorial Spotlight**: Mirelle's personal portrait paired with her brand story, consulting journey, and dedication to mission-driven organizations.
- **Mission & Vision**: Dual elevated cards detailing organizational purpose and long-term vision.
- **5 Core Values**: `Accuracy`, `Integrity`, `Purpose`, `Strategy`, and `Impact` with customized visual iconography and detailed explanations.
- **Strategic Methodology**: The 5-stage funding readiness pathway (`Research → Strategy → Writing → Refinement → Funding Readiness`).
- **Who She Supports**: Sector-specific guidance for Grassroots Nonprofits, International NGOs, Social Enterprises, and Research Fellows.

### 3. Our Services (`services.html`)
- **Hero**: Comprehensive funding solutions designed for clarity and measurable results.
- **5 In-Depth Service Modules**:
  1. **Grant Writer**: Persuasive narrative development, budget justifications, and compliance review.
  2. **Grant Research**: Prospect identification, eligibility screening, funder dossiers, and deadline calendars.
  3. **Proposal Writer**: Theory of change, logical frameworks (logframes), and monitoring & evaluation (MEL) plans.
  4. **Grant Consultant**: Institutional funding readiness audits, red-team proposal reviews, and capacity building.
  5. **Nonprofit Funding Specialist**: Funding diversification, donor communication scripts, and stewardship frameworks.
- **Engagement Guarantees**: Strict confidentiality, strict deadline guarantee, dedicated iterations, and global perspective.
- **Action CTAs**: Quick buttons to book consultations or request specific packages.

### 4. Contact Us (`contact.html`)
- **Hero**: *"Let's Discuss Your Funding Goals."*
- **Contact Details Grid**:
  - Direct Email: `lucienmirelle@gmail.com`
  - Global Service Area: Serving clients worldwide with digital consulting
  - Response Guarantee: 24–48 business hour response window
- **Comprehensive Interactive Enquiry Form**:
  - Fields: Full Name, Email, Organization / Project, Service Needed (Dropdown), Funding Goal / Target Amount, Timeline / Deadline, and Project Details.
  - Live client-side validation and friendly error highlights.
  - Pre-fills service dropdown automatically when navigated from specific service links.
  - Elegant submission confirmation modal with backdrop blur.

---

## ⚡ Technical Highlights
- **100% Vanilla Tech Stack**: Pure HTML5, modern CSS3 (Custom Properties, CSS Grid, Flexbox), and modular Vanilla JavaScript.
- **Zero Heavy Dependencies**: No jQuery or heavy bloated libraries. Blazing fast 60fps animations.
- **Fully Responsive**: Fluid typography (`clamp()`) and breakpoints optimized for Mobile (<480px), Tablet (768px), Laptop (1024px), and Desktop (1280px+).
- **Accessible & Motion Conscious**: Uses semantic ARIA tags and respects `@media (prefers-reduced-motion: reduce)`.

---

## 🚀 How to View Locally
Simply double-click `index.html` to view in any modern web browser, or launch using any static server:
```bash
# Using Python (if installed)
python -m http.server 8000

# Or via Node http-server
npx http-server -p 8000
```
Then open `http://localhost:8000` in your browser.

---
&copy; 2026 Mirelle Lucien. All Rights Reserved. Strategic Grant Consultant.
