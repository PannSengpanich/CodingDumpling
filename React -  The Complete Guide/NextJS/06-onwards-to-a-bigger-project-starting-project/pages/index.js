import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

// run on server not client
//to prepare props for this page
export async function getStaticProps() {
  // fetch data from an API, read data from some files

  const client = await MongoClient.connect(
    "mongodb+srv://dbUser:hvaIX5bXYdyXJbW2@cluster0.vpq0rkv.mongodb.net/",
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // .find() give access to all data inside
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  //always return something
  return {
    //set as props for this page component
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // incremental static generation
    // regenerate every 1 second
    revalidate: 1,
  };
}

// // also run on servers
// // run for every incoming request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API

//   return { props: { meetups: DUMMY_MEETUPS } };
// }

function HomePage(props) {
  //* no longer need this code
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </>
  );
}

export default HomePage;
