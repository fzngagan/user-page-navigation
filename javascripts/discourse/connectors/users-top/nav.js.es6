import { default as NavItem } from "discourse/models/nav-item";
export default {
setupComponent(args, component){    
    const navItems = NavItem.extraNavItems;
    console.log(navItems);
    this.set('navItems',navItems);
}
};