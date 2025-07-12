//const App = () => {
    //   const [formData, setFormData] = useState({
    //     fullName: "",
    //     birthDate: "",
    //     email: "",
    //     mobile: "",
    //     gender: "",
    //     occupation: ""
    //   });
    
    //   const idTypeRef = useRef();
    //   const idNumberRef = useRef();
    //   const authorityRef = useRef();
    //   const issueDateRef = useRef();
    //   const issueStateRef = useRef();
    //   const expiryDateRef = useRef();
    
    //   const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("State values:", formData);
    //     console.log("Ref values:", {
    //       idType: idTypeRef.current.value,
    //       idNumber: idNumberRef.current.value,
    //       authority: authorityRef.current.value,
    //       issueDate: issueDateRef.current.value,
    //       issueState: issueStateRef.current.value,
    //       expiryDate: expiryDateRef.current.value
    //     });
    //   };
    
    //   return (
    //     <div className="container">
    //       <form className="form" onSubmit={handleSubmit}>
    //         <h2><u>Registration</u></h2>
    //         <h4>Personal Details</h4>
    //         <div className="grid">
    //   <input type="text" name="fullName" placeholder="Enter your name" value={formData.fullName} onChange={handleChange} />
    //   <input type="text" name="birthDate" placeholder="Enter birth date (e.g. 20050101)" value={formData.birthDate} onChange={handleChange} />
    //   <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
    //   <input type="tel" name="mobile" placeholder="Enter mobile number" value={formData.mobile} onChange={handleChange} />
    //   <input type="text" name="gender" placeholder="Enter your gender" value={formData.gender} onChange={handleChange} />
    //   <input type="text" name="occupation" placeholder="Enter occupation" value={formData.occupation} onChange={handleChange} />
    // </div>
    
    // <h4>Identity Details</h4>
    // <div className="grid">
    //   <input type="text" placeholder="Enter ID type" ref={idTypeRef} />
    //   <input type="text" placeholder="Enter ID number" ref={idNumberRef} />
    //   <input type="text" placeholder="Enter issue department" ref={authorityRef} />
    //   <input type="text" placeholder="Enter ID issue date (e.g. 20240711)" ref={issueDateRef} />
    //   <input type="text" placeholder="Enter ID issue state" ref={issueStateRef} />
    //   <input type="text" placeholder="Enter ID expiry date (e.g. 20250711)" ref={expiryDateRef} />
    // </div>
    
    
    //         <button type="submit" className="btn">Next ➞</button>
    //       </form>
    //     </div>
    //   );
    // };
    
    // export default App;
    