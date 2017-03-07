import ngResource from 'angular-resource';

const resources = angular.module('app.resources', [ ngResource ])
  .value('$apiUrl', '')

  .factory('$api', ($resource, $apiUrl) => {
    'ngInject';

    const extraMethods = {
      update: {
        method: 'PUT'
      }
    };

    const idAndVerb = {
      id: '@id',
      verb: '@verb'
    };

    const api = {
      idAndVerb,

      add(config) {
        let params;
        let url;

        const orig = angular.copy(idAndVerb);
        params = angular.extend(orig, config.params);
        url = $apiUrl + config.url + '/:id/:verb';
        
        // If we supply a method configuration, use that instead of the default extra.
        const methods = config.methods || extraMethods;

        api[config.resource] = $resource(url, params, methods);
      }
    };

    return api;
  })

  .provider('$trade', {

    list: (resource, query) => 
      ($trade => $trade.list(resource, query)),

    get: resource => 
      ($trade => $trade.get(resource)),

    create: (resource, model, params) => 
      ($trade => $trade.create(resource, model, params)),

    update: (resource, model) => 
      ($trade => $trade.update(resource, model)),

    remove: (resource, params) => 
      ($trade => $trade.remove(resource, params)),

    $get($q, $api) {

      const trade = {

        list(resource, query) {
          let queryObject = {};

          if (angular.isObject(query)) {
            queryObject = angular.extend(queryObject, query);
          }

          return $api[resource].query(queryObject).$promise;
        },

        get(resource, params) {
          return $api[resource].get(params).$promise;
        },

        create(resource, model, params) {
          return new $api[resource](model).$save(params);
        },

        update(resource, model) {
          const updated = $api[resource].update(model);
          return updated.$promise || updated;
        },

        remove(resource, params) {
          return $api[resource].remove(params).$promise;
        }
      };

      return trade;
    }
  })
  .name;

export default resources;
