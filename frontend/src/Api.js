// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getTeachers = () => axios.get(`${API_URL}teachers/`);
export const getTeacher = (id) => axios.get(`${API_URL}teachers/${id}/`);
export const createTeacher = (teacher) => axios.post(`${API_URL}teachers/`, teacher);
export const updateTeacher = (id, teacher) => axios.put(`${API_URL}teachers/${id}/`, teacher);
export const deleteTeacher = (id) => axios.delete(`${API_URL}teachers/${id}/`);

export const getStudents = () => axios.get(`${API_URL}students/`);
export const getStudent = (id) => axios.get(`${API_URL}students/${id}/`);
export const createStudent = (student) => axios.post(`${API_URL}students/`, student);
export const updateStudent = (id, student) => axios.put(`${API_URL}students/${id}/`, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}students/${id}/`);

export const getClasses = () => axios.get(`${API_URL}classes/`);
export const getClass = (id) => axios.get(`${API_URL}classes/${id}/`);
export const createClass = (classObj) => axios.post(`${API_URL}classes/`, classObj);
export const updateClass = (id, classObj) => axios.put(`${API_URL}classes/${id}/`, classObj);
export const deleteClass = (id) => axios.delete(`${API_URL}classes/${id}/`);