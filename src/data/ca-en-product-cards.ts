import { ArrowDirection } from "../components/ProductCard";
import { ADI_ROOM_FILTER, buildCDNPath, IProductCard } from "./productCards";

export const PRODUCT_CARDS: IProductCard[] = [
  {
    id: "spotlightLeftZone",
    roomForMobileCard: ADI_ROOM_FILTER.ROOF,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("outdoor-camera"),
    productImageAltText: "Shop Smart Outdoor Cameras",
    productMetaLink: null,
    copy: "The possibilities are endless with smart cameras and lighting: record, monitor and archive footage for ultimate control.",
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Smart Outdoor Cameras",
    shopMoreBtnLink:
      "/Catalog/shopproducts/smart-home/smart-security-cameras?attributes=20705570-21c7-499e-8cff-ae870079e71f,c2ec4595-46aa-4e5b-9192-ae870079e71f",
    title: "Smart Outdoor Cameras",
    gaTag: "/smarthome_hotspots_smart-outdoor-cameras",
    gaTagSku: null,
  },
  // {
  //   id: "tvSpeakerZone",
  //   roomForMobileCard: ADI_ROOM_FILTER.TVROOM,
  //   arrowDirection: ArrowDirection.LEFT,
  //   productImage: buildCDNPath("smart-home-hubs"),
  //   productImageAltText: "Tv",
  //   productMetaLink: null,
  //   copy: `Control the environment for the entire home from a personal voice assistant…`,
  //   productMetaLinkText: null,
  //   productMetaName: null,
  //   shopMoreBtn: "Shop Smart Home Speakers",
  //   shopMoreBtnLink: "/",
  //   title: "Smart Home Speakers",
  //   gaTag: "/smarthome_hotspots_smart-home-speakers",
  //   gaTagSku: null,
  // },
  {
    id: "tvDeviceZone",
    roomForMobileCard: ADI_ROOM_FILTER.TVROOM,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("smart-tvs"),
    productImageAltText: "Tv",
    productMetaLink: null,
    copy: `Smart TVs are connected and Internet-ready, allowing customers to enjoy a wider range of entertainment.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Smart TVs",
    shopMoreBtnLink:
      "/Catalog/shopproducts/residential-av/residential-tvs-projectors/tvs",
    title: "Smart TVs",
    gaTag: "/smarthome_hotspots_smart-tvs",
    gaTagSku: null,
  },
  {
    id: "tvThermostatZone",
    roomForMobileCard: ADI_ROOM_FILTER.TVROOM,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("smart-thermostats"),
    productImageAltText: "Tv",
    productMetaLink: null,
    copy: `Control the environment for the entire home from a personal voice assistant or home hub with ease.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Smart Thermostats",
    shopMoreBtnLink: "/Catalog/shopproducts/smart-home/smart-thermostats",
    title: "Smart Thermostats",
    gaTag: "/smarthome_hotspots_smart-thermostats",
    gaTagSku: null,
  },
  {
    id: "bedroomLightZone",
    roomForMobileCard: ADI_ROOM_FILTER.BEDROOM,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("smart-dimmers"),
    productImageAltText: "Tv",
    productMetaLink: null,
    copy: `Customers can automate and schedule scenes for certain times of the day, eliminating the need for manual setting change.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Smart Dimmers & Light Switches",
    shopMoreBtnLink:
      "/Catalog/shopproducts/smart-home/smart-dimmers-light-switches",
    title: "Smart Dimmers & Light Switches",
    gaTag: "/smarthome_hotspots_smart-dimmers",
    gaTagSku: null,
  },
  {
    id: "bedroomTableZone",
    roomForMobileCard: ADI_ROOM_FILTER.BEDROOM,
    arrowDirection: ArrowDirection.RIGHT,
    productImage: buildCDNPath("smart-plugs"),
    productImageAltText: "Smart Plugs & Outlets",
    productMetaLink: null,
    copy: `Customers can automate and schedule scenes for certain times of the day, eliminating the need for manual setting change.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Smart Plugs & Outlets",
    shopMoreBtnLink: "/Catalog/shopproducts/smart-home/smart-plugs-outlets",
    title: "Smart Plugs & Outlets",
    gaTag: "/smarthome_hotspots_smart-plugs",
    gaTagSku: null,
  },
  {
    id: "spotlightRightZone",
    roomForMobileCard: ADI_ROOM_FILTER.NODISPLAYONMOBILE,
    arrowDirection: ArrowDirection.RIGHT,
    productImage: buildCDNPath("outdoor-camera"),
    productImageAltText: "Shop Smart Outdoor Cameras",
    productMetaLink: null,
    copy: "The possibilities are endless with smart cameras and lighting: record, monitor and archive footage for ultimate control.",
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Smart Outdoor Cameras",
    shopMoreBtnLink:
      "/Catalog/shopproducts/smart-home/smart-security-cameras?attributes=20705570-21c7-499e-8cff-ae870079e71f,c2ec4595-46aa-4e5b-9192-ae870079e71f",
    title: "Smart Outdoor Cameras",
    gaTag: "/smarthome_hotspots_smart-outdoor-cameras",
    gaTagSku: null,
  },
  {
    id: "outsideMotionSensorLeft",
    roomForMobileCard: ADI_ROOM_FILTER.OUTDOOR,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("outdoor-speakers"),
    productImageAltText: "Outdoor Speakers",
    productMetaLink: null,
    copy: `Transform your outdoor landscape by adding audio to your backyard or patio.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Outdoor Speakers",
    shopMoreBtnLink:
      "/Catalog/shopproducts/residential-av/residential-audio/residential-av-speakers",
    title: "Outdoor Speakers",
    gaTag: "/smarthome_hotspots_outdoor-speakers",
    gaTagSku: null,
  },
  {
    id: "kitchenTvZone",
    roomForMobileCard: ADI_ROOM_FILTER.KITCHEN,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("eero-router"),
    productImageAltText: "Smart Home Hubs",
    productMetaLink: "/Product/0S-S011111",
    copy: `Control the environment for the entire home from a personal voice assistant or home hub…`,
    productMetaLinkText: "View Product",
    productMetaName: "eero 6E Dual-Band Mesh Wi-Fi 6E Router, 1-Pack",
    shopMoreBtn: "Shop Smart Home Hubs",
    shopMoreBtnLink:
      "/Catalog/shopproducts/data-communications-networking/hubs-routers-switches/network-routers?boostids=0S-S011111",
    title: "Smart Home Hubs",
    gaTag: "/smarthome_hotspots_smart-home-hubs",
    gaTagSku: "/smarthome_hotspots_eero",
  },
  {
    id: "doorKeypadZone",
    roomForMobileCard: ADI_ROOM_FILTER.DOOR,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("smart-doorbells"),
    productImageAltText: "Smart Video Doorbells",
    productMetaLink: null,
    copy: `Video doorbells give users the ultimate layer of protection and security by sending alerts and recording live video upon sensing motion.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Smart Video Doorbells",
    shopMoreBtnLink: "/Catalog/shopproducts/smart-home/smart-video-doorbells",
    title: "Smart Video Doorbells",
    gaTag: "/smarthome_hotspots_video-doorbells",
    gaTagSku: null,
  },
  {
    id: "doorLockZone",
    roomForMobileCard: ADI_ROOM_FILTER.DOOR,
    arrowDirection: ArrowDirection.LEFT,
    productImage: buildCDNPath("smart-lock"),
    productImageAltText: "Smart Locks",
    productMetaLink: "/Product/2Y-011808",
    copy: `Improve home security with smart locks by allowing users to secure and auto-lock their doors remotely any time.`,
    productMetaLinkText: "View Product",
    productMetaName: "Yale Key Free Touchscreen Deadbolt with Z-Wave Plus",
    shopMoreBtn: "Shop Smart Locks",
    shopMoreBtnLink:
      "/Catalog/shopproducts/smart-home/smart-locks?boostids=2Y-011808",
    title: "Smart Locks",
    gaTag: "/smarthome_hotspots_smart-locks",
    gaTagSku: "/smarthome_hotspots_yale",
  },
  {
    id: "garageWaterTankZone",
    roomForMobileCard: ADI_ROOM_FILTER.GARAGE,
    arrowDirection: ArrowDirection.RIGHT,
    productImage: buildCDNPath("smart-sprinklers"),
    productImageAltText: "Smart Sprinkler Controllers",
    productMetaLink: null,
    copy: `Reduce time spent on lawn care and improve water efficiency by controlling and monitoring watering.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Smart Sprinkler Controllers",
    shopMoreBtnLink:
      "/Catalog/shopproducts/smart-home/smart-sprinkler-controllers",
    title: "Shop Smart Sprinkler Controllers",
    gaTag: "/smarthome_hotspots_smart-sprinkler",
    gaTagSku: null,
  },
  {
    id: "garageScreenZone",
    roomForMobileCard: ADI_ROOM_FILTER.GARAGE,
    arrowDirection: ArrowDirection.RIGHT,
    productImage: buildCDNPath("security-alarm"),
    productImageAltText: "Security Alarm Control Panels",
    productMetaLink: "/Product/PROA7PLUS",
    copy: `Connect cameras, motion sensors and other devices to a security panel for 24/7 detection and protection that's backed by wireless technology.`,
    productMetaLinkText: "View Product",
    productMetaName: 'ProSeries 7" All-In-One Touchscreen Panel',
    shopMoreBtn: "Shop Security Alarm Control Panels",
    shopMoreBtnLink:
      "/Catalog/shopproducts/intrusion/alarm-control-panels-keypads/security-alarm-control-panels?boostids=PROA7PLUS",
    title: "Security Alarm Control Panels",
    gaTag: "/smarthome_hotspots_alarm-control-panels",
    gaTagSku: "/smarthome_hotspots_resideo",
  },
  {
    id: "outsideMotionSensorRight",
    roomForMobileCard: ADI_ROOM_FILTER.NODISPLAYONMOBILE,
    arrowDirection: ArrowDirection.RIGHT,
    productImage: buildCDNPath("outdoor-speakers"),
    productImageAltText: "Outdoor Speakers",
    productMetaLink: null,
    copy: `Transform your outdoor landscape by adding audio to your backyard or patio.`,
    productMetaLinkText: null,
    productMetaName: null,
    shopMoreBtn: "Shop Outdoor Speakers",
    shopMoreBtnLink:
      "/Catalog/shopproducts/residential-av/residential-audio/residential-av-speakers",
    title: "Outdoor Speakers",
    gaTag: "/smarthome_hotspots_outdoor-speakers",
    gaTagSku: null,
  },
];
