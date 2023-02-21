import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'

@Component({
  selector: 'stay-list',
  templateUrl: './stay-list.component.html',
  styleUrls: ['./stay-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StayListComponent {
  @Input() stays!: Stay[] | null
  @Output() remove = new EventEmitter<string>()

  trackByFn(idx: number, item: any) {
    return item._id
  }
}
