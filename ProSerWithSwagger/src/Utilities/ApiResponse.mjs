class ApiResponse {
  constructor(status, data, message = "success") {
    this.status = status;
    this.data = data;
    this.message = message;
    success = this.success < 400;
  }
}

export { ApiResponse };
