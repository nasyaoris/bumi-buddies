export const navItems = [
  {
    page: "Home",
    url: "/",
  },
  {
    page: "About Us",
    url: "/about-us",
  },
  {
    page: "Event & Class",
    url: "/event",
    links: [
      {
        section: "Event",
        url: `event?section=EVENT`,
        param: "EVENT",
      },
      {
        section: "Class",
        url: `event?section=CLASS`,
        param: "CLASS",
      },
    ],
  },
  {
    page: "Collab with Us",
    url: "/collab",
  },
  {
    page: "Donation",
    url: "/donation",
  },
  {
    page: "Contact Us",
    url: "/contact",
  },
];
