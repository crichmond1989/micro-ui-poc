import useStoreSelector from "../hooks/useStoreSelector";

function ResourceLibraryPage() {
  const user = useStoreSelector("user");

  return <poc-resource-library name={user?.name}></poc-resource-library>;
}

export default ResourceLibraryPage;
