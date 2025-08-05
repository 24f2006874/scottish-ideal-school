
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="container flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-9xl font-serif font-bold text-school-navy">404</h1>
        <div className="w-24 h-1 bg-school-maroon my-6"></div>
        <h2 className="text-3xl font-serif font-bold mb-4 text-gray-700">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" className="bg-school-navy hover:bg-school-navy/90" asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFound;
