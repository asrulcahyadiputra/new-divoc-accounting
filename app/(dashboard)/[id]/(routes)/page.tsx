import { OrganizationSwitcher } from "@clerk/nextjs";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      <div>
        My Post: {id}
        <div>
          <OrganizationSwitcher hidePersonal={true} />
        </div>
      </div>
    </div>
  );
}
