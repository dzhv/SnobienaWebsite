import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/app.component';
import { CategoriesComponent } from './components/categories.component';
import { HomeComponent } from './components/home.component';
import { GalleryComponent } from './components/gallery.component';

import { PhotoUploader } from './scripts/photoUploader';
import { PhotoService } from './scripts/photoService';

import { FileUploadModule } from 'ng2-file-upload';
import {CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-4.x';
import * as cloudinary from 'cloudinary-core';
import cloudinaryConfiguration from './scripts/cloudinaryConfig';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'kategorijos', component: CategoriesComponent },
  { path: 'kategorijos/:categoryId', component: GalleryComponent },
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    GalleryComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration)
  ],
  providers: [PhotoUploader, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
