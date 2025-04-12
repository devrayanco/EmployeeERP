import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUploadService {
  private app = initializeApp(environment.firebase);
  private storage = getStorage(this.app);

  async uploadFile(file: File, path: string): Promise<string> {
    const fileRef = ref(this.storage, `${path}/${file.name}`);
    const snapshot = await uploadBytes(fileRef, file);
    return await getDownloadURL(snapshot.ref);
  }
}
