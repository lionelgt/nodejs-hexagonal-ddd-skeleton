import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef, ModulesContainer } from '@nestjs/core';
import { DECORATOR_INJECT_ADAPTER, DOMAIN_MODULE_NAME } from '@skeleton/Domain';

@Injectable()
export class DomainInjectAdapterInitializer implements OnModuleInit {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly modulesContainer: ModulesContainer,
  ) {}
  async onModuleInit() {
    const modules = this.modulesContainer.values();
    for (const module of modules) {
      if (module.name != DOMAIN_MODULE_NAME) continue;

      for (const provider of module.providers.values()) {
        const { instance } = provider;
        if (!instance) continue;

        const propertyKeys = Object.getOwnPropertyNames(instance);
        for (const key of propertyKeys) {
          const metadata = Reflect.getMetadata(
            DECORATOR_INJECT_ADAPTER,
            instance,
            key,
          );
          if (!metadata) continue;

          const propertyInstance = this.moduleRef.get(key, { strict: false });
          if (propertyInstance) {
            const targetInstance = this.moduleRef.get(provider.token, {
              strict: false,
            });
            targetInstance[key] = propertyInstance;
          }
        }
      }
    }
  }
}
