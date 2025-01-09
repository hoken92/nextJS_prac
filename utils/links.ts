type NavLink = {
  href: string;
  label: string;
};

// Navigation links that will be mapped for our nav menu
export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/favorites ", label: "favorites" },
  { href: "/bookings ", label: "bookings" },
  { href: "/reviews ", label: "reviews" },
  { href: "/rentals/create ", label: "create rental" },
  { href: "/rentals", label: "my rentals" },
  { href: "/profile ", label: "profile" },
];
