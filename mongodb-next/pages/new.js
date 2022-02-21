import Form from "../components/form";

export default function newProperty() {
  const newPropertyForm = {
    name: "",
    summary: "",
    property_type: "",
    beds: "",
    bathrooms: "",
    amenities: [],
    address: "",
    price: "",
    images: "",
  };

  return <Form formId="" pForm={newPropertyForm} />;
}
