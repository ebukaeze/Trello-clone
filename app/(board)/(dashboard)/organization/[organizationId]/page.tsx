import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();
  return <div>{orgId}</div>;
};

export default OrganizationIdPage;
