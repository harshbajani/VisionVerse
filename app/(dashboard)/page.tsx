"use client";

import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/empty-org";
import { VisionList } from "./_components/vision-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const DashboardPage = ({
  searchParams,
}: DashboardPageProps) => {
  const { organization } = useOrganization();

  return ( 
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <VisionList
          orgId={organization.id}
          query={searchParams}
        />
      )}
    </div>
   );
};
 
export default DashboardPage;