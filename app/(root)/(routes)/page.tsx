"use client";
import { Button } from "@/components/ui/button";
import { OrganizationList, UserButton } from "@clerk/nextjs";
import { Building } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <nav>
        <div className="flex items-center justify-between p-2 bg-white shadow-lg lg:p-4">
          <div>
            <Image
              src="/divoc-accounting-logo.png"
              alt="Divoc Accounting Logo"
              width={200}
              height={200}
            />
          </div>
          <div>
            <UserButton />
          </div>
        </div>
      </nav>
      <section className="m-4">
        <OrganizationList
          hidePersonal={true}
          afterCreateOrganizationUrl="/:id"
          afterSelectOrganizationUrl="/:id"
          appearance={{
            elements: {
              rootBox: "flex  min-w-full",
              header: "text-left",
              cardBox: "min-w-full",
            },
          }}
        />
      </section>
    </div>
  );
};

export default HomePage;
