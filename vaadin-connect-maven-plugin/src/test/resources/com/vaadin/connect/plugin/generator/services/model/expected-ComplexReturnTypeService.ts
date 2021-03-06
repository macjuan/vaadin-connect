// @ts-ignore
import client from './connect-client.default';
import Account from './com/vaadin/connect/plugin/generator/services/model/ModelService/Account';

export function getAccounts(): Promise<Array<Account | null> | null> {
  return client.call('ComplexReturnTypeService', 'getAccounts');
}
