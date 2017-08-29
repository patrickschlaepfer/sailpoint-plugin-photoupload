export interface IListResult {
    attributes: string;
    complete: boolean;
    count: number
    errors: string;
    failure: boolean;
    metaData: string;
    objects: any[];
    requestID: string;
    retry: boolean;
    retryWait: number;
    status: string;
    success: boolean;
    warnings: string;
}

export class ListResult implements  IListResult {

    private attributes: string;
    private complete: boolean;
    private count: number;
    private errors: string;
    private failure: boolean;
    private metaData: string;
    private objects: any[];
    private requestID: string;
    private retry: boolean;
    private retryWait: number;
    private status: string;
    private success: boolean;
    private warnings: string;

    constructor(listResult: IListResult) {
        this.attributes = listResult.attributes;
        this.complete = listResult.complete;
        this.count = listResult.count;
        this.errors = listResult.errors;
        this.failure = listResult.failure;
        this.metaData = listResult.metaData;
        this.objects = listResult.objects;
        this.requestID = listResult.requestID;
        this.retry = listResult.retry;
        this.retryWait = listResult.retryWait;
        this.status = listResult.status;
        this.success = listResult.success;
        this.warnings = listResult.warnings;
    }

}
