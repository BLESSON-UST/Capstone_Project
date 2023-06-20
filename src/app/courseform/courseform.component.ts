import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent {
  course: Course = new Course();

  constructor(private courseService: CourseService) {}

  onSubmit(): void {
    this.courseService.addCourse(this.course).subscribe(
      response => {
        // Handle the response or show success message
        console.log('Course added successfully:', response);
      },
      error => {
        // Handle the error or show error message
        console.error('An error occurred while adding the course:', error);
      }
    );
  }

}
