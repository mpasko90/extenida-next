"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Services",
		href: "/services",
		submenu: [
			{ label: "Home Extensions", href: "/services/home-extensions" },
			{ label: "Loft Conversions", href: "/services/loft-conversions" },
			{ label: "Kitchen Renovations", href: "/services/kitchen-renovations" },
			{ label: "Bathroom Renovations", href: "/services/bathroom-renovations" },
		],
	},
	{
		label: "Areas",
		href: "/areas",
		submenu: [
			{ label: "Kingston Upon Thames", href: "/areas/kingston" },
			{ label: "Richmond", href: "/areas/richmond" },
			{ label: "Putney", href: "/areas/putney" },
			{ label: "Wimbledon", href: "/areas/wimbledon" },
			{ label: "Surbiton", href: "/areas/surbiton" },
			{ label: "Twickenham", href: "/areas/twickenham" },
		],
	},
	{
		label: "Portfolio",
		href: "/portfolio",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const isMobile = useIsMobile();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			id="site-header"
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo-gray.png"
							width={isMobile ? 120 : 150}
							height={isMobile ? 24 : 30}
							alt="Extendia Logo"
							className="transition-all duration-300"
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<div key={item.label} className="relative group">
								<Link
									href={item.href}
									className={`text-${
										scrolled ? "gray-900" : "white"
									} hover:text-extendia-accent transition-colors`}
								>
									{item.label}
								</Link>
								{item.submenu && (
									<div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
										{item.submenu.map((subitem) => (
											<Link
												key={subitem.label}
												href={subitem.href}
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												{subitem.label}
											</Link>
										))}
									</div>
								)}
							</div>
						))}
						<Button asChild variant={scrolled ? "default" : "outline"} size="sm">
							<a href="tel:+442039165670">020 3916 5670</a>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden text-gray-500 hover:text-gray-600"
					>
						<span className="sr-only">Open menu</span>
						{isMenuOpen ? (
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<div key={item.label}>
									<Link
										href={item.href}
										className={`block px-3 py-2 text-base font-medium ${
											pathname === item.href
												? "text-extendia-accent"
												: "text-gray-700 hover:text-extendia-accent"
										}`}
									>
										{item.label}
									</Link>
									{item.submenu && (
										<div className="pl-4 space-y-1">
											{item.submenu.map((subitem) => (
												<Link
													key={subitem.label}
													href={subitem.href}
													className="block px-3 py-2 text-sm text-gray-600 hover:text-extendia-accent"
												>
													{subitem.label}
												</Link>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
