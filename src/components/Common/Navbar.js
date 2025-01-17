"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Drawer, IconButton } from "@mui/material"; // Material UI Button and Drawer
import { Menu, Close } from "@mui/icons-material"; // Menu Icon from Material UI
import { usePathname } from "next/navigation"; // to highlight active link
import logo from "@/public/full_logo.png"; // Logo Image
import Image from "next/image"; // Next.js Image Component
import { baseFrontendUrl } from "@/config/BaseUrl";

console.log("baseFrontendUrl", baseFrontendUrl);

const navItems = [
    { label: "About Us", href: "/about", id: "aboutus-home" },
    { label: "Services", href: "", id: "services-home" },
    { label: "Industries", href: "", id: "industries-home" },
    { label: "Technologies", href: "/technologies", id: "technologies-home" },
    { label: "Portfolio", href: "/portfolio", id: "portfolio-home" },
    // { label: "Projects", href: "/projects", id: "projects-home" },
    { label: "Resources", href: "/resources", id: "resources-home" },
    { label: "Careers", href: "/careers", id: "careers-home" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    // Check screen size on mount and resize
    useEffect(() => {
        setHydrated(true); // Component is now hydrated
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Adjust the breakpoint as needed
        };

        handleResize(); // Set the initial state
        window.addEventListener("resize", handleResize); // Listen to window resize
        return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }, []);

    // Function to toggle drawer visibility
    const toggleDrawer = (open) => {
        setOpenDrawer(open);
    };

    return (
        <nav className="bg-white text-black py-4 relative w-full">
            <div className="flex justify-between gap-16 mx-4 items-center">
                <div className="flex justify-center items-center">
                    <Link href="/" className="ml-5">
                        <Image src={logo} alt="Logo" width={170} height={100} />
                    </Link>
                </div>

                {hydrated && isMobile && (
                    <IconButton
                        onClick={() => toggleDrawer(true)}
                        className="block lg:hidden"
                        sx={{
                            color: "black",
                        }}
                    >
                        <Menu />
                    </IconButton>
                )}

                <ul className="hidden lg:flex justify-start gap-2">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={
                                    item.href === ""
                                        ? `${baseFrontendUrl}/#${item.id}`
                                        : item.href
                                }
                                passHref
                            >
                                <Button
                                    sx={{
                                        fontSize: "1rem",
                                        textTransform: "capitalize",
                                        color:
                                            pathname === item.href
                                                ? "#1868DB"
                                                : "black",
                                        whiteSpace: "nowrap",
                                        textDecoration: "none",
                                        fontWeight:
                                            pathname === item.href ? 600 : 400,
                                        "&:hover": {
                                            color: "#307EED",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:block">
                    <Button
                        onClick={() => {
                            const element =
                                document.getElementById("contactus-home");
                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }
                        }}
                        sx={{
                            fontWeight: "600",
                            fontSize: "1rem",
                            textTransform: "capitalize",
                            color: "white",
                            backgroundColor: "#1868DB",
                            "&:hover": {
                                backgroundColor: "#307EED",
                            },
                            padding: "4px 24px",
                        }}
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>

            {hydrated && isMobile && (
                <Drawer
                    anchor="left"
                    open={openDrawer}
                    onClose={() => toggleDrawer(false)}
                    sx={{
                        width: "50%",
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: "60%",
                            boxSizing: "border-box",
                        },
                    }}
                >
                    <div className="flex flex-col items-start mx-5 pt-10 relative">
                        <IconButton
                            onClick={() => toggleDrawer(false)}
                            sx={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                color: "black",
                            }}
                            className="cursor-pointer"
                        >
                            <Close />
                        </IconButton>
                        <div className="mb-8">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={140}
                                height={100}
                            />
                        </div>

                        <ul className="flex flex-col items-start gap-6">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={
                                            item.href === ""
                                                ? `${baseFrontendUrl}/#${item.id}`
                                                : item.href
                                        }
                                        passHref
                                    >
                                        <Button
                                            sx={{
                                                width: "fit-content",
                                                fontSize: "1rem",
                                                textTransform: "capitalize",
                                                color:
                                                    pathname === item.href
                                                        ? "#1868DB"
                                                        : "black",
                                                textDecoration: "none",
                                                fontWeight:
                                                    pathname === item.href
                                                        ? 600
                                                        : 400,
                                                "&:hover": {
                                                    color: "#307EED",
                                                },
                                            }}
                                            onClick={() => toggleDrawer(false)}
                                        >
                                            {item.label}
                                        </Button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="block mt-4 ml-2">
                            <Button
                                onClick={() => {
                                    const element =
                                        document.getElementById(
                                            "contactus-home"
                                        );
                                    if (element) {
                                        setOpenDrawer(false);
                                        element.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }
                                }}
                                sx={{
                                    fontWeight: "600",
                                    fontSize: "1rem",
                                    textTransform: "capitalize",
                                    color: "white",
                                    backgroundColor: "#1868DB",
                                    "&:hover": {
                                        backgroundColor: "#307EED",
                                    },
                                    padding: "4px 24px",
                                }}
                            >
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </Drawer>
            )}
        </nav>
    );
};

export default Navbar;
