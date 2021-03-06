(function() {
  'use strict';

  describe('navbar component', function() {

    var $componentController;
    var timeInMs;
    var bindings;
    var newScope;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_, $rootScope ) {
      $componentController = _$componentController_;
      timeInMs = new Date();
      timeInMs = timeInMs.setHours(timeInMs.getHours() - 24);
      //Defining the binding for the component data
      bindings = {creationDate: timeInMs};
      //New scope
      newScope = $rootScope.$new();
    }));

    it('should have a date defined', function() {
      // Here we are passing actual bindings to the component
      var vm = $componentController('abNavbar', {$scope: newScope}, bindings);
      expect(vm.creationDate).toEqual(jasmine.any(Number));
      expect(vm.creationDate).toEqual(timeInMs);
      expect(vm.relativeDate).toEqual(jasmine.any(String));
      expect(vm.relativeDate).toEqual('a day ago');
    });

  });
})();

