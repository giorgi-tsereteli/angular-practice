import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input() imageName!: string;
  @Input({required: true}) image!: { src: string; alt: string }
  @Input() title!: string;

  getImagePath(imageName: string): string {
    return `${imageName.toLowerCase().replace(/ /g, '-')}.png`;
  }
}
