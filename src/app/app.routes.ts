import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Subjects } from './components/subjects/subjects';
import { AllStudents } from './components/all-students/all-students';

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
