import BreakdownType from '@/components/BreakdownType';
import Layout from '@/components/Layout';
import data from '@/utils/data';

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.breakdowns.map((breakdown) => (
            <BreakdownType
              breakdown={breakdown}
              key={breakdown.slug}
            ></BreakdownType>
          ))}
        </div>
      </Layout>
    </>
  );
}
