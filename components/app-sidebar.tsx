"use client";

import * as React from "react";
import {
  Package,
  Users,
  Contact,
  UserRound,
  Building,
  Book,
  ShoppingCart,
  ShoppingBag,
  Wallet,
  Warehouse,
  LayoutDashboard,
  FileChartColumn,
  Settings,
  MonitorCog,
  Settings2,
  Sparkles,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { NavTransactions } from "./nav-transactions";
import { NavDataStore } from "./navbar-datastore";
import { NavSetting } from "./nav-setting";

// Sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/users.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: false,
    },
    {
      title: "Laporan",
      url: "#",
      icon: FileChartColumn,
      isActive: false,
    },
    {
      title: "Langganan",
      url: "#",
      icon: Sparkles,
      isActive: false,
    },
  ],
  navDataStore: [
    {
      title: "Produk",
      url: "#",
      icon: Package,
      isActive: false,
      items: [
        {
          title: "Daftar Produk",
          url: "#",
        },
        {
          title: "Daftar Produk Paket",
          url: "#",
        },
        {
          title: "Satuan Pengukuran",
          url: "#",
        },
        {
          title: "Kelompok Produk",
          url: "#",
        },
      ],
    },
    {
      title: "Pelanggan",
      url: "#",
      icon: Users,
      isActive: false,
    },
    {
      title: "Pemasok",
      url: "#",
      icon: Contact,
      isActive: false,
    },
    {
      title: "Salesman",
      url: "#",
      icon: UserRound,
      isActive: false,
    },
    {
      title: "Harta Tetap",
      url: "#",
      icon: Building,
      items: [
        {
          title: "Daftar Harta Tetap",
          url: "#",
        },
        {
          title: "Kelompok Harta Tetap",
          url: "#",
        },
      ],
    },
  ],
  NavTransaction: [
    {
      title: "Buku Besar",
      url: "#",
      icon: Book,
      items: [
        {
          title: "Daftar Akun",
          url: "#",
        },
        {
          title: "Jurnal Umum",
          url: "#",
        },
        {
          title: "Jurnal Manual",
          url: "#",
        },
      ],
    },
    {
      title: "Penjualan",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Penawaran Penjualan",
          url: "#",
        },
        {
          title: "Pesanan Penjualan",
          url: "#",
        },
        {
          title: "Pengiriman Penjualan",
          url: "#",
        },
        {
          title: "Uang Muka Penjualan",
          url: "#",
        },
        {
          title: "Faktur Penjualan",
          url: "#",
        },
        {
          title: "Retur Penjualan",
          url: "#",
        },
        {
          title: "Daftar Piutang",
          url: "#",
        },
        {
          title: "Pembayaran Piutang",
          url: "#",
        },
      ],
    },
    {
      title: "Pembelian",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Permintaan Pembelian",
          url: "#",
        },
        {
          title: "Pesanan Pembelian",
          url: "#",
        },
        {
          title: "Penerimaan",
          url: "#",
        },
        {
          title: "Uang Muka Pembelian",
          url: "#",
        },
        {
          title: "Faktur Pembelian",
          url: "#",
        },
        {
          title: "Retur Pembelian",
          url: "#",
        },
        {
          title: "Daftar Utang",
          url: "#",
        },
        {
          title: "Pembayaran Utang",
          url: "#",
        },
      ],
    },
    {
      title: "Kas & Bank",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Penerimaan Kas",
          url: "#",
        },
        {
          title: "Pengeluaran Kas",
          url: "#",
        },
        {
          title: "Transfer Kas",
          url: "#",
        },
      ],
    },
    {
      title: "Inventori",
      url: "#",
      icon: Warehouse,
      items: [
        {
          title: "Daftar Gudang",
          url: "#",
        },
        {
          title: "Stock Opname",
          url: "#",
        },
        {
          title: "Produksi",
          url: "#",
        },
        {
          title: "Transfer Gudang",
          url: "#",
        },
        {
          title: "Pemakaian Persediaan",
          url: "#",
        },
      ],
    },
  ],
  navSetting: [
    {
      title: "Point of Sales",
      url: "#",
      icon: MonitorCog,
      items: [
        {
          title: "Outlet",
          url: "#",
        },
        {
          title: "Pengguna",
          url: "#",
        },
        {
          title: "Metode Pembayaran",
          url: "#",
        },
        {
          title: "Jenis Transaksi",
          url: "#",
        },
        {
          title: "Catatan Resi",
          url: "#",
        },
        {
          title: "Mode Restoran",
          url: "#",
        },
      ],
    },
    {
      title: "Perusahaan",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Daftar Akun",
          url: "#",
        },
        {
          title: "Data Cabang",
          url: "#",
        },
        {
          title: "Data Gudang",
          url: "#",
        },
        {
          title: "Data Pajak",
          url: "#",
        },
        {
          title: "Syarat Pembayaran",
          url: "#",
        },
      ],
    },
    {
      title: "Pengaturan Aplikasi",
      url: "#",
      icon: Settings,
      isActive: false,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, open } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      role="navigation"
      aria-label="Main Sidebar"
      {...props}
    >
      <SidebarHeader>
        {open ? (
          <div>
            <Image
              alt="divoc accounting logo"
              src="/divoc-accounting-logo.png"
              width={300}
              height={300}
            />
          </div>
        ) : (
          <div>
            <Image
              alt="divoc accounting logo icon"
              src="/logo-icon.png"
              width={100}
              height={100}
            />
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDataStore items={data.navDataStore} />
        <NavTransactions items={data.NavTransaction} />
        <NavSetting items={data.navSetting} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
