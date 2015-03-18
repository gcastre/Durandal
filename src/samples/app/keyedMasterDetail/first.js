define(['plugins/router', 'durandal/system', 'knockout'], function(router, system, ko) {
    var firstVm = ko.observable();

    var vm = {
        activate:activate,
        title:'First Tab',
        deactivate:deactivate,
        firstVm:firstVm,
		router: router.activeItem().router
    };

    return vm;

    function activate(id) {
        system.log('First Tab Activated');
        return loadObservables(id);
    }

    function deactivate() {
        system.log('First Tab Deactivated');
    }

    function loadObservables(id) {
        firstVm({ id:id, name:'First Tab Content' });
    }
});