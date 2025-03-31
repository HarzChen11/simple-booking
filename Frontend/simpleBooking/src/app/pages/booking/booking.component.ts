import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ]
})
export class BookingComponent {
  formData = {
    partySize: 2,
    date: null,
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    note: ''
  };

  partySizes = [1, 2, 3, 4, 5, 6, 7, 8];
  timeSlots = [
    '7:00 am', '7:30 am', '8:00 am', '8:30 am',
    '9:00 am', '9:30 am', '10:00 am', '10:30 am',
    '11:00 am', '11:30 am', '12:00 pm', '12:30 pm',
    '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm'
  ];
}
