import React, { useState } from 'react';
import "../offertory/offertory.css"

const OffertoryForm = () => {
  // State to hold all offerings
  const [offerings, setOfferings] = useState([
    { school: '', degree: '', graduationYear: '' },
  ]);

  // Handle input changes
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedofferings = [...offerings];
    updatedofferings[index][name] = value;
    setOfferings(updatedofferings);
  };

  // Add a new qualification
  const handleAddQualification = () => {
    setOfferings([
      ...offerings,
      { school: '', degree: '', graduationYear: '' },
    ]);
  };

  // Remove a qualification at a specific index
  const handleRemoveQualification = (index) => {
    const updatedofferings = offerings.filter((_, i) => i !== index);
    setOfferings(updatedofferings);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the data to the server or handle it as needed
    console.log('Submitted offerings:', offerings);
  };

  return (
    <div className='block'>
      <form
        onSubmit={handleSubmit}
        className="block bg-gradient-to-br from-white to-[rgba(173,216,230,0.3)]"
      >
        <h2>Offerings</h2>
        {offerings.map((offering, index) => (
          <div key={index} className="block qualification-entry">
            <label>
              School:
              <input
                type="text"
                name="school"
                value={offering.school}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                name="degree"
                value={offering.degree}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </label>
            <label>
              Graduation Year:
              <input
                type="number"
                name="graduationYear"
                value={offering.graduationYear}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </label>

            {/* Remove qualification button */}
            {offerings.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveQualification(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        {/* Add new qualification button */}
        <div className="block" id="butt">
          <button type="button" onClick={handleAddQualification}>
            Add another offering
          </button>

          {/* Submit button */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default OffertoryForm;
