import type { Metadata } from "next";
import { Poppins, Saira,Playfair_Display ,Cedarville_Cursive, Inter} from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { LoginDialog } from "@/component/LoginDialog";

const poppins = Poppins({
  // variable: "",
  weight: ["400", "300", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  // variable: "",
  weight: ["400", "300", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const cedarville=Cedarville_Cursive({
  weight:["400"],
  subsets:["latin"],
  variable:"--font-cedarville"
})

const playfair=Playfair_Display({
  weight:["400","500"],
  subsets:["latin"],
  variable:"--font-playfair"
})
// import "react-phone-number-input/style.css";
const saira = Saira({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-saira",
});
import { NuqsAdapter } from 'nuqs/adapters/next/pages'
export const metadata: Metadata = {
  metadataBase: new URL("https://strangertogether.com"),
  title: {
    default: "Stranger Together | Group Tours & Weekend Getaways",
    template: "%s | Stranger Together",
  },
  description: "Join Stranger Together for unforgettable group tours, weekend getaways, and international adventures. Discover your next journey with us.",
  keywords: ["travel", "group tours", "weekend getaways", "international trips", "stranger together", "adventure travel", "backpacking"],
  openGraph: {
    title: "Stranger Together | Group Tours & Weekend Getaways",
    description: "Join Stranger Together for unforgettable group tours, weekend getaways, and international adventures.",
    url: "https://strangertogether.com",
    siteName: "Stranger Together",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stranger Together Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stranger Together | Group Tours & Weekend Getaways",
    description: "Join Stranger Together for unforgettable group tours, weekend getaways, and international adventures.",
    images: ["/og-image.jpg"],
  },
};
import { Toaster } from "@/components/ui/sonner"
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <link
  rel="preload"
  href="/video/video-1.webm"
  as="video"
  type="video/webm"
        />
      <body
        className={`${poppins.variable} ${saira.variable} ${inter.variable} ${cedarville.variable} antialiased required:`}>
        <TRPCReactProvider>
          <AuthProvider>
          <LoginDialog/>
          <NuqsAdapter>
          {children}
          </NuqsAdapter>
          </AuthProvider>
          <Toaster/>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
