import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../components/form";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditProperty = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("router:", router, "id:", router.query.id);
  const { data: property, error } = useSWR(
    id ? `/api/properties/${id}` : null,
    fetcher
  );
  console.log("data:", property);
  if (error) return <p>Failed to load</p>;
  if (!property) return <p>Loading...</p>;

  const dataForm = {
    name: property.name,
    summary: property.summary,
    property_type: property.property_type,
    beds: property.beds,
    images: property.images,
  };

  return <Form pForm={dataForm} newProperty={false} />;
};

export default EditProperty;
