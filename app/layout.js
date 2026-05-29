import "./globals.css";

export const metadata = {
  title: "The Design Themes Atlas — one skeleton, many skins",
  description:
    "A catalog of 17 landing-page specimens. Every page shares one skeleton and one token spine; a theme is just those knobs turned to an extreme.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
