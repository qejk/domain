Space.Object.extend('Space.domain.Rule', {

  mixin: [
    Space.messaging.DeclarativeMappings
  ],

  dependencies: {
    hooks: 'Space.messaging.CommandBusHooks',
    meteor: 'Meteor'
  },

  onDependenciesReady() {
    if (this.enforceMap !== undefined) {
      this._setupRule();
    }
  },

  _setupRule() {
    this._setupDeclarativeMappings('enforceMap', (function(_this) {
      return function(hook, command) {
        _this.hooks.addRuleHook(command, _this, hook.bind(_this));
      };
    })(this));
  }
});
