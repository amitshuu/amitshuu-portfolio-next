"use client";
import SocialLinks from "./SocialLinks";
import { Element } from "react-scroll";
import ContactForm from "./ContactForm";

export interface IAlert {
  alertType: "success" | "error" | null;
  alertMessage: string | null;
}
const ContactSection = () => {
  return (
    <Element name="contact-section">
      <section className="relative flex items-center justify-center w-full p-20 px-4 bg-primary-section ">
        <div className="container flex flex-col items-center">
          <h1 className="mb-6 text-5xl text-white md:text-6xl">
            Contact <span className=" text-primary-blue">Me</span>
          </h1>
          <p className="mb-10 text-xl text-center text-gray-300">
            Feel free to get in touch with me using the form below
          </p>
          <div className=" lg:w-1/2 md:w-2/3">
            <ContactForm />
            <div className="flex items-center mt-8 text-center border-t-2 border-gray-500 max-w-7xl">
              <div className="mx-auto mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactSection;
