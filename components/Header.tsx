"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
// import { UserMenu } from "./user-menu";
// import { useAuth } from "@/lib/auth"
import Link from "next/link";
import { UserMenu } from "./UserMenu";

export function Header() {
  // const { user } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      {/* <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end gap-4 text-sm"></div>
      </div> */}

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-900">iPROCURE</div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 pr-4 h-10"
              />
            </div>
          </div>
          <UserMenu />

          {/* Cart */}
          <div className="flex items-center gap-2">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">
              Register
            </Button>
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-800"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <Link
              href="/products"
              className="hover:text-blue-900 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/suppliers"
              className="hover:text-blue-900 transition-colors"
            >
              Suppliers
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/service-providers"
              className="hover:text-blue-900 transition-colors"
            >
              Service Providers
            </Link>
            <Link href="/rfq" className="hover:text-blue-900 transition-colors">
              RFQ Marketplace
            </Link>
            {/* {user?.role === "admin" && (
              <Link href="/admin" className="hover:text-blue-900 transition-colors">
                Admin
              </Link>
            )} */}
            {/* {user && ( */}
            <Link
              href="/dashboard"
              className="hover:text-blue-900 transition-colors"
            >
              Dashboard
            </Link>
            {/* )} */}
          </div>
        </div>
      </nav>
    </header>
  );
}
