"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/loading/Loader";
import Index from "@/app/signIn/page";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleSeeMoreClick = (path) => {
    router.push(path);
  };

  return (
    <div>
      <Index onSeeMoreClick={handleSeeMoreClick} />
    </div>
  );
}
