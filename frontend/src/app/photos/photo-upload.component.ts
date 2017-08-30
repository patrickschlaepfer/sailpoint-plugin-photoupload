export interface IPhotoUploadController {
}

export class PhotoUploadController implements  IPhotoUploadController {
    static controllerId = 'PhotoUploadController';
    
    public dzOptions:any = {
    		url : '/alt_upload_url',
    		paramName : 'photo',
    		maxFilesize : '10',
    		maxFiles: '1',
    		acceptedFiles : 'image/jpeg, images/jpg, image/png',
    		addRemoveLinks : true,
    		dictDefaultMessage : 'Click to add or drop photo',
    		autoProcessQueue:false
    }
    
    
    public dzCallbacks:any = {
    		'addedfile': function(file) {
    			console.log(file);
    		}
    }
   
    static $inject: Array<string> = [
        '$log'];
    constructor(private $log: angular.ILogService) {
    	
    }

    
    
}