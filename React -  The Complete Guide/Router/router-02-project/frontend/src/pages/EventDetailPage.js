import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>My Events Details Page</h1>
      {params.id}
    </>
  );
}
export default EventDetailPage;
