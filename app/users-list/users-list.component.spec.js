describe('usersController', function() {

      var $httpBackend, ctrl;
      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service and assign it to a variable with the same name

      // as the service while avoiding a name conflict.
      beforeEach(inject(function($componentController, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('users/users.json')
          .respond([{
            name: 'name0'
          }, {
            name: 'name1'
          }]);

        ctrl = $componentController('userList');
      }));

      it('should create 2 users', function() {
        expect(ctrl.users).toBeUndefined();
        $httpBackend.flush();
        expect(ctrl.users).toEqual([{
          name: 'name0'
        }, {
          name: 'name1'
        }]);
      });
