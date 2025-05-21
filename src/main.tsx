import ReactDOM from "react-dom/client";

import Layout from "../src/components/Layout";


const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Layout>
      <div></div>
    </Layout>
  );
} else {
  console.error("Root element not found");
}
