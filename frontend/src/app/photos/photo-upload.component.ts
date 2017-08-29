export interface IPhotoUploadController {
}

export class PhotoUploadController implements  IPhotoUploadController {
    static controllerId = 'PhotoUploadController';
   
    static $inject: Array<string> = [
        '$log'];
    constructor(private $log: angular.ILogService) {
    	
    }

}