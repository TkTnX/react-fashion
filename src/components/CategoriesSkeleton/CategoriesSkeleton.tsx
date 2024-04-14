import ContentLoader from "react-content-loader";

const CategoriesSkeleton = () => (
  <ContentLoader
    speed={4}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#c0bfbf"
    foregroundColor="#ecebeb"
  >
    <rect x="180" y="297" rx="0" ry="0" width="3" height="1" />
    <rect x="0" y="0" rx="0" ry="0" width="203" height="341" />
  </ContentLoader>
);

export default CategoriesSkeleton;
