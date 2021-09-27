class BaseModel {
  message: string;
  data: any;
  errno: number

  constructor(data: any, message: string = '') {
    this.data = data || null
    this.message = message || ''
  }
}

class SuccessModel extends BaseModel {
  constructor(data: any, message?: string) {
    super(data, message)
    this.errno = 0
  }
}

class ErrorModel extends BaseModel {

  constructor(data: any, message?: any) {
    super(data, message)
    this.errno = -1
  }
}

export {
  SuccessModel,
  ErrorModel
};
