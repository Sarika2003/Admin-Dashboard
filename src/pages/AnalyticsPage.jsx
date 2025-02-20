import { lazy, Suspense } from "react";
import Header from "../components/common/Header";

const OverviewCards = lazy(() => import("../components/analytics/OverviewCards"));
const RevenueChart = lazy(() => import("../components/analytics/RevenueChart"));
// const ChannelPerformance = lazy(() => import("../components/analytics/ChannelPerformance"));
// const ProductPerformance = lazy(() => import("../components/analytics/ProductPerformance"));

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <Suspense fallback={<div>Loading...</div>}>
          <OverviewCards />
          <RevenueChart />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* <ChannelPerformance />
            <ProductPerformance /> */}
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default AnalyticsPage;
