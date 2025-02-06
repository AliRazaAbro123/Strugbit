import "./globals.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Specify weight
import Footer from "@/components/HomePageComponents/Footer";
import Header from "@/components/HomePageComponents/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../lib/fontawesome";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
  title: "Strugbits Employee | Top Software Company in Karachi",
  description:
    "Strugbits is a leading software company in Karachi, specializing in innovative web and mobile app development solutions.",
  keywords:
    "Software company Karachi, Web development Karachi, Mobile app development, IT services Pakistan",
  author: "Strugbits Team",
  openGraph: {
    title: "Strugbits - Leading Software Company in Karachi",
    description:
      "Providing cutting-edge IT solutions, web development, and mobile app development in Karachi.",
    type: "website",
    url: "https://www.strugbits.com",
    image: "https://www.strugbits.com/og-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-6153573963834456">
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <Header />
            <main>{children}</main>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
