interface IIdentityListController {
    getIdentities():void;
}

export class IdentityListController implements IIdentityListController {
  static componentName: string = 'IdentityListController';

  static $inject: Array<string> = ['$log', IdentitiesService.serviceName]
  

}
