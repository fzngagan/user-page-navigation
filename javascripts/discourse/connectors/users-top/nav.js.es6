export default {
  setupComponent(args, component){  
    const filterMode = 'users';
    const navItems = Discourse.NavItem.buildList(null, { filterMode });

    this.setProperties({
      navItems,
      filterMode
    });
  }
};