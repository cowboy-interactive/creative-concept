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
        icon: <Monitor alt="icon"/>,
      },
      {
        head: "Web Design & Development",
        icon: <Layout alt="icon"/>,
      },
      {
        head: "Google Analytics",
        icon: <Activity alt="icon"/>,
      },
      {
        head: "7 Day Support",
        icon: <Calendar alt="icon"/>,
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
        icon: <Database alt="icon"/>,
      },
      {
        head: "Logo Design",
        icon: <PenTool alt="icon"/>,
      },
      {
        head: "Custom Graphics",
        icon: <Image alt="icon"/>,
      },
      {
        head: "Ecommerce",
        icon: <ShoppingBag alt="icon"/>,
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
        icon: <Database alt="icon"/>,
      },
      {
        head: "Logo Design",
        icon: <PenTool alt="icon"/>,
      },
      {
        head: "Custom Graphics",
        icon: <Image alt="icon"/>,
      },
      {
        head: "Ecommerce",
        icon: <ShoppingBag alt="icon"/>,
      },
    ],
  },
];
