app.config([
  'formioComponentsProvider',
  function(formioComponentsProvider) {
    formioComponentsProvider.register('phoneNumber', {
      views: [
        {
          name: 'Display',
          template: 'formio/components/phoneNumber/display.html'
        },
        {
          name: 'Validation',
          template: 'formio/components/phoneNumber/validate.html'
        },
        {
          name: 'API',
          template: 'formio/components/phoneNumber/api.html'
        }
      ],
      documentation: 'http://help.form.io/userguide/#phonenumber'
    });
  }
]);
app.run([
  '$templateCache',
  function($templateCache) {

    // Create the settings markup.
    $templateCache.put('formio/components/phoneNumber/display.html',
      '<ng-form>' +
        '<form-builder-option property="label"></form-builder-option>' +
        '<form-builder-option property="placeholder"></form-builder-option>' +
        '<form-builder-option property="inputMask"></form-builder-option>' +
        '<form-builder-option property="prefix"></form-builder-option>' +
        '<form-builder-option property="suffix"></form-builder-option>' +
        '<form-builder-option property="multiple"></form-builder-option>' +
        '<form-builder-option property="tableView"></form-builder-option>' +
      '</ng-form>'
    );

    // Create the API markup.
    $templateCache.put('formio/components/phoneNumber/api.html',
      '<ng-form>' +
        '<form-builder-option-key disable-on-lock></form-builder-option-key>' +
        '<form-builder-option property="protected"></form-builder-option>' +
        '<form-builder-option property="persistent"></form-builder-option>' +
      '</ng-form>'
    );

    // Create the Validation markup.
    $templateCache.put('formio/components/phoneNumber/validate.html',
      '<ng-form>' +
        '<form-builder-option property="unique"></form-builder-option>' +
        '<form-builder-option property="validate.required"></form-builder-option>' +
      '</ng-form>'
    );
  }
]);
