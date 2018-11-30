// Generated from GeneratorTestClass.java
import defaultClient from './connect-client.default';

/**
 * This class is used for OpenApi generator test
 */
export class GeneratorTestClass {

  /**
   * Create a GeneratorTestClass instance.
   * @param {ConnectClient=} client - an instance of ConnectClient
   */
  constructor(client = defaultClient) {
    this._client = client;
  }

  getAllUsers() {
    return this._client.call('GeneratorTestClass', 'getAllUsers');
  }
}

const service = new GeneratorTestClass(defaultClient);

export const getAllUsers = service.getAllUsers.bind(service);