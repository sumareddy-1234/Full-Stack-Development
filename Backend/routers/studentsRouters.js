import express from 'express';
const router = express.Router();
import {getStudentsDetails,addStudents,updateStudents,getStudentById, getStudentsDetailsWithFilters} from '../Controllers/studentsController.js';

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);
router.get('/get-student-byid/:userid', getStudentById);//params single
router.get('/get-std-details-withfilter', getStudentsDetailsWithFilters);//query parameters
router.put('/put-students/:id',updateStudents);

export default router;