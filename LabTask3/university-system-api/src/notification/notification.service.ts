import {
  Injectable,
  Inject,
  forwardRef,
} from '@nestjs/common';

import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {

  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(
    studentName: string,
    message: string,
  ) {
    return {
      student: studentName,
      message,
      status: 'Notification sent',
    };
  }

  checkEnrollmentAndNotify(
    studentName: string,
    courseId: string,
  ) {

    const enrollments =
      this.enrollmentService.getEnrollments();

    return {
      student: studentName,
      courseId,
      enrollments,
    };
  }

}