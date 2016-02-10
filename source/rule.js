Space.Object.extend('Space.domain.Rule', {

  mixin: [
    Space.messaging.DeclarativeMappings
  ],

  dependencies: {
    _hooks: 'Space.messaging.HookRegistry'
  },

  onDependenciesReady() {
    if (this.enforce !== undefined) {
      this._setupRule();
    }
  },

  _setupRule() {
    this._setupDeclarativeMappings('enforce', (function(_this) {
      return function(hook, methodName) {
        _this._hooks.addRuleHook(methodName, _this, hook)
      };
    })(this));
  }
});
