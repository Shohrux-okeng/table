import React, { useState, useRef } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    email: "",
    mobile: "",
    gender: "",
    occupation: "",
  });

  const idTypeRef = useRef();
  const idNumberRef = useRef();
  const authorityRef = useRef();
  const issueDateRef = useRef();
  const issueStateRef = useRef();
  const expiryDateRef = useRef();

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...formData,
      idType: idTypeRef.current.value,
      idNumber: idNumberRef.current.value,
      authority: authorityRef.current.value,
      issueDate: issueDateRef.current.value,
      issueState: issueStateRef.current.value,
      expiryDate: expiryDateRef.current.value,
    };

    setRecords([...records, newRecord]);

    setFormData({
      fullName: "",
      birthDate: "",
      email: "",
      mobile: "",
      gender: "",
      occupation: "",
    });

    idTypeRef.current.value = "";
    idNumberRef.current.value = "";
    authorityRef.current.value = "";
    issueDateRef.current.value = "";
    issueStateRef.current.value = "";
    expiryDateRef.current.value = "";
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <h4>Personal Details</h4>
        <div className="grid">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="birthDate"
            placeholder="Birth Date"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>

        <h4>Identity Details</h4>
        <div className="grid">
          <input type="text" placeholder="ID Type" ref={idTypeRef} />
          <input type="text" placeholder="ID Number" ref={idNumberRef} />
          <input type="text" placeholder="Authority" ref={authorityRef} />
          <input type="text" placeholder="Issue Date" ref={issueDateRef} />
          <input type="text" placeholder="Issue State" ref={issueStateRef} />
          <input type="text" placeholder="Expiry Date" ref={expiryDateRef} />
        </div>

        <button type="submit" className="btn">
          Next
        </button>
      </form>

      {records.length > 0 && (
        <div className="table-wrapper">
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Birth Date</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Occupation</th>
                <th>ID Type</th>
                <th>ID Number</th>
                <th>Authority</th>
                <th>Issue Date</th>
                <th>Issue State</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item, i) => (
                <tr key={i}>
                  <td>{item.fullName}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.gender}</td>
                  <td>{item.occupation}</td>
                  <td>{item.idType}</td>
                  <td>{item.idNumber}</td>
                  <td>{item.authority}</td>
                  <td>{item.issueDate}</td>
                  <td>{item.issueState}</td>
                  <td>{item.expiryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Register;
