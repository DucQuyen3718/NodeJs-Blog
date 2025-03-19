function isActiveRoute(route, currenrRoute) {
    return route === currenrRoute ? 'active' : '';
}

module.exports = { 
    isActiveRoute
};