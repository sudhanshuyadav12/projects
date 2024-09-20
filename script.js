document.addEventListener('DOMContentLoaded', function () {
    const doctorList = document.getElementById('doctor-list');
    const patientList = document.getElementById('patient-list');
    const appointmentList = document.getElementById('appointment-list');

    const addDoctorForm = document.getElementById('add-doctor-form');
    const addPatientForm = document.getElementById('add-patient-form');
    const addAppointmentForm = document.getElementById('add-appointment-form');

    const doctors = [];
    const patients = [];
    const appointments = [];

// to create the things better then me to cange the things better then me
// to crate the things better then me to chang the thiings better then me to avoid have something new that things betterhen me to change the things to have bete
// create soemthings better then me to chage the thigs bette then me to have somethings tbetter then to vhange the netwotk of creat the thhongs better 
then me to chabge the thing better tthne me to avoid thee things beter then me  tii change the thee things tbter theen 
    // Add Doctor
    addDoctorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('doctor-name').value;
        const specialization = document.getElementById('doctor-specialization').value;
        const doctor = { name, specialization };
        doctors.push(doctor);
        updateDoctorList();
        addDoctorForm.reset();
    });

    // Add Patient
    addPatientForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('patient-name').value;
        const age = document.getElementById('patient-age').value;
        const phone = document.getElementById('patient-phone').value;
        const address = document.getElementById('patient-address').value;
        const patient = { name, age, phone, address };
        patients.push(patient);
        updatePatientList();
        addPatientForm.reset();
        import java util.*;
        public class javabasics{
        public static void MediaDeviceInfo(string args[]){
            int a=4;
            int b=5;
            int sum =a+b;
            public static void int{
                public static void Media(String args[]){
                
                }
            }

        System.out.println(a+b);

        }

        }
    });

    // Schedule Appointment
    addAppointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const patientName = document.getElementById('appointment-patient').value;
        const doctorName = document.getElementById('appointment-doctor').value;
        const date = document.getElementById('appointment-date').value;
        const time = document.getElementById('appointment-time').value;
        const appointment = { patientName, doctorName, date, time };
        appointments.push(appointment);
        updateAppointmentList();
        addAppointmentForm.reset();
    });

    // Update Doctor List
    function updateDoctorList() {
        doctorList.innerHTML = '';
        doctors.forEach((doctor, index) => {
            const li = document.createElement('li');
            li.textContent = `${doctor.name} - ${doctor.specialization}`;
            doctorList.appendChild(li);
        });
    }

    // Update Patient List
    function updatePatientList() {
        patientList.innerHTML = '';
        patients.forEach((patient, index) => {
            const li = document.createElement('li');
            li.textContent = `${patient.name}, ${patient.age} years old, ${patient.phone}, ${patient.address}`;
            patientList.appendChild(li);
        });
    }

    // Update Appointment List
    function updateAppointmentList() {
        appointmentList.innerHTML = '';
        appointments.forEach((appointment, index) => {
            const li = document.createElement('li');
            li.textContent = `Appointment: ${appointment.patientName} with ${appointment.doctorName} on ${appointment.date} at ${appointment.time}`;
            appointmentList.appendChild(li);
        });
    }
});
