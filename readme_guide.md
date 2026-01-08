# 🚀 Personal Portfolio – Edit & Maintenance Guide

This portfolio is built with **React + Vite + Material UI + Tailwind CSS** and is designed to be **content-editable without breaking UI/UX**.

> ✅ **Golden Rule:**
> Edit content only inside `constants.tsx`. Do NOT modify layout components unless you are intentionally changing UI behavior.

---

## 📁 Project Structure (What Matters)

```
src/
├─ components/        # UI & layout (❌ avoid editing for content)
├─ assets/
│  └─ images/         # Profile & project images
├─ constants.tsx      # ✅ ALL editable content lives here
├─ types.ts           # Data types (rarely edited)
public/
├─ resume.pdf         # Resume file
```

---

## ✏️ 1. Update Name, Role, Hero Text, Tagline

📍 **File:** `constants.tsx`

```ts
export const PERSONAL_INFO = {
  name: "Your Name",
  role: "Frontend Developer (React)",

  heroOverline: "FRONTEND ENGINEER",
  heroTitleLine1: "Building",
  heroTitleHighlight: "Clean",
  heroTitleLine2: "User-Focused",
  heroTitleLine3: "Interfaces",

  tagline:
    "Building practical, user-centric web interfaces using React.",

  resumeLink: "/resume.pdf",
  profileImage: "./assets/images/profile.jpg",
};
```

✅ Safe to edit anytime

---

## 📄 2. Upload / Update Resume

### Step 1: Add resume
Place your resume here:

```
public/resume.pdf
```

### Step 2: Link it
Already handled via:

```ts
resumeLink: "/resume.pdf"
```

✔ Recruiter-friendly
✔ No redeploy needed if filename stays same

---

## 🔗 3. Update Contact Details (Email, LinkedIn, GitHub, Phone)

📍 **File:** `constants.tsx`

```ts
export const CONTACT_LINKS = [
  {
    label: "Email",
    href: "mailto:yourmail@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourname",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: <GitHubIcon />,
  },
  {
    label: "Phone",
    href: "tel:+91XXXXXXXXXX",
    icon: <PhoneIcon />,
  },
];
```

✔ Add/remove platforms safely
✔ UI auto-adjusts

---

## 🧠 4. Update “My Journey” / Experience Timeline

📍 **File:** `constants.tsx`

```ts
export const EXPERIENCE = [
  {
    period: "2024 – 2026",
    role: "Frontend Developer",
    company: "Company Name",
    description:
      "Brief explanation of responsibilities and impact.",
  },
];
```

### ➕ Add a new experience

```ts
{
  period: "2026 – Present",
  role: "React Developer",
  company: "New Company",
  description: "What you are doing now.",
}
```

✔ Timeline line grows automatically
✔ Dots align correctly
✔ No layout changes required

---

## 🧰 5. Update Skills & Percentages (Recruiter-Safe)

📍 **File:** `constants.tsx`

```ts
export const SKILLS = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 75 },
      { name: "JavaScript", level: 75 },
      { name: "HTML & CSS", level: 80 },
    ],
  },
];
```

### 📊 Percentage Guidelines

| Level | Meaning |
|------|--------|
| 60–70 | Comfortable |
| 70–80 | Strong |
| 80–85 | Very Strong |
| ❌ 90+ | Avoid (Red Flag) |

Percentages represent **frequency of real usage**, not self-rated expertise.

---

## 🚀 6. Update Projects

📍 **File:** `constants.tsx`

```ts
export const PROJECTS = [
  {
    title: "Project Name",
    description:
      "Short visible summary (2–3 lines).",

    techStack: ["React", "Tailwind", "Supabase"],

    images: [
      "https://image-link-1.png",
      "https://image-link-2.png",
    ],

    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourrepo",
  },
];
```

### Notes
- Short description is always visible
- Full description is expandable via dropdown
- Carousel, pagination & swipe handled automatically

---

## 🖼️ 7. Update Profile Image

📍 Place image here:

```
src/assets/images/profile.jpg
```

📍 Linked via:

```ts
profileImage: "./assets/images/profile.jpg"
```

✔ Auto-scaled
✔ No layout change

---

## ❌ What NOT to Edit (Unless You Intend to Redesign)

Avoid modifying:
- `components/*.tsx`
- `SectionWrapper.tsx`
- Timeline positioning logic
- Spacing & animation configs

These are **UX-tuned and layout-safe**.

---

## ✅ Best Practice Summary

✔ Content → `constants.tsx`
✔ Images → `assets/images/`
✔ Resume → `public/resume.pdf`
❌ Layout → untouched

Following this ensures:
- No UI regressions
- Easy future updates
- Recruiter-safe presentation

---

## 🏁 Final Note

This portfolio is built to **grow with your career**.
You can update skills, projects, experience, and links for years without redesigning.

Happy building 🚀

