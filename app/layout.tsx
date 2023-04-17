import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import "././globals.css";
import Footer from "./components/Footer";

export const metadata = {
  openGraph: {
    url: "https://www.amitshuu.com/",
    title: "Amit Shukrun - Web Developer | עמית שוקרון - מפתח אתרים",
    description:
      "I'm Amit Shukrun, a fullstack web developer offering landing page creation, web app development, Shopify ecommerce and more. Let's build your website!",
    type: "website",
    images: [
      // {
      //   url: "http://www.amitshuu.com/laptop.png",
      //   width: 800,
      //   height: 600,
      //   alt: "Amit Shukrun amitshuu עמית שוקרון",
      // },
      {
        url: "http://www.amitshuu.com/laptop.png",
        width: 1200,
        height: 630,
        alt: "Amit Shukrun amitshuu עמית שוקרון",
      },
    ],
  },
  other: {
    "google-site-verification": "7xdzd4T16clU3DEhxgD69Da7KLy1-uWqj9s8xHWxZWU",
  },
  keywords:
    "Amit Shukrun, amitshuu, Web development, Full-stack development, Landing page design, Website design, Shopify development, Website maintenance, Custom web applications, Web design services, עמית שוקרון, שוקרון",
  title: "Amit Shukrun - Web Developer | עמית שוקרון - מפתח אתרים",
  description:
    "I'm Amit Shukrun, a fullstack web developer offering landing page creation, web app development, Shopify ecommerce and more. Let's build your website!",
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
