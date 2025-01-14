import React, { useState } from 'react';

const QualificationsForm = () => {
  // State to hold all qualifications
  const [qualifications, setQualifications] = useState([
    { school: '', degree: '', graduationYear: '' },
  ]);

  // Handle input changes
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQualifications = [...qualifications];
    updatedQualifications[index][name] = value;
    setQualifications(updatedQualifications);
  };

  // Add a new qualification
  const handleAddQualification = () => {
    setQualifications([
      ...qualifications,
      { school: '', degree: '', graduationYear: '' },
    ]);
  };

  // Remove a qualification at a specific index
  const handleRemoveQualification = (index) => {
    const updatedQualifications = qualifications.filter((_, i) => i !== index);
    setQualifications(updatedQualifications);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the data to the server or handle it as needed
    console.log('Submitted Qualifications:', qualifications);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>School Qualifications</h2>
      {qualifications.map((qualification, index) => (
        <div key={index} className="qualification-entry">
          <label>
            School:
            <input
              type="text"
              name="school"
              value={qualification.school}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={qualification.degree}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </label>
          <label>
            Graduation Year:
            <input
              type="number"
              name="graduationYear"
              value={qualification.graduationYear}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </label>

          {/* Remove qualification button */}
          {qualifications.length > 1 && (
            <button type="button" onClick={() => handleRemoveQualification(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      
      {/* Add new qualification button */}
      <button type="button" onClick={handleAddQualification}>
        Add Qualification
      </button>
      
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default QualificationsForm;
