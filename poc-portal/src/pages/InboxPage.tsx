import useStoreSelector from "../hooks/useStoreSelector";

function InboxPage() {
  const user = useStoreSelector("user");

  return <poc-inbox name={user?.name}></poc-inbox>;
}

export default InboxPage;
