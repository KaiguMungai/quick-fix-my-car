import Layout from '@/components/Layout';
import data from '@/utils/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function BreakdownScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const breakdown = data.breakdowns.find((x) => x.slug === slug);
  if (!breakdown) {
    return (
      <div>
        Sorry! The type of breakdown you are looking for cannot be solved using
        this App Please contact your Mechanic or the nearest service available
        right away.
      </div>
    );
  }
  return (
    <Layout title={breakdown.name}>
      <nav className="flex h-12  breakdown-nav items-center px-5 shadow-md justify-between">
        <h1 className="text-2xl font-bold">{breakdown.name}</h1>
        <div>
          <Link href={`/breakdown/${breakdown.slug}`} legacyBehavior>
            <a className="px-10 link-style text-lg">Symptoms</a>
          </Link>
          <Link href="/repairs" legacyBehavior>
            <a className="px-10 link text-lg">Repair Procedure</a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="px-10 link text-lg">Back to Home Page</a>
          </Link>
        </div>
      </nav>
      <div className="justify-between items-center">
        <h1 className="font-bold text-2xl m-auto mt-5 mb-5">Symptoms</h1>
        <div className="text-display">
          <h3 className="py-2  font-bold">1.{breakdown.symptom1}</h3>
          <p className="py-1">{breakdown.description1}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">2.{breakdown.symptom2}</h3>
          <p className="py-1">{breakdown.description2}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">3.{breakdown.symptom3}</h3>
          <p className="py-1">{breakdown.description3}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">4.{breakdown.symptom4}</h3>
          <p className="py-1">{breakdown.description4}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">5.{breakdown.symptom5}</h3>
          <p className="py-1">{breakdown.description5}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">6.{breakdown.symptom6}</h3>
          <p className="py-1">{breakdown.description6}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.symptom7}</h3>
          <p className="py-1">{breakdown.description7}</p>
        </div>
      </div>
    </Layout>
  );
}
