import { Button } from "@/components/ui/button";
import { OrganizationList, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="m-4">
      <UserButton />
      <OrganizationList
        hidePersonal={true}
        afterCreateOrganizationUrl="/:id"
        afterSelectOrganizationUrl="/:id"
      />
      <Link href="/create-organization">Perusahaan</Link>
    </div>
  );
};

export default HomePage;
