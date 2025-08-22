"use client";

// import { useState } from "react";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// // import { useAuth } from "@/lib/auth"
// // import { AuthModal } from "./auth/auth-modal"
// import { User, Settings, LogOut, ShoppingCart, Package, Shield } from "lucide-react"
// import Link from "next/link"

export function UserMenu() {
  //   const { user, logout } = useAuth()
  //   const [showAuthModal, setShowAuthModal] = useState(false)
  //   const [authMode, setAuthMode] = useState<"login" | "register">("login")

  //   if (!user) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          //   onClick={() => {
          //     setAuthMode("register");
          //     setShowAuthModal(true);
          //   }}
          className="text-white hover:text-blue-100"
        >
          Register
        </Button>
        <Button
          variant="ghost"
          size="sm"
          //   onClick={() => {
          //     setAuthMode("login");
          //     setShowAuthModal(true);
          //   }}
          className="text-white hover:text-blue-100"
        >
          Login
        </Button>
      </div>

      {/* <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} defaultMode={authMode} /> */}
    </>
  );
}

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//   }

//   const getRoleColor = (role: string) => {
//     switch (role) {
//       case "admin":
//         return "bg-red-100 text-red-800"
//       case "supplier":
//         return "bg-blue-100 text-blue-800"
//       case "buyer":
//         return "bg-green-100 text-green-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-10 w-10 rounded-full">
//           <Avatar className="h-10 w-10">
//             <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
//             <AvatarFallback className="bg-blue-600 text-white">{getInitials(user.name)}</AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent className="w-64" align="end" forceMount>
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-2">
//             <div className="flex items-center gap-2">
//               <p className="text-sm font-medium leading-none">{user.name}</p>
//               <Badge className={getRoleColor(user.role)} variant="secondary">
//                 {user.role}
//               </Badge>
//             </div>
//             <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
//             {user.company && <p className="text-xs leading-none text-muted-foreground">{user.company}</p>}
//           </div>
//         </DropdownMenuLabel>

//         <DropdownMenuSeparator />

//         <DropdownMenuItem asChild>
//           <Link href="/dashboard">
//             <User className="mr-2 h-4 w-4" />
//             <span>Dashboard</span>
//           </Link>
//         </DropdownMenuItem>

//         <DropdownMenuItem>
//           <Settings className="mr-2 h-4 w-4" />
//           <span>Settings</span>
//         </DropdownMenuItem>

//         {user.role === "buyer" && (
//           <DropdownMenuItem>
//             <ShoppingCart className="mr-2 h-4 w-4" />
//             <span>My Orders</span>
//           </DropdownMenuItem>
//         )}

//         {user.role === "supplier" && (
//           <DropdownMenuItem>
//             <Package className="mr-2 h-4 w-4" />
//             <span>My Products</span>
//           </DropdownMenuItem>
//         )}

//         {user.role === "admin" && (
//           <DropdownMenuItem asChild>
//             <Link href="/admin">
//               <Shield className="mr-2 h-4 w-4" />
//               <span>Admin Panel</span>
//             </Link>
//           </DropdownMenuItem>
//         )}

//         <DropdownMenuSeparator />

//         <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>Log out</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
