import { Mail, Map, Phone } from "react-feather";

export const links = [
  {
    head: "Call us",
    text: "(323) 238-0682",
    url: "tel: 123-456-7890",
    icon: <Phone />,
    target: "",
  },
  {
    head: "Email us",
    text: "info@constructor.com",
    url: "mailto: info@constructor.com",
    icon: <Mail />,
    target: "",
  },
  {
    head: "Visit our office",
    text: "149 W 70th St, 9000 Los Angeles, CA",
    url: "https://www.google.com/maps/place/149+W+70th+St+%239000,+Los+Angeles,+CA+90003,+USA/@33.9767114,-118.2779139,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c9b55e017afd:0xf4e2eb9d7b541c26!8m2!3d33.976707!4d-118.2757252",
    icon: <Map />,
    target: "_blank",
  },
];
