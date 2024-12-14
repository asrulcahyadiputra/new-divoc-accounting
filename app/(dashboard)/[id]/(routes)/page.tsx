import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0  bg-background items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                {/* <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" /> */}
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center mx-6 ml-auto">
            <UserButton />
          </div>
        </header>
        <div className="flex flex-col flex-1 gap-4 p-6 pt-6 bg-slate-100">
          <div className="grid gap-4 auto-rows-min md:grid-cols-3">
            <div className="bg-white rounded-lg aspect-video" />
            <div className="bg-white rounded-lg aspect-video" />
            <div className="bg-white rounded-lg aspect-video" />
          </div>
          <div className="grid gap-4 auto-rows-min md:grid-cols-2">
            <div className="bg-white rounded-lg aspect-video" />
            <div className="bg-white rounded-lg aspect-video" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-lg bg-white md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
