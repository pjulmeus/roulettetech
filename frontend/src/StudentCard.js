import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../workout.css";
import "../card.css";


const StudentCard = ({ id, name, description }) => {

//   const deleteWorkouts = () => {
//     WorkoutApi.deleteWorkout(newUser.id, id).then((res) => console.log(res));
//   };

  return (
    <>
      <Card className="my-2 flex-group">
        <CardBody>
          <CardTitle tag="h5">
            <a className="bebas-neue" href={`/workouts/${id}`}>
              <h1>Student Name : {first_name} {last_name} </h1>
            </a>
          </CardTitle>
          <CardText>
            <small className="text-muted">E-mail: {email}</small>
            <small className="text-muted">Phone Number: {phone_number}</small>
            <small className="text-muted">Date of Birth: {dob}</small>
          </CardText>
          <Link to={`/workouts/${id}/edit`}>
            <Button className="buttonspace">Edit Workout</Button>
          </Link>

          <a href="/workouts">
            <Button
              className="buttonspace"
              color="primary"
              onClick={deleteWorkouts}
            >
              Delete Workout
            </Button>
          </a>
        </CardBody>
      </Card>
    </>
  );
};

export default StudentCard;