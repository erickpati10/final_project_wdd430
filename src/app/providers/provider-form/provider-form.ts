import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../../services/provider';
import { Provider } from '../provider.model';

@Component({
  selector: 'app-provider-form',
  standalone: false,
  templateUrl: './provider-form.html',
  styleUrl: './provider-form.css',
})
export class ProviderForm implements OnInit {
  isEditMode = false;
  providerId: string | null = null;
  providerData: Provider | null = null;

  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.providerId = this.route.snapshot.paramMap.get('id');

    if (this.providerId) {
      this.isEditMode = true;
      this.providerService.getProvider(this.providerId).subscribe({
        next: (provider) => {
          this.providerData = provider;
          this.cdr.detectChanges();
        },
        error: (error) => console.error('Error loading provider:', error),
      });
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    if (this.isEditMode && this.providerId) {
      this.providerService.updateProvider(this.providerId, form.value).subscribe({
        next: () => this.router.navigate(['/providers']),
        error: (error) => console.error('Error updating provider:', error),
      });
    } else {
      this.providerService.addProvider(form.value).subscribe({
        next: () => this.router.navigate(['/providers']),
        error: (error) => console.error('Error adding provider:', error),
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/providers']);
  }
}
