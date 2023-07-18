import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "gfhx299p",
    dataset: "production",
    useCdn: true,
});