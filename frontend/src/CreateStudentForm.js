import React, { useState } from "react";

import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import "./form.css";

const CreateStudentForm = () => {
  const INITIAL_STATE = {
    first_name : "",
    last_name : "",
    email : "",
    phone_number : "",
    date_of_birth : "",
    classes : ""
  };

  const [fData, setFormData] = useState(INITIAL_STATE);
//   let history = useHistory();
  // console.log(history);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(newUser.id);
    console.log({ ...fData });

    // window.localStorage.setItem("user", JSON.stringify(fData))
    // alert(
    //   ` user ${fData.name}, password ${fData.description}, first name ${fData.user_id}`,
    // );
    // history.push("/workouts");
 
  };

  return (
    <>
      <h2 className="formHeader">
        Create a Student Profile!
      </h2>
      <Form className="formBody" onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="labelTitle" htmlFor="first_name">
             First Name
          </Label>
          <Input
            id="first_name"
            name="first_name"
            placeholder="First name"
            type="text"
            value={fData.first_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="labelTitle" htmlFor="last_name">
            Last Name
          </Label>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Last name"
            type="text"
            value={fData.last_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="labelTitle" htmlFor="last_name">
            E-Mail
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="E-mail here"
            type="email"
            value={fData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="labelTitle" htmlFor="last_name">
            Date of Birth
          </Label>
          <Input
            id="dob"
            name="dob"
            placeholder="Place of date of birth"
            type="text"
            value={fData.dob}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className="labelTitle" htmlFor="classes">
            Classes
          </Label>
          <Input
            id="classes"
            name="classes"
            placeholder="List of classes"
            type="text"
            value={fData.classes}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </>
  );
};

export default CreateStudentForm;