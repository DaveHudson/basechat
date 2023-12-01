"use client";
import { useEffect, useState } from "react";
import { CommandLineIcon, ChartPieIcon, FilmIcon, HomeIcon, PhotoIcon, UsersIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

import NavigationDesktop from "@/components/nav/nav-desktop";
import NavigationMobile from "@/components/nav/nav-mobile";
import Header from "@/components/nav/header";

export type NavigationItem = {
  name: string;
  href: string;
  icon: any;
  current: boolean;
};

export default function App({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon, current: pathname === "/" },
    { name: "AI Prompts", href: "/prompts", icon: CommandLineIcon, current: pathname === "/prompts" },
    { name: "AI Chat GPT", href: "/chat", icon: UsersIcon, current: pathname === "/chat" },
    { name: "AI Chat Claude", href: "/chat-claude", icon: UsersIcon, current: pathname === "/chat-claude" },
    {
      name: "Completion Cohere",
      href: "/completion/cohere",
      icon: UsersIcon,
      current: pathname === "/completion/cohere",
    },
    { name: "AI Voice Chat", href: "/chat-voice", icon: UsersIcon, current: pathname === "/chat-voice" },
    { name: "RAG", href: "/chat-rag", icon: UsersIcon, current: pathname === "/chat-rag" },
    {
      name: "Text To Image",
      href: "/stability/text-to-image",
      icon: UsersIcon,
      current: pathname === "/stability/text-to-image",
    },
    {
      name: "Image To Image",
      href: "/stability/image-to-image",
      icon: UsersIcon,
      current: pathname === "/stability/image-to-image",
    },
    { name: "AI Images", href: "/images", icon: PhotoIcon, current: pathname === "/images" },
    { name: "AI Video", href: "/videos", icon: FilmIcon, current: pathname === "/videos" },
    { name: "AI Reports", href: "/reports", icon: ChartPieIcon, current: pathname === "/reports" },
  ];

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      <div>
        <NavigationDesktop navigation={navigation} />
        <NavigationMobile navigation={navigation} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="lg:pl-72">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
