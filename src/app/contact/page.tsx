import Image from "next/image";
import { pathOr } from "ramda";
import React from "react";

import { contactSection } from "@/data/content";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Heading from "@/shared/Heading/Heading";

import ContactForm from "./ContactForm";

const page = () => {
  return (
    <div className="container">
      <div className="mb-32 mt-20">
        <Heading desc={contactSection.description} isMain isCenter>
          {contactSection.heading}
        </Heading>

        <div className="mx-auto max-w-3xl rounded-3xl bg-gray p-5 md:p-10 lg:p-16">
          <ContactForm />
        </div>
      </div>

      <div className="mb-32">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Follow us on Instagram</h2>
          <ButtonSecondary className="border-2 border-[#E6D1B5] text-[#CDA168] hover:text-[#755327]">
            Visit
          </ButtonSecondary>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-5">
            {contactSection.instagramPhotos.slice(0, 4).map((photo) => (
              <div key={photo}>
                <Image
                  src={photo}
                  alt="instagram photo"
                  className="h-full w-full object-cover object-center"
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
          <div>
            <Image
              src={pathOr("", ["instagramPhotos", 4], contactSection)}
              alt="instagram photo"
              className="h-full w-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
