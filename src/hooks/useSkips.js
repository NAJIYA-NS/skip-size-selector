// src/hooks/useSkips.js
import { useEffect, useState } from "react";

const useSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((res) => res.json())
      .then((data) => {
        setSkips(
          data.map((skip, index) => ({
            id: index,
            size: skip.size,
            name: `${skip.size} Yard Skip`,
            price: skip.price_before_vat,
            vat: skip.vat,
            hirePeriod: `${skip.hire_period_days} day hire period`,
            // Fallbacks for fields not in API
            dimensions:
              index < 3
                ? ["8ft x 4ft x 3ft", "8ft x 5ft x 3ft", "8ft x 6ft x 3ft"][index]
                : "8ft x 6ft x 3ft",
            suitableFor:
              index < 3
                ? [
                    "Garden waste, General household waste, Small renovation projects",
                    "General waste, Medium renovation projects",
                    "Commercial waste, Heavy duty cleanups",
                  ][index]
                : "General household or garden waste",
            imageUrl: skip.image || null,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skips", error);
        setLoading(false);
      });
  }, []);

  return { skips, loading };
};

export default useSkips;
