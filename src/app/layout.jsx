import "./globals.css";

export const metadata = {
  title: "Dallas Glass and Auto",
  description: "At Dallas Glass & Auto, we are dedicated to delivering exceptional glass repair and replacement services at the most competitive prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>{children}</body>
    </html>
  );
}
