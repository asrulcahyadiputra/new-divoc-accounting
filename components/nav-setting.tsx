"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavSetting({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pengaturan</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) =>
          item.items?.length ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    aria-label={`Toggle ${item.title}`}
                    aria-current={item.isActive ? "page" : undefined}
                    className={item.isActive ? "bg-gray-200" : ""}
                  >
                    {item.icon ? (
                      <item.icon />
                    ) : (
                      <span className="sr-only">No icon</span>
                    )}
                    <span>{item.title || "Untitled"}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent aria-hidden={!item.isActive}>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          {subItem.url ? (
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          ) : (
                            <span>{subItem.title}</span>
                          )}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                aria-label={item.title}
                aria-current={item.isActive ? "page" : undefined}
                className={item.isActive ? "bg-gray-200" : ""}
                asChild
              >
                {item.url ? (
                  <a href={item.url} className="flex items-center gap-2">
                    {item.icon ? (
                      <item.icon />
                    ) : (
                      <span className="sr-only">No icon</span>
                    )}
                    <span>{item.title || "Untitled"}</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-2">
                    {item.icon ? (
                      <item.icon />
                    ) : (
                      <span className="sr-only">No icon</span>
                    )}
                    <span>{item.title || "Untitled"}</span>
                  </span>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
