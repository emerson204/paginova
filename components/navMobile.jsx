"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import NavLinks from "./navLinks";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  const isMobile = () => window.innerWidth < 768;

  const handleResize = useCallback(() => {
    if (!isMobile() && open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleOpenChange = (state) => {
    if (isMobile()) {
      setOpen(state);
    }
  };

  const onClickLink = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <AlignJustify size={28} className="dark:text-black" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle asChild>
            <Image
              src="https://res.cloudinary.com/dgzphcnpw/image/upload/f_auto,q_auto/v1738805727/p-web_szskcm.png"
              className="mb-8"
              alt="logo"
              width="65"
              height="65"
            />
          </SheetTitle>
          <SheetDescription asChild>
            <NavLinks onClickLink={onClickLink} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
