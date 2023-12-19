import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  @Input() ph = "Buscar---"
  @Input() label = "Buscar: "
  name = ""
}
