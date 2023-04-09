import Navbar from "./components/Navbar";
import { Varela_Round, Poppins, Lato } from "next/font/google";
import computer from "./assets/computer.png";

import "././globals.css";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata = {
  openGraph: {
    title: "Amit Shukrun - Web Developer",
    description:
      "I am a fullstack web developer offering web development services including creating landing pages and complex web applications, Shopify ecommerce development, website design, and website maintenance. Contact me to bring your website to life!",
    type: "website",
    images: {
      url: "http://www.amitshuu.com/seo_image.png",
      width: 800,
      height: 600,
      alt: "Amit Shukrun - Web Developer",
    },
  },

  keywords:
    "Web development services,Full-stack web developer,Landing page design,Website design,Shopify development,Website maintenance,Custom web applications,Web design services",
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
      <Head>
        <meta
          name="google-site-verification"
          content="7xdzd4T16clU3DEhxgD69Da7KLy1-uWqj9s8xHWxZWU"
        />
      </Head>
      <body
        className={`max-w-[1920px] m-auto bg-dark-bg ${poppins.className}  `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
