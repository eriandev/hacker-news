import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { New } from 'src/app/modules/home/interfaces/news';
import { NewsService } from 'src/app/modules/home/services/news.service';
import { StorageService } from 'src/app/modules/shared/services/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();

  public newsData: New[] = [];
  public currentSelected;

  constructor(private readonly newsService: NewsService, private readonly storageService: StorageService) {
    this.currentSelected = this.storageService.get<string>('selected')
  }

  ngOnInit(): void {
    if(this.currentSelected) {
      this.getNews(this.currentSelected)
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public getNews(query: string, page: number = 0) {
    this.currentSelected = query;
    this.storageService.set('selected', query);
    this.newsService.getSelectedNews(query, page)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(newsResponse => {
        this.newsData = newsResponse.hits
      })
  }
}
