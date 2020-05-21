import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public async set(storageKey: string, data: any) {
    await this.storage.set(storageKey, data);
  }

  public async get(storageKey: string) {
    return await this.storage.get(storageKey);
  }

  public async clearStorage() {
    await this.storage.clear();
  }
}
