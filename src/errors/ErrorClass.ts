class ErrorJoi extends Error {
  constructor(message?:string) {
    super(message);
    this.name = 'ErrorJoi';
  }
}

export = { ErrorJoi };