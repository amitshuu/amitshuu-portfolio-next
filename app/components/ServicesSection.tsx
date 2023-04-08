import { services_links } from "../constants/constants_links";

const ServicesSection = () => {
  return (
    <>
      <section className="flex-col items-center justify-center w-full py-20 md:py-32 w-flex section-center bg-dark-bg">
        <p className="mb-20 text-5xl text-center text-white xl:text-7xl">
          My <span className="text-primary-blue">Services</span>
        </p>
        <div className="flex flex-wrap justify-center max-w-full gap-8 xl:justify-evenly xl:gap-10 xl:flex-nowrap">
          {services_links.map((service) => {
            return (
              <article
                key={service.serviceName}
                className="container flex flex-col items-center max-w-md px-4 py-8 transition-transform cursor-pointer hover:transform hover:scale-105 rounded-2xl bg-primary-section"
              >
                <img
                  className="w-20 h-20 mb-2"
                  src={service.serviceIcon.src}
                  alt={`amitshuu - fullstack web developer - ${service.serviceName} `}
                />
                <p className="mb-4 text-xl text-white border-b-2 border-primary-blue">
                  {service.serviceName}
                </p>
                <p className="max-w-xs text-lg text-center text-gray-300 ">
                  {service.serviceDescription}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
