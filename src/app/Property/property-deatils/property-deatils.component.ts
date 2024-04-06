import { Component, OnInit } from '@angular/core';
import { PropertyDetails } from '../../Types/PropertyDetails';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { AddRentDto } from '../../Types/AddRentDto';

@Component({
  selector: 'app-property-deatils',
  templateUrl: './property-deatils.component.html',
  styleUrl: './property-deatils.component.css',
})
export class PropertyDeatilsComponent implements OnInit {
  propertyById: any | PropertyDetails;
  RentingForm: FormGroup;
  RentProperty(id: number, e: MouseEvent) {
    e.preventDefault();
    let fd = new FormData();
    fd.append('Checkin_date', this.RentingForm.value.Checkin_date);
    fd.append('Checkout_date', this.RentingForm.value.Checkout_date);
    fd.append('NumOfGuests', this.RentingForm.value.NumOfGuests);

    console.log('abdo');

    this.PropertyServices.Rent(id, fd).subscribe((response) => {
      console.log('eshtaa', response);
    });
  }

  constructor(
    private PropertyServices: PropertyService,
    private activatedroute: ActivatedRoute,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.RentingForm = this.fb.group({
      Checkin_date: [, Validators.required],
      Checkout_date: [, Validators.required],
      NumOfGuests: [, Validators.required],
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.PropertyServices.GetPropertyDetails(id).subscribe({
      next: (c) => {
        this.propertyById = c;
      },
      error: () => {},
    });

    {
    }
  }
}
