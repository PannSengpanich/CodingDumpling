// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}
export default NewMeetUpPage;
