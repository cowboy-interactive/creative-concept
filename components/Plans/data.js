import {
  Activity,
  Calendar,
  Database,
  Image,
  Layout,
  Monitor,
  PenTool,
  ShoppingBag,
} from "react-feather";

export const links = [
  {
    head: "Standard",
    price: "$499",
    text: (
      <span>
        Our standard 5 page website. <br /> Let us take care of your website,
        <br />
        while you focus on the rest.
      </span>
    ),
    url: "/",
    list: [
      {
        head: "Hosting Fees Included",
        icon: <Monitor />,
      },
      {
        head: "Web Design & Development",
        icon: <Layout />,
      },
      {
        head: "Google Analytics",
        icon: <Activity />,
      },
      {
        head: "7 Day Support",
        icon: <Calendar />,
      },
    ],
  },
  {
    head: "Custom",
    price: "Inquire",
    text: (
      <span>
        Need a custom plan that fits <br />
        your needs? Contact us to see what <br />
        we can do for your website.
      </span>
    ),
    style: "fill",
    url: "/",
    list: [
      {
        head: "Content Management",
        icon: <Database />,
      },
      {
        head: "Logo Design",
        icon: <PenTool />,
      },
      {
        head: "Custom Graphics",
        icon: <Image />,
      },
      {
        head: "Ecommerce",
        icon: <ShoppingBag />,
      },
    ],
  },
  {
    head: "Custom",
    price: "Inquire",
    text: (
      <span>
        Need a custom plan that fits <br />
        your needs? Contact us to see what <br />
        we can do for your website.
      </span>
    ),
    style: "standard",
    url: "/",
    list: [
      {
        head: "Content Management",
        icon: <Database />,
      },
      {
        head: "Logo Design",
        icon: <PenTool />,
      },
      {
        head: "Custom Graphics",
        icon: <Image />,
      },
      {
        head: "Ecommerce",
        icon: <ShoppingBag />,
      },
    ],
  },
];
