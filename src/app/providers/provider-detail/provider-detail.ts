import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../services/provider';
import { Provider } from '../provider.model';

@Component({
  selector: 'app-provider-detail',
  standalone: false,
  templateUrl: './provider-detail.html',
  styleUrl: './provider-detail.css',
})
export class ProviderDetail implements OnInit {
  provider?: Provider;

  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.providerService.getProvider(id).subscribe({
        next: (data) => {
          this.provider = data;
          this.cdr.detectChanges();
        },
        error: (error) => console.error('Error loading provider:', error),
      });
    }
  }
}
