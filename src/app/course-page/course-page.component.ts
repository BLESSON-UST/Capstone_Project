import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

ngOnInit() {
  // Retrieve the course ID from the route parameter
  const courseId = this.route.snapshot.params['courseId'];
  
  // Use the course ID to fetch the course details and topics from your data source
  // Assign the fetched data to the component properties to display in the template
}


}
