import Routes from "../../global/Routes";
import { ILandingNavItem } from "../../utils/ui-interfaces/landing/ILandingNavItem";

class LandingNavItems {
  public static readonly landingNavItems: ILandingNavItem[] = [
    {
      label: "Home",
      href: Routes.homePage,
    },
    {
      label: "About",
      href: Routes.homePage,
    },
    {
      label: "Contact",
      href: Routes.homePage,
    },
  ];
}

export default LandingNavItems;
