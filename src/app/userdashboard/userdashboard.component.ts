import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  enrolledCourses: string[] = ['Course 1', 'Course 2', 'Course 3']; // Sample enrolled courses
  availableCourses: string[] = ['Course A', 'Course B', 'Course C']; // Sample available courses
  searchText: string = '';
  username: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
    });
  }

  displayDetails(): void {
    // TODO: Implement the logic to display user details
  }

  displayEnrolledCourses(): void {
    // TODO: Implement the logic to display enrolled courses
  }

  logout(): void {
    // Clear the token from localStorage and redirect to the login page
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  searchCourses(): void {
    // TODO: Implement the search functionality based on the searchText value
    console.log('Search for courses: ', this.searchText);
  }
}
