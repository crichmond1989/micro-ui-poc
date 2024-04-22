import useStoreSelector from "../hooks/useStoreSelector";
import store from "../store/store";

function HomePage() {
  const user = useStoreSelector("user");

  const name = user?.name;

  return (
    <>
      <h2>Home</h2>
      <div className="d-flex flex-column" style={{ gap: "1rem" }}>
        <div>
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            id="userName"
            type="text"
            className="form-control"
            placeholder="Frodo Baggins"
            value={name ?? ""}
            onChange={ev => store.setProp("user", { name: ev.currentTarget.value })}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
