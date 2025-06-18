import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  /* ─── Core ─── */
  title: {
    default: "Windshield Replacement & Auto Glass Repair in Dallas | Dallas Glass & Auto",
    template: "%s | Dallas Glass & Auto"
  },
  description:
    "Mobile windshield replacement, chip repair, and full‑service auto glass solutions across Dallas‑Fort Worth. Same‑day appointments, competitive pricing, and lifetime workmanship warranty.",

  /* ─── Search helpers ─── */
  keywords: [
    "windshield replacement Dallas",
    "auto glass repair Dallas",
    "mobile windshield repair",
    "car window replacement",
    "rock chip repair"
  ],
  alternates: {
    canonical: "https://dallasglassandauto.com/"
  },

  /* ─── Social previews ─── */
  openGraph: {
    title: "Auto Glass Repair & Windshield Replacement | Dallas Glass & Auto",
    description:
      "Need fast, affordable auto glass service in Dallas‑Fort Worth? Book mobile windshield replacement or chip repair with Dallas Glass & Auto today.",
    url: "https://dallasglassandauto.com/",
    siteName: "Dallas Glass & Auto",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas Glass & Auto — Mobile Windshield Replacement & Chip Repair",
    description:
      "Top‑rated auto glass experts serving Dallas‑Fort Worth. Free quotes, same‑day service, and lifetime warranty."
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
      <SpeedInsights />
    </html>
  );
}
