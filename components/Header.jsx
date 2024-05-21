import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import Logo from "@/public/Logo.svg";


export default function Header() {
  const router = useRouter();
  const [cart, setCart] = useState([]); // Use local state instead of Redux state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email) {
      setEmail(storedUser.email);
    }
    
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookie.remove("user_token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const addToCart = () => {
    const updatedCart = JSON.parse(localStorage.getItem("cart"));
    if (updatedCart) {
      setCart(updatedCart);
    }
    router.push("/sepet");
  };

  return (
    <div className="flex justify-between items-center w-full p-4 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="flex items-center">
        <Link href="/">
          <div>
            <Image src={Logo} width={100} height={100} alt="Logo" className="rounded-2xl cursor-pointer bg-white shadow-xl" />
          </div>
        </Link>
      </div>

      <div className="ml-auto">
        <div className="flex items-center gap-10">
          {email ? (
            <div>
              <div
                className="flex gap-1 items-center text-black hover:text-white cursor-pointer transition-colors duration-200"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <AccountCircleIcon />
                <span>{email}</span>
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Çıkış Yap" />
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link href="/login">
              <div className="flex gap-1 items-center text-black hover:text-white cursor-pointer transition-colors duration-200">
                <AccountCircleIcon />
                <span>Giriş Yap</span>
              </div>
            </Link>
          )}

          <div className="flex items-center gap-1">
            <Link href="/sepet">
              <div className="flex gap- items-center text-black hover:text-white cursor-pointer transition-colors duration-200" onClick={addToCart}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
                <span className="ml-1">Sepetim</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-8">
        <Link href="/hakkimizda">
          <div className="text-lg font-semibold text-black hover:text-gray-200 cursor-pointer transition-colors duration-200">
            Hakkımızda
          </div>
        </Link>
      </div>

      <div className="ml-8"></div>
    </div>
  );
}
