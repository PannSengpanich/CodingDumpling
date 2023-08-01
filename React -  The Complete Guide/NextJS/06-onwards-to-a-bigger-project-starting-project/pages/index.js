import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "meetup1",
    image:
      "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-out-1761385949",
    address: "Some address 5, 12345 Some City",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "meetup2 ",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fdog%2F&psig=AOvVaw2rHYwCP0odExDO3lARqBzz&ust=1690980060335000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDB-t69u4ADFQAAAAAdAAAAABAP",
    address: "Some address 4, 1234 Some City",
    description: "this is a second meetup",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}
export default HomePage;
