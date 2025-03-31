import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ 加這行！

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ 加這行進 imports 陣列
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleBooking';
}
