import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <>
      <div className="fixed w-full h-14 z-50 top-0 left-0 shadow-sm border-b bg-white">
        {/*TODO: Mobile Sidebar */}

        <nav className="flex w-full items-center justify-between px-6 h-14 max-w-screen-2xl md:px-10 mx-auto">
          <MobileSidebar />
          <div className="flex-1 flex gap-x-8 ">
            <div className="hidden md:flex">
              <Logo color="text-neutral-700" />
            </div>
            <Button
              size="sm"
              className="rounded-sm hidden md:block py-1.5 px-2 h-auto"
              variant={"primary"}
            >
              Create{" "}
            </Button>
            <Button
              size="sm"
              className="rounded-sm block md:hidden"
              variant={"primary"}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex ml-auto items-center gap-x-3">
            <OrganizationSwitcher
              hidePersonal
              afterCreateOrganizationUrl={"/organization/:id"}
              afterLeaveOrganizationUrl={"/select-org"}
              afterSelectOrganizationUrl={"/organization/:id"}
              appearance={{
                elements: {
                  rootBox: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                },
              }}
            />
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: {
                    height: 30,
                    width: 30,
                  },
                },
              }}
            />
          </div>
        </nav>
      </div>
    </>
  );
};
