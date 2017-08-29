import {IListResult} from "../models/listresult.model";

export interface IIdentitiesService {
    getApplications(id: string): angular.IPromise<any>;
}

export class IdentitiesService implements IIdentitiesService {
    static serviceName: string = "IdentitiesService";

    constructor(public $http: angular.IHttpService, public $log: angular.ILogService) {}

    public getApplications(id: string): angular.IPromise<any> {

        this.$log.info('Getting Identities');

        return this.$http<IListResult[]>({
            method: 'get',
            url: SailPoint.CONTEXT_PATH+'/plugin/rest/BoilerplatePlugin/identites,
            headers: {
                'X-XSRF-TOKEN': PluginHelper.getCsrfToken()
            }
        }).then((result: {data: IListResult[]}) => result.data);
    }
}
