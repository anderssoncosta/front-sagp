import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavMenuItem from "./nav-menu-item";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5 bg-primary">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0" side="left">
            <NavMenuItem />
          </SheetContent>
        </Sheet>
        <Link to="/">
          <img
            src="/src/assets/logo_sagp-white.png"
            height={120}
            width={120}
            alt="Logo"
          />
        </Link>
      </CardContent>
    </Card>
  );
};
export default MenuMobile;
