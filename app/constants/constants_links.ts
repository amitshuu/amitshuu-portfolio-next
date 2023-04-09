//Icons
import webDevIcon from "../assets/optimization.png";
import optimization from "../assets/optimization2.png";
import shopify from "../assets/shopify.png";

//Sub Images

//- SneakerShop
import SneakersShop from "../assets/Products.png";
import Admin from "../assets/ProjectSubImages/SneakerShop/Admin.png";
import cart_orders from "../assets/ProjectSubImages/SneakerShop/cart_orders.png";
import home_page from "../assets/ProjectSubImages/SneakerShop/home_page.png";
import Header from "../assets/ProjectSubImages/SneakerShop/Header.png";

//- Messenger App
// import MessengerApp from '../assets/Main.png';
import ContactInfoTab from "../assets/ProjectSubImages/MessengerApp/ContactInfoTab.png";
import ContactRequest from "../assets/ProjectSubImages/MessengerApp/ContactRequest.png";
import Darkmode from "../assets/ProjectSubImages/MessengerApp/Darkmode.png";
import Main from "../assets/ProjectSubImages/MessengerApp/Main2.png";
import Profile from "../assets/ProjectSubImages/MessengerApp/Profile.png";

//KidsInMotion

import Contact from "../assets/ProjectSubImages/KidsInMotion/Contact.png";
import OurActivities from "../assets/ProjectSubImages/KidsInMotion/OurActivities.png";
import OurCustomer from "../assets/ProjectSubImages/KidsInMotion/OurCustomers.png";
import OurGallery from "../assets/ProjectSubImages/KidsInMotion/OurGallery.png";
import Yaniv from "../assets/KidsInMotion.png";
import YanivLogo from "../assets/ProjectSubImages/KidsInMotion/logoo.png";

//Surfify

import Home from "../assets/ProjectSubImages/Surfify/Home.png";
import Collection from "../assets/ProjectSubImages/Surfify/Collection.png";
import Featured_products from "../assets/ProjectSubImages/Surfify/Featured_products.png";
import sample_product from "../assets/ProjectSubImages/Surfify/sample_product.png";
import footer_surfify from "../assets/ProjectSubImages/Surfify/footer_surfify.png";
import surfify_cart from "../assets/ProjectSubImages/Surfify/surfify_cart.png";
import { StaticImageData } from "next/image";

export const nav_link = [
  {
    name: "Home",
    to: "home",
  },
  {
    name: "About",
    to: "about-section",
  },
  {
    name: "Projects",
    to: "project-section",
  },
  {
    name: "Contact",
    to: "contact-section",
  },
];

export const services_links = [
  {
    serviceName: "Custom Web Development",
    serviceIcon: webDevIcon,
    serviceDescription:
      "  I build custom websites tailored to your needs, from simple web to complex one.",
    // My responsive and engaging designs showcase your brand with a user-friendly interface.'
  },
  {
    serviceName: "Shopify Development",
    serviceIcon: shopify,
    serviceDescription:
      "Ill create your Shopify e-commerce site from store setup to product listing, payment and shipping options configuration.",
    // Additionally Ill add unique design elements and features to make your store stand out.
  },
  {
    serviceName: "Website Maintenance",
    serviceIcon: optimization,
    serviceDescription:
      "I provide ongoing website maintenance and optimization services, fixing bugs, improving speed and performance.",
    // to ensure your site runs efficiently and meets your business goals.
  },
];

export const projects_links = [
  {
    projectName: "Surfify",
    projectDesc:
      "Welcome to Surfify! online surfing equipment store! Our passion for surfing inspired us to create a one-stop-shop for all your surfing needs. Our store offers a wide range of high-quality surfboards, wetsuits, and other accessories to help you make the most of your surfing experience.",
    projectImage: Home,
    projectSubImages: [
      Collection,
      Featured_products,
      sample_product,
      footer_surfify,
      surfify_cart,
    ],
    projectCategory: "Shopify",
    usefulLinks: [
      {
        websiteUrl: "https://localhost:3000",
      },
    ],
  },
  {
    projectName: "Sneakers Shop",
    projectDesc:
      "This is a sample application that demonstrates an E-commerce website using the MEAN stack. The application loads products a MongoDB database and displays them. Users can add products to their cart, purchase products and even rate them! Users can choose exactly which product they want with helpful filtering functionality.",
    projectImage: home_page,
    projectSubImages: [SneakersShop, Admin, cart_orders, home_page, Header],
    projectCategory: "Fullstack Developement",
    usefulLinks: [
      {
        websiteUrl: "https://sneakers-shop.onrender.com/",
        gitRepo: "https://github.com/amitshuu/sneakers-shop",
      },
    ],
  },

  {
    projectName: "Messenger App",
    projectDesc:
      "This is a sample application that demonstrates a whatsapp web application using the MERN stack. This web appliaction allow you to search for contacts, add them to your own contact list and start a new chat with them! You can send messages, images, videos, and emojis! Messenger App is a Real Time chat application which getting updated in live using web sockets!",
    projectImage: ContactInfoTab,
    projectSubImages: [Main, Darkmode, ContactRequest, ContactInfoTab, Profile],
    projectCategory: "Fullstack Developement",
    usefulLinks: [
      {
        youtubeLink: "https://www.youtube.com/watch?v=A-z_C_AhsHo",
        gitRepo: "https://github.com/amitshuu/messenger-app",
      },
    ],
  },
  {
    projectName: "Kids In Motion",
    projectDesc:
      "I designed and built a landing page for a client who offers kids activities focused on dance. The landing page highlights the business unique features and encourages potential customers to sign up. It includes engaging images and information about the activities available, with a clear call-to-action. The page effectively showcases the client business and services in a visually appealing way.",
    projectImage: Yaniv,
    projectSubImages: [Yaniv, Contact, OurActivities, OurCustomer, OurGallery],
    projectCategory: "Frontend Developement",
    usefulLinks: [
      {
        websiteUrl: "https://localhost:3000",
      },
    ],
  },
];

export const testimonials_links = [
  {
    description:
      "I had the pleasure of working with Amit on my Shopify store, and I couldn't be happier with the results. They provided invaluable assistance with both styling and coding, and their attention to detail was impressive. Their expertise helped me create a store that is both functional and visually appealing",
    clientName: "Moran Weinstein",
    clientBuisness: "brillizz.com",
    clientImage:
      "https://cdn.shopify.com/s/files/1/0662/8822/2458/files/B.jpg?crop=center&height=32&v=1675440381&width=32",
  },
  {
    description:
      "Working with Amit was a game-changer for my Shopify store. As someone who is not very tech-savvy, I struggled to make my store look professional and polished. But with Amit's help, I was able to achieve the exact look and feel I was going for. From styling to coding, Amit was a true expert, and he patiently walked me through every step of the process",
    clientName: "Alphet",
    clientBuisness: "alphet.co.il",
    clientImage:
      "https://cdn.shopify.com/s/files/1/0242/6745/6567/files/ALPHETLOGO-favicon-2.jpg?crop=center&height=32&v=1663762159&width=32",
  },
  {
    description:
      "Amit did an amazing job building a landing page for our kids activities business. They took the time to understand our needs and created a page that perfectly captures our brand and mission. We've already seen an increase in inquiries and bookings since the page launched, and we couldn't be happier with the results",
    clientName: "Yaniv Sofer",
    clientBuisness: "kidsinmotion.co.il",
    clientImage: YanivLogo,
  },
];
