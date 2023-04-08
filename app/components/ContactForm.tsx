"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/customHooks";
import { fetchEmailJS } from "../utils/emailJS";
import ContactFormButton from "./ContactFormButton";
import { IAlert } from "./ContactSection";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState<IAlert>({
    alertType: null,
    alertMessage: null,
  });

  const onSuccess = () => {
    setValues(contactFormState);
    setLoading(false);
    setAlert({
      alertType: "success",
      alertMessage: "Email has been sent successfuly",
    });
  };

  const onError = () => {
    setValues(contactFormState);
    setAlert({
      alertType: "error",
      alertMessage: "Service is currently unavailable",
    });
  };

  const contactFormState = {
    name: "",
    email: "",
    message: "",
  };
  const { onChange, onSubmit, values, setValues } = useForm(
    () => fetchEmailJS({ ...values, setLoading, onSuccess, onError }),
    contactFormState
  );

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert({ alertType: null, alertMessage: null });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-wrap -m-2">
        <div className="w-1/2 p-2">
          <div className="relative">
            <label className="leading-7 text-gray-300 text-md">Name</label>
            <input
              required={true}
              type="text"
              id="name"
              name="name"
              onChange={onChange}
              value={values.name}
              className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-gray-300 border border-gray-300 rounded outline-none focus:border-primary-blue focus:bg-gray-100 focus:text-black"
            />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="relative">
            <label className="leading-7 text-gray-300 text-md">Email</label>
            <input
              required={true}
              type="email"
              value={values.email}
              onChange={onChange}
              id="email"
              name="email"
              className="w-full px-3 py-1 text-base leading-8 text-black transition-colors duration-200 ease-in-out bg-gray-300 border border-gray-300 rounded outline-none focus:border-primary-blue focus:bg-gray-100 focus:text-black"
            />
          </div>
        </div>
        <div className="w-full p-2">
          <div className="relative">
            <label className="leading-7 text-gray-300 text-md">Message</label>
            <textarea
              required={true}
              value={values.message}
              id="message"
              name="message"
              onChange={onChange}
              className="w-full h-32 px-3 py-1 mb-5 text-base leading-6 text-black transition-colors duration-200 ease-in-out bg-gray-300 border border-gray-300 rounded outline-none focus:border-primary-blue focus:bg-gray-100 focus:text-black"
            ></textarea>
          </div>
        </div>
        <ContactFormButton alert={alert} loading={loading} />
      </form>
    </div>
  );
};

export default ContactForm;
