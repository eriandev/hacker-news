import { Component, HostListener, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { New } from 'src/app/modules/home/interfaces/news';
import { NewsService } from 'src/app/modules/home/services/news.service';
import { StorageService } from 'src/app/modules/shared/services/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
    const scrolled = window.scrollY + window.innerHeight;
    if (limit === scrolled && !this.loading) {
      if (this.currentSelected) {
        this.loading = true;
        this.currentPage++;
        this.getNews(this.currentSelected, this.currentPage);
      }
    }
  }

  private currentPage = 0;

  public currentSelected;
  public newsData: New[] = [];
  public loading: boolean = false;

  constructor(private readonly newsService: NewsService, private readonly storageService: StorageService) {
    this.currentSelected = this.storageService.get<string>('selected');
  }

  ngOnInit(): void {
    if (this.currentSelected) {
      this.loading = true;
      this.getNews(this.currentSelected);
    }
  }

  public getNews(query: string, page: number = 0) {
    const isAnotherQuery = this.currentSelected !== query;
    this.currentSelected = query;
    this.storageService.set('selected', query);
    this.newsService
      .getSelectedNews(query, page)
      .pipe(take(1))
      .subscribe((newsResponse) => {
        this.newsData = isAnotherQuery ? newsResponse.hits : [...this.newsData, ...newsResponse.hits];
        this.loading = false;
      });
  }
}
