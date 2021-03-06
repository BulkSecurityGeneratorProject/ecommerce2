(function() {
    'use strict';

    angular
        .module('ecommerceApp')
        .controller('ProductoDetailController', ProductoDetailController);

    ProductoDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Producto', 'Marca', 'Subcategoria'];

    function ProductoDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Producto, Marca, Subcategoria) {
        var vm = this;

        vm.producto = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('ecommerceApp:productoUpdate', function(event, result) {
            vm.producto = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
