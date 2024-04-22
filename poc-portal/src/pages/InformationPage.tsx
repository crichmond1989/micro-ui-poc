import useStoreSelector from "../hooks/useStoreSelector";

function InformationPage() {
  const user = useStoreSelector("user");

  return <poc-information name={user?.name}></poc-information>;
}

export default InformationPage;
