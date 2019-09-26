import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
    name: 'alert',
    initialize() {
        withPluginApi('0.8', addNavItem);
    }
  };

  function addNavItem(api){
    api.addNavigationBarItem({
      name: "Members",
      displayName: "Members",
      href: "/users",
      filterMode: 'users'
    });
  }