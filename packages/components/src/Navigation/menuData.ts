import collapseLogo from "./img/collapse-logo.png";
const menuData = [
  {
    title: "NavigatorOne",
    index: "NavigatorOne",
    icon: collapseLogo,
    disabled: false,
    tips: 9999,
    child: [
      {
        title: "item One",
        index: "/navigation/CralndMenuPro?type=itemOne",
        disabled: true,
      },
      {
        title: "item Two",
        index: "/navigation/CralndMenuPro?type=itemTwo",
        disabled: false,
      },
      {
        title: "item Three",
        index: "/navigation/CralndMenuPro?type=itemThree",
        disabled: false,
      },
      {
        title: "item Four",
        index: "/navigation/CralndMenuPro?type=itemFour",
        disabled: false,
        child: [
          {
            title: "item Three 2",
            index: "/navigation/CralndMenuPro?type=itemThree2",
            disabled: false,
          },
        ],
      },
    ],
  },
  {
    title: "Navigator Two",
    index: "/navigation/CralndMenuPro?type=NavigatorTwo",
    icon: collapseLogo,
    disabled: false,
    tips: 10,
    child: [],
  },
  {
    title: "Navigator Three",
    index: "/navigation/CralndMenuPro?type=NavigatorThree",
    icon: collapseLogo,
    disabled: false,
    tips: 20,
    child: [],
  },
  {
    title:
      "Navigator FourNavigator FourNavigator FourNavigator FourNavigator Four",
    index: "/navigation/CralndMenuPro?type=NavigatorFour",
    icon: collapseLogo,
    disabled: false,
    tips: 90000,
    child: [],
  },
];

export default menuData;
