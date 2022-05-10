import Routes from "../../global/Routes";
import { ISystemNavItem } from "../../utils/ui-interfaces/system/ISystemNavItem";

class SystemNavItems {
  public static readonly systemNavItems: ISystemNavItem[] = [
    {
      label: "Dashboard",
      href: Routes.systemDashboardPage,
    },
    {
      label: "Teams",
      href: Routes.systemTeamsPage,
    },
    {
      label: "Projects",
      href: Routes.systemProjectsPage,
    },
  ];
}

export default SystemNavItems;
