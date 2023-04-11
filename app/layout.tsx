import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import "././globals.css";
import Footer from "./components/Footer";

export const metadata = {
  openGraph: {
    url: "https://www.amitshuu.com/",
    title: "Amit Shukrun - Web Developer",
    description:
      "I am a fullstack web developer offering web development services including creating landing pages and complex web applications, Shopify ecommerce development, website design, and website maintenance. Contact me to bring your website to life!",
    type: "website",
    images: [
      {
        url: "http://www.amitshuu.com/seo_image.png",
        width: 800,
        height: 600,
        alt: "Amit Shukrun - Web Developer",
      },
      {
        url: "http://www.amitshuu.com/seo_image.png",
        width: 1800,
        height: 1600,
        alt: "Amit Shukrun - Web Developer",
      },
    ],
  },
  other: {
    "google-site-verification": "7xdzd4T16clU3DEhxgD69Da7KLy1-uWqj9s8xHWxZWU",
  },
  keywords:
    "Amit Shukrun, amitshuu, Amit, Shukrun, Web development services,Full-stack web developer,Landing page design,Website design,Shopify development,Website maintenance,Custom web applications,Web design services",
  title: "Amit Shukrun - Web Developer",
  description:
    "I offer web development services such as creating landing pages, complex web apps, Shopify development, web design, and maintenance. Contact me to bring your website to life!",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`3xl:bg-dark-large-screen max-w-[1920px] m-auto bg-dark-bg ${poppins.className}  `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
