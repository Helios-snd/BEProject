class ApiResponse {
    constructor(statusCode,success, message ="Success", data) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success =statusCode < 400;
    
    }
}