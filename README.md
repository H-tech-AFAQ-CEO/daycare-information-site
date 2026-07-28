# Sunny Meadows Daycare — Website

A fast, mobile-first, standards-compliant informational website built with
**Next.js (React) + Tailwind CSS**. It has four core pages — About Us,
Services, FAQ and Contact — plus a welcoming home page, a working contact form,
and SEO/accessibility best practices baked in.

The code is organized so that future features (enrollment forms, a parent
portal, online payments) can be added without a rewrite.

---

## How to update the site (no coding experience needed)

### 1. Change text (names, phone, hours, services, FAQ)

Almost all of the words on the site live in **one file**:

```
lib/site-data.ts
```

Open it and edit the text between the quote marks. For example, to change the
phone number, find:

```ts
phone: '(555) 123-4567',
```

...and replace it with your real number. The same file controls:

| What you want to change            | Section to edit in `lib/site-data.ts` |
| ---------------------------------- | ------------------------------------- |
| Center name, phone, email, address | `site`                                |
| Navigation menu labels             | `nav`                                 |
| The "why parents choose us" cards  | `values`                              |
| Programs on the Services page      | `services`                            |
| Questions & answers on the FAQ page| `faqs`                                |
| Parent quotes on the home page     | `testimonials`                        |

Save the file and the site updates automatically.

### 2. Swap images

All photos live in:

```
public/images/
```

To replace a photo, drop your new image into that folder using the **same file
name** as the one you want to replace (for example, overwrite
`hero-classroom.png`). Keep these tips in mind:

- Use `.png` or `.jpg` files.
- For best speed, keep each image under ~500 KB (resize large photos first).
- Landscape (wide) photos look best in the hero and service cards.

If you'd rather use a new file name, update the matching `image:` path in
`lib/site-data.ts` (for service photos) or the relevant page file.

### 3. Update the logo / colors

- The brand mark is a small SVG in `components/logo.tsx`.
- Colors and fonts are defined in `app/globals.css` (look for the `:root`
  block). Change the `--primary` and `--accent` values to re-theme the whole
  site.

---

## Wiring up the contact form (email delivery)

Out of the box the form **validates input and confirms submission**, and it
logs the message on the server. To actually deliver messages to your inbox,
connect a lightweight email service (we use [Resend](https://resend.com), which
has a free tier):

1. Create a free Resend account and verify your sending domain (or use their
   test address to start).
2. Add these environment variables to your hosting project:

   ```
   RESEND_API_KEY=your_resend_api_key
   CONTACT_TO_EMAIL=you@yourdaycare.com      # where enquiries are sent
   CONTACT_FROM_EMAIL=hello@yourdaycare.com  # a verified sender address
   ```

3. Redeploy. That's it — submissions now arrive in your inbox, with the
   parent's email set as the reply-to address so you can respond directly.

The form includes spam protection (a hidden honeypot field) and never exposes
your API key to visitors, because sending happens on the server.

---

## Running locally

```bash
pnpm install
pnpm dev        # start the dev server at http://localhost:3000
pnpm build      # production build
pnpm start      # run the production build
```

## Deploying

This is a Next.js app, so it runs on any host that supports Node.js. The
simplest option is [Vercel](https://vercel.com): connect the repository, add
the environment variables above, and deploy. No database or CMS required.

---

## Project structure

```
app/
  layout.tsx          # global layout, fonts, header & footer
  page.tsx            # Home
  about/page.tsx      # About Us
  services/page.tsx   # Services
  faq/page.tsx        # FAQ
  contact/page.tsx    # Contact
  actions/contact.ts  # secure server-side form handler
components/           # reusable UI (header, footer, cards, form, etc.)
lib/site-data.ts      # ALL editable content lives here
public/images/        # all photos
```
