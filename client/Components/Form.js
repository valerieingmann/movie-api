import React from "react";

const Form = props => {
  const { handleSubmit, title, setTitle } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Search Movies by Title</label>
        <div>
          <input
            type="text"
            id="title-input"
            value={title}
            placeholder="title"
            onChange={event => setTitle(event.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
