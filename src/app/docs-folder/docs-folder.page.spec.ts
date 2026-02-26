import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocsFolderPage } from './docs-folder.page';

describe('DocsFolderPage', () => {
  let component: DocsFolderPage;
  let fixture: ComponentFixture<DocsFolderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
