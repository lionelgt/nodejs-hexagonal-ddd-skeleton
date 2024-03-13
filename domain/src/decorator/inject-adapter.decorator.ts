import { Injectable as NestInjectable } from '@nestjs/common';

export const DECORATOR_INJECT_ADAPTER = 'decorator-inject-adapter';
export const InjectAdapter = () => {
  return (target: any, propertyKey: string) => {
    NestInjectable()(target); // Ensure class is @Injectable
    Reflect.defineMetadata(DECORATOR_INJECT_ADAPTER, true, target, propertyKey);
  };
};
