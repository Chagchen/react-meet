import Card from "../ui/Card";
import classes from "../meetups/NewMeetupFrom.module.css";
import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesription
    };
    props.onAddMeetup(meetupData); //we add this onAddMeetup to the NewNeetup.js
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
