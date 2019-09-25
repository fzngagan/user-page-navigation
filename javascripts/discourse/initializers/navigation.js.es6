import { withPluginApi } from 'discourse/lib/plugin-api';
export default {
    name: 'alert',
    initialize() {
        withPluginApi('0.8', addNavItem);
    }
  };

  function addNavItem(api){

    api.addNavigationBarItem({
        name:"Latest topics",
        displayName: "Latest top",
        href: "/latest",
        customFilter: (category, args, router) => {if(router == 'users.index'){return true;} return false;}
    });

  }