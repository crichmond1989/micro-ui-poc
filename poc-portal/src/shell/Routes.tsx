import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import InboxPage from "../pages/InboxPage";
import InformationPage from "../pages/InformationPage";
import ResourceLibraryPage from "../pages/ResourceLibraryPage";

function _Routes() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="inbox" element={<InboxPage />} />
      <Route path="information" element={<InformationPage />} />
      <Route path="resource-library" element={<ResourceLibraryPage />} />
    </Routes>
  );
}

export default _Routes;
