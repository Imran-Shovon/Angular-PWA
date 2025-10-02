import { Routes } from '@angular/router';
import { AllStudents } from './components/all-students/all-students';
import { Dashboard } from './components/dashboard/dashboard';
import { Subjects } from './components/subjects/subjects';

export const routes: Routes = [
    {
        path: '', component: Dashboard
    },
    {
        path: 'subjects/:subjectName',
        component: Subjects
    },
    {
        path: 'allStudents',
        component: AllStudents
    }
];
