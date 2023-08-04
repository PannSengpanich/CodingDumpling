import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
//! fetches all the meetup IDs and return as paths
//! needed if uses getStaticProps
export async function getStaticPaths() {
  const client = await MongoClient.connect("");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // retrieve all documents in a collection but return only its _id
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    //all the pages should be pre-generated
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

//! fetch data for single meetup
export async function getStaticProps(context) {
  // fetch data for a single meetup

  //get ID from URL
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect("");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log(selectedMeetup);
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}></MeetupDetail>
    </>
  );
}

export default MeetupDetails;
