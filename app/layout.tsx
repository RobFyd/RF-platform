import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "//RF — Robert Fydrych",
    template: "%s | //RF",
  },
  description:
    "Design, digital development and physical production by Robert Fydrych.",
  applicationName: "//RF",
  creator: "Robert Fydrych",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/rf-white-sq.svg",
    shortcut: "/rf-white-sq.svg",
    apple: "/rf-white-sq.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
    { media: "(prefers-color-scheme: light)", color: "#f2f0ea" },
  ],
};

const themeScript = `
  try {
    var savedTheme = localStorage.getItem("rf-theme");
    document.documentElement.dataset.theme =
      savedTheme === "light" ? "light" : "dark";
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
