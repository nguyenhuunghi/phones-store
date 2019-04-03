angular.module('myApp', [])
  .directive('ngFileDrop', ['$fileUploader', function($fileUploader) {
    return {
      link: !$fileUploader.isHTML5 ? angular.noop: function(scope, element, attributes) {
        element.bind('drop', function(event) {
          var dataTransfer = event.dataTransfer ? event.dataTransfer : event.orginalEvent.dataTransfer;
          if(!dataTransfer) return;
          event.preventDefault();
        })
        .bind('dropover', function(event) {
          var dataTransfer = event.dataTransfer ? event.dataTransfer : event.orginalEvent.dataTransfer;
          if(!dataTransfer) return;
          event.preventDefault();
          dataTransfer.dropEffect = 'copy';
          scope.$boardcast('file:addoverclass')
        })
        .bind('drapleave', function() {
          scope.$boardcast('file:removeoverclass')
        })
      }
    }
  }])