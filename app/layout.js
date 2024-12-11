import "./globals.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/600.css"; // Specify weight
import Footer from "@/components/HomePageComponents/Footer";
import Header from "@/components/HomePageComponents/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../lib/fontawesome";

export const metadata = {
  title: "Home | Strugbits Employee",
  description: "Best software company in Karachi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
