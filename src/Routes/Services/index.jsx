import React, { useEffect, useState } from "react";
import sanityClient from "../../client";

import "./Services.css";
import { useNav } from "../../Hooks/useNav";

export const Services = () => {
  const [services, setServices] = useState({});
  const servicesRef = useNav("services");

  const fetchData = async () => {
    try {
      const query = `*[_type == 'services-copy'][0]{
        service_content
      }`;
      const result = await sanityClient.fetch(query);
      setServices(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section ref={servicesRef} className="services section" id="services">
      <div className="services__container container">
        <div className="service_title__container">
          <h2 className="service__header">
            <span id="serv-title-one">How I can help</span>
            <span id="serv-title-two">- Services -</span>
          </h2>
        </div>

        <div className="service__section flex">
          {Object.keys(services).length > 0 && services.service_content.slice(0, 6).map((service) => {
            return (
              <div className="service">
                <h3 className="service__subtitle">{service.title}</h3>
                <p className="service__content">
                  {service.content}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
