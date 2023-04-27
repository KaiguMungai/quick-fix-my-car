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
          <p className="px-10 link-style text-lg">Symptoms & Repair</p>
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
      <div className="justify-between items-center mt-5">
        <h1 className="font-bold text-2xl m-auto mt-7 mb-7">
          Steps to Repair a {breakdown.name}
        </h1>
        <div className="text-display">
          <h3 className="py-2  font-bold">1.{breakdown.step1}</h3>
          <p className="py-1">{breakdown.step1details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">2.{breakdown.step2}</h3>
          <p className="py-1">{breakdown.step2details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">3.{breakdown.step3}</h3>
          <p className="py-1">{breakdown.step3details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">4.{breakdown.step4}</h3>
          <p className="py-1">{breakdown.step4details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">5.{breakdown.step5}</h3>
          <p className="py-1">{breakdown.step5details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">6.{breakdown.step6}</h3>
          <p className="py-1">{breakdown.step6details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">7.{breakdown.step7}</h3>
          <p className="py-1">{breakdown.step7details}</p>
        </div>
        <div className="text-display">
          <h3 className="py-2  font-bold">8.{breakdown.step8}</h3>
          <p className="py-1">{breakdown.step8details}</p>
        </div>
      </div>
    </Layout>
  );
}
