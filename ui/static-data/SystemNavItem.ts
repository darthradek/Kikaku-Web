import Routes from "../../global/Routes";
import { ISystemNavItem } from "../../utils/ui-interfaces/system/ISystemNavItem";
import { FiTrendingUp, FiCompass, FiUsers, FiTrello } from "react-icons/fi";

class SystemNavItems {
  public static readonly systemNavItems: ISystemNavItem[] = [
    {
      label: "Dashboard",
      href: Routes.systemDashboardPage,
      icon: FiTrendingUp,
    },
    {
      label: "Teams",
      href: Routes.systemTeamsPage,
      icon: FiUsers,
    },
    {
      label: "Projects",
      href: Routes.systemProjectsPage,
      icon: FiTrello,
    },
  ];
}

export default SystemNavItems;
