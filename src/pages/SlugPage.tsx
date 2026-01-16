import { Navigate, useParams } from "react-router-dom";
import CityPage from "@/pages/CityPage";
import StatePage from "@/pages/StatePage";
import { getStateBySlug } from "@/data/states";
import { getCityBySlug } from "@/data/cities";

const SlugPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  // Prefer StatePage when a slug could theoretically overlap.
  if (getStateBySlug(slug)) {
    return <StatePage />;
  }

  if (getCityBySlug(slug)) {
    return <CityPage />;
  }

  return <Navigate to="/404" replace />;
};

export default SlugPage;
