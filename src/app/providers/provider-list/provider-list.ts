import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProviderService } from '../../services/provider';
import { Provider } from '../provider.model';

@Component({
  selector: 'app-provider-list',
  standalone: false,
  templateUrl: './provider-list.html',
  styleUrl: './provider-list.css',
})
export class ProviderList implements OnInit {
  providers: Provider[] = [];
  filteredProviders: Provider[] = [];

  constructor(
    private providerService: ProviderService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders(): void {
    this.providerService.getProviders().subscribe({
      next: (data) => {
        this.providers = data;
        this.filteredProviders = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('API Error:', error);
      },
    });
  }

  search(term: string): void {
    const lower = term.toLowerCase();
    this.filteredProviders = this.providers.filter(
      (p) =>
        p.providerName.toLowerCase().includes(lower) ||
        p.serviceType.toLowerCase().includes(lower) ||
        p.city.toLowerCase().includes(lower),
    );
  }

  deleteProvider(id?: string): void {
    if (!id) return;
    this.providerService.deleteProvider(id).subscribe({
      next: () => this.loadProviders(),
      error: (error) => console.error('Error deleting provider:', error),
    });
  }
}
