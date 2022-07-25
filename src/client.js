import client from "@sanity/client";

export default client({
    projectId: "82l3omkv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-07-25",
});