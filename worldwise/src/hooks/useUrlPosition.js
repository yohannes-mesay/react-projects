import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const mapLng = searchParams.get("lng");
  const mapLat = searchParams.get("lat");
  return [ mapLng, mapLat] ;
}
